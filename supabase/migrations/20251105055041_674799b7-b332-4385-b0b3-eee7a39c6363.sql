-- Fix the security definer view by recreating without security_barrier
-- Drop the existing view
DROP VIEW IF EXISTS public.public_model_profiles;

-- Recreate without security_barrier (which creates security definer issues)
CREATE VIEW public.public_model_profiles 
WITH (security_invoker = true)
AS
SELECT 
  p.id,
  p.full_name,
  p.avatar_url,
  p.location,
  p.bio,
  p.created_at,
  m.height,
  m.measurements,
  m.experience_years,
  m.category,
  m.verified,
  m.rating,
  m.portfolio_url
FROM profiles p
INNER JOIN models m ON p.id = m.user_id
WHERE m.verified = true;

-- Grant select on the view to authenticated and anonymous users
GRANT SELECT ON public.public_model_profiles TO authenticated, anon;