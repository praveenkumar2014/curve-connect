import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { createHmac } from "node:crypto";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const PAYU_MERCHANT_SALT = Deno.env.get('PAYU_MERCHANT_SALT');

function verifyPayUResponse(params: Record<string, string>, salt: string): boolean {
  const receivedHash = params.hash;
  const status = params.status;
  
  // Reverse hash verification
  const hashString = `${salt}|${status}|||||||||||${params.email}|${params.firstname}|${params.productinfo}|${params.amount}|${params.txnid}|${params.key}`;
  const calculatedHash = createHmac('sha512', salt).update(hashString).digest('hex');
  
  return receivedHash === calculatedHash;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Parse form data from PayU callback
    const formData = await req.formData();
    const params: Record<string, string> = {};
    formData.forEach((value, key) => {
      params[key] = value.toString();
    });

    console.log('PayU callback received:', params);

    const txnid = params.txnid;
    const status = params.status;
    const amount = params.amount;
    const payuMoneyId = params.payuMoneyId || params.mihpayid;

    if (!PAYU_MERCHANT_SALT) {
      console.error('PayU salt not configured');
      return new Response(null, {
        status: 302,
        headers: { Location: '/payment?status=error&message=Configuration error' }
      });
    }

    // Verify hash
    const isValid = verifyPayUResponse(params, PAYU_MERCHANT_SALT);
    
    if (!isValid) {
      console.error('Invalid hash in PayU response');
      // Update payment status to failed
      await supabase
        .from('payu_payments')
        .update({ 
          status: 'hash_mismatch',
          payu_response: params,
        })
        .eq('transaction_id', txnid);

      return new Response(null, {
        status: 302,
        headers: { Location: '/payment?status=error&message=Invalid response' }
      });
    }

    // Update payment record
    const newStatus = status === 'success' ? 'completed' : 'failed';
    
    const { error: updateError } = await supabase
      .from('payu_payments')
      .update({
        status: newStatus,
        payu_transaction_id: payuMoneyId,
        payu_response: params,
        completed_at: status === 'success' ? new Date().toISOString() : null,
      })
      .eq('transaction_id', txnid);

    if (updateError) {
      console.error('Failed to update payment:', updateError);
    }

    // If payment successful, update user's subscription
    if (status === 'success') {
      const { data: payment } = await supabase
        .from('payu_payments')
        .select('user_id, product_info')
        .eq('transaction_id', txnid)
        .single();

      if (payment) {
        // Update user's premium status based on product
        console.log(`Payment successful for user ${payment.user_id}, product: ${payment.product_info}`);
        
        // You can add logic here to update user's subscription/premium status
      }
    }

    // Redirect to appropriate page
    const redirectUrl = status === 'success' 
      ? `/payment?status=success&txnid=${txnid}`
      : `/payment?status=failed&txnid=${txnid}`;

    return new Response(null, {
      status: 302,
      headers: { Location: redirectUrl }
    });

  } catch (error) {
    console.error('Callback processing error:', error);
    return new Response(null, {
      status: 302,
      headers: { Location: '/payment?status=error' }
    });
  }
});
