import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Valid payment amounts (in INR)
const VALID_PAYMENT_AMOUNTS = [999];

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      console.error('Missing authorization header');
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Verify user from JWT
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      console.error('Invalid authentication:', authError);
      return new Response(
        JSON.stringify({ error: 'Invalid authentication' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse and validate request body
    const { amount, paymentMethod } = await req.json();

    // Validate amount
    if (!amount || typeof amount !== 'number') {
      return new Response(
        JSON.stringify({ error: 'Invalid amount format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!VALID_PAYMENT_AMOUNTS.includes(amount)) {
      console.warn(`Invalid payment amount attempted: ${amount} by user ${user.id}`);
      return new Response(
        JSON.stringify({ error: 'Invalid payment amount. Expected ₹999' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate payment method
    const validMethods = ['upi', 'card', 'netbanking', 'wallet'];
    if (!paymentMethod || !validMethods.includes(paymentMethod)) {
      return new Response(
        JSON.stringify({ error: 'Invalid payment method' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Generate server-side transaction ID with timestamp and random string
    const timestamp = Date.now();
    const randomStr = crypto.randomUUID().split('-')[0];
    const transactionId = `TXN-${timestamp}-${randomStr}`;

    // Create payment record with 'initiated' status
    const { data: payment, error: paymentError } = await supabase
      .from('payments')
      .insert({
        user_id: user.id,
        amount: amount,
        payment_method: paymentMethod,
        payment_status: 'initiated',
        transaction_id: transactionId,
        currency: 'INR',
        metadata: {
          initiated_at: new Date().toISOString(),
          ip_address: req.headers.get('x-forwarded-for') || 'unknown',
        }
      })
      .select()
      .single();

    if (paymentError) {
      console.error('Error creating payment record:', paymentError);
      return new Response(
        JSON.stringify({ error: 'Failed to initiate payment' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Payment initiated: ${transactionId} for user ${user.id}, amount: ₹${amount}`);

    // Return payment details
    return new Response(
      JSON.stringify({
        success: true,
        payment: {
          id: payment.id,
          transaction_id: transactionId,
          amount: amount,
          currency: 'INR',
          status: 'initiated',
        }
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in initiate-payment function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
