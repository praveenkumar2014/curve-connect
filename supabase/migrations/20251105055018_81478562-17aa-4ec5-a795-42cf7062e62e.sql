-- Drop the overly permissive policy that exposes all user contact information
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Create restrictive policy: users can only view their own full profile
CREATE POLICY "Users can view own profile" ON public.profiles
FOR SELECT 
USING (auth.uid() = id);

-- Create a public view for model discovery that excludes sensitive contact information
CREATE VIEW public.public_model_profiles AS
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

-- Enable security barrier on view to ensure RLS is applied
ALTER VIEW public.public_model_profiles SET (security_barrier = true);

-- Grant select on the view to authenticated and anonymous users
GRANT SELECT ON public.public_model_profiles TO authenticated, anon;