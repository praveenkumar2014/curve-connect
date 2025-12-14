-- Expand user types enum
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'bridal';
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'makeup_artist';
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'trainer';
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'fitness_trainer';
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'ngo';

-- Create professionals table for bridal, makeup artists, trainers, fitness trainers
CREATE TABLE public.professionals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  professional_type TEXT NOT NULL CHECK (professional_type IN ('bridal', 'makeup_artist', 'trainer', 'fitness_trainer', 'ngo')),
  business_name TEXT NOT NULL,
  description TEXT,
  experience_years INTEGER DEFAULT 0,
  hourly_rate NUMERIC,
  location TEXT,
  website TEXT,
  verified BOOLEAN DEFAULT false,
  rating NUMERIC DEFAULT 0,
  social_instagram TEXT,
  social_facebook TEXT,
  social_twitter TEXT,
  social_linkedin TEXT,
  social_youtube TEXT,
  portfolio_images TEXT[],
  services TEXT[],
  certifications TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add social media columns to models table
ALTER TABLE public.models 
ADD COLUMN IF NOT EXISTS social_instagram TEXT,
ADD COLUMN IF NOT EXISTS social_facebook TEXT,
ADD COLUMN IF NOT EXISTS social_twitter TEXT,
ADD COLUMN IF NOT EXISTS social_linkedin TEXT,
ADD COLUMN IF NOT EXISTS social_youtube TEXT;

-- Add social media and premium features to agencies table
ALTER TABLE public.agencies 
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS location TEXT,
ADD COLUMN IF NOT EXISTS social_instagram TEXT,
ADD COLUMN IF NOT EXISTS social_facebook TEXT,
ADD COLUMN IF NOT EXISTS social_twitter TEXT,
ADD COLUMN IF NOT EXISTS social_linkedin TEXT,
ADD COLUMN IF NOT EXISTS social_youtube TEXT,
ADD COLUMN IF NOT EXISTS is_premium BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS premium_plan TEXT CHECK (premium_plan IN ('basic', 'professional', 'enterprise')),
ADD COLUMN IF NOT EXISTS premium_expires_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS models_viewed_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS logo_url TEXT;

-- Create contact requests table
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  request_type TEXT NOT NULL CHECK (request_type IN ('general', 'meet_model', 'book_service', 'partnership')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  model_id UUID REFERENCES public.models(id),
  professional_id UUID REFERENCES public.professionals(id),
  agency_id UUID REFERENCES public.agencies(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'responded', 'closed')),
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create PayU payments table
CREATE TABLE public.payu_payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  txnid TEXT NOT NULL UNIQUE,
  amount NUMERIC NOT NULL,
  product_info TEXT NOT NULL,
  firstname TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'success', 'failed', 'cancelled')),
  payu_response JSONB,
  hash TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create agency model views tracking (for premium plan limits)
CREATE TABLE public.agency_model_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  agency_id UUID NOT NULL REFERENCES public.agencies(id) ON DELETE CASCADE,
  model_id UUID NOT NULL REFERENCES public.models(id) ON DELETE CASCADE,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(agency_id, model_id)
);

-- Enable RLS on all new tables
ALTER TABLE public.professionals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payu_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agency_model_views ENABLE ROW LEVEL SECURITY;

-- Professionals policies
CREATE POLICY "Anyone can view verified professionals" ON public.professionals
FOR SELECT USING (verified = true OR auth.uid() = user_id);

CREATE POLICY "Professionals can insert own profile" ON public.professionals
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Professionals can update own profile" ON public.professionals
FOR UPDATE USING (auth.uid() = user_id);

-- Contact requests policies
CREATE POLICY "Anyone can submit contact requests" ON public.contact_requests
FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all contact requests" ON public.contact_requests
FOR SELECT USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update contact requests" ON public.contact_requests
FOR UPDATE USING (has_role(auth.uid(), 'admin'));

-- PayU payments policies
CREATE POLICY "Users can create own payments" ON public.payu_payments
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own payments" ON public.payu_payments
FOR SELECT USING (auth.uid() = user_id OR has_role(auth.uid(), 'admin'));

-- Agency model views policies
CREATE POLICY "Agencies can view own records" ON public.agency_model_views
FOR SELECT USING (
  agency_id IN (SELECT id FROM public.agencies WHERE user_id = auth.uid())
  OR has_role(auth.uid(), 'admin')
);

CREATE POLICY "Agencies can insert own views" ON public.agency_model_views
FOR INSERT WITH CHECK (
  agency_id IN (SELECT id FROM public.agencies WHERE user_id = auth.uid())
);

-- Trigger for updated_at on new tables
CREATE TRIGGER update_professionals_updated_at
BEFORE UPDATE ON public.professionals
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_requests_updated_at
BEFORE UPDATE ON public.contact_requests
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_payu_payments_updated_at
BEFORE UPDATE ON public.payu_payments
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();