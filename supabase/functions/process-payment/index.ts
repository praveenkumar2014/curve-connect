import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { createHmac } from "node:crypto";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const PAYU_MERCHANT_KEY = Deno.env.get('PAYU_MERCHANT_KEY');
const PAYU_MERCHANT_SALT = Deno.env.get('PAYU_MERCHANT_SALT');
const PAYU_BASE_URL = 'https://sandboxsecure.payu.in/_payment'; // Sandbox URL

interface PayURequest {
  amount: number;
  productInfo: string;
  firstName: string;
  email: string;
  phone: string;
  transactionId: string;
  successUrl: string;
  failureUrl: string;
}

function generatePayUHash(params: Record<string, string>, salt: string): string {
  const hashString = `${params.key}|${params.txnid}|${params.amount}|${params.productinfo}|${params.firstname}|${params.email}|||||||||||${salt}`;
  const hash = createHmac('sha512', salt).update(hashString).digest('hex');
  return hash;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid authentication' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body: PayURequest = await req.json();
    const { amount, productInfo, firstName, email, phone, transactionId, successUrl, failureUrl } = body;

    if (!PAYU_MERCHANT_KEY || !PAYU_MERCHANT_SALT) {
      console.error('PayU credentials not configured');
      return new Response(
        JSON.stringify({ error: 'Payment gateway not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Generate PayU parameters
    const payuParams: Record<string, string> = {
      key: PAYU_MERCHANT_KEY,
      txnid: transactionId,
      amount: amount.toString(),
      productinfo: productInfo,
      firstname: firstName,
      email: email,
      phone: phone,
      surl: successUrl,
      furl: failureUrl,
    };

    // Generate hash
    const hash = generatePayUHash(payuParams, PAYU_MERCHANT_SALT);
    payuParams.hash = hash;

    // Store payment record
    const { error: dbError } = await supabase
      .from('payu_payments')
      .insert({
        user_id: user.id,
        transaction_id: transactionId,
        amount: amount,
        product_info: productInfo,
        customer_name: firstName,
        customer_email: email,
        customer_phone: phone,
        status: 'initiated',
        payu_hash: hash,
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to create payment record' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Payment initiated: ${transactionId} for user ${user.id}`);

    return new Response(
      JSON.stringify({
        success: true,
        paymentUrl: PAYU_BASE_URL,
        params: payuParams,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Payment processing error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
