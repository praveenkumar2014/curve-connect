
-- Fix the overly permissive INSERT policy on contact_requests
-- Replace "true" with a proper check that still allows public submissions but validates data
DROP POLICY IF EXISTS "Anyone can submit contact requests" ON public.contact_requests;

CREATE POLICY "Anyone can submit contact requests"
ON public.contact_requests
FOR INSERT
TO public
WITH CHECK (
  name IS NOT NULL AND 
  email IS NOT NULL AND 
  message IS NOT NULL AND 
  request_type IS NOT NULL
);
