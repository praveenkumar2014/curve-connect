-- Create campaigns table
CREATE TABLE public.campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  brand_name TEXT NOT NULL,
  campaign_type TEXT CHECK (campaign_type IN ('fashion', 'commercial', 'editorial', 'fitness', 'beauty')),
  budget_range TEXT,
  location TEXT,
  start_date DATE,
  end_date DATE,
  requirements JSONB,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'closed', 'draft')),
  created_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create casting_calls table
CREATE TABLE public.casting_calls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  casting_director TEXT NOT NULL,
  project_type TEXT,
  location TEXT,
  casting_date DATE,
  requirements JSONB,
  compensation TEXT,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'closed', 'filled')),
  agency_id UUID REFERENCES public.agencies(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  model_id UUID REFERENCES public.models(id) ON DELETE CASCADE,
  agency_id UUID REFERENCES public.agencies(id) ON DELETE SET NULL,
  campaign_id UUID REFERENCES public.campaigns(id) ON DELETE SET NULL,
  casting_call_id UUID REFERENCES public.casting_calls(id) ON DELETE SET NULL,
  booking_date DATE NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create portfolio_images table
CREATE TABLE public.portfolio_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  model_id UUID REFERENCES public.models(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  title TEXT,
  category TEXT,
  is_featured BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.casting_calls ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_images ENABLE ROW LEVEL SECURITY;

-- RLS Policies for campaigns
CREATE POLICY "Anyone can view active campaigns"
  ON public.campaigns FOR SELECT
  USING (status = 'active' OR auth.uid() = created_by);

CREATE POLICY "Brands and admins can create campaigns"
  ON public.campaigns FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'brand'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Campaign creators can update own campaigns"
  ON public.campaigns FOR UPDATE
  USING (auth.uid() = created_by OR has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for casting_calls
CREATE POLICY "Anyone can view open casting calls"
  ON public.casting_calls FOR SELECT
  USING (status = 'open' OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Agencies and admins can create casting calls"
  ON public.casting_calls FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'agency'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Agencies can update own casting calls"
  ON public.casting_calls FOR UPDATE
  USING (agency_id IN (SELECT id FROM public.agencies WHERE user_id = auth.uid()) OR has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for bookings
CREATE POLICY "Users can view own bookings"
  ON public.bookings FOR SELECT
  USING (
    model_id IN (SELECT id FROM public.models WHERE user_id = auth.uid()) OR
    agency_id IN (SELECT id FROM public.agencies WHERE user_id = auth.uid()) OR
    has_role(auth.uid(), 'admin'::app_role)
  );

CREATE POLICY "Models and agencies can create bookings"
  ON public.bookings FOR INSERT
  WITH CHECK (
    has_role(auth.uid(), 'model'::app_role) OR 
    has_role(auth.uid(), 'agency'::app_role) OR 
    has_role(auth.uid(), 'admin'::app_role)
  );

CREATE POLICY "Users can update own bookings"
  ON public.bookings FOR UPDATE
  USING (
    model_id IN (SELECT id FROM public.models WHERE user_id = auth.uid()) OR
    agency_id IN (SELECT id FROM public.agencies WHERE user_id = auth.uid()) OR
    has_role(auth.uid(), 'admin'::app_role)
  );

-- RLS Policies for portfolio_images
CREATE POLICY "Anyone can view portfolio images"
  ON public.portfolio_images FOR SELECT
  USING (true);

CREATE POLICY "Models can manage own portfolio images"
  ON public.portfolio_images FOR ALL
  USING (model_id IN (SELECT id FROM public.models WHERE user_id = auth.uid()));

-- Triggers for updated_at
CREATE TRIGGER update_campaigns_updated_at
  BEFORE UPDATE ON public.campaigns
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_casting_calls_updated_at
  BEFORE UPDATE ON public.casting_calls
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();