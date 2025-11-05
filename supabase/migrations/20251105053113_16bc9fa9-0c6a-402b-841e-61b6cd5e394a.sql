-- Add RLS policy to prevent users from updating payment status
-- This ensures only server-side functions can update payment status

-- Drop existing policies that might allow updates
DROP POLICY IF EXISTS "Users can update own payments" ON public.payments;

-- Create policy to prevent any direct status updates from client
CREATE POLICY "Prevent client-side payment status updates"
ON public.payments
FOR UPDATE
USING (false);

-- Allow service role to update payments (for webhook handlers)
-- This is implicit through service role key usage

-- Add index for faster transaction lookups
CREATE INDEX IF NOT EXISTS idx_payments_transaction_id 
ON public.payments(transaction_id);

-- Add index for user payment history
CREATE INDEX IF NOT EXISTS idx_payments_user_status 
ON public.payments(user_id, payment_status);