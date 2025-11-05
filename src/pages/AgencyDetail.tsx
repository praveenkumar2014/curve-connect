// Guidesoft: Agency Detail Page with 4 Sections
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { ModelCard } from "@/components/ModelCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, ExternalLink, Users, CheckCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AgencyDetail() {
  const { id } = useParams();
  const [agency, setAgency] = useState<any>(null);
  const [models, setModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgencyData = async () => {
      if (!id) return;

      try {
        // Fetch agency data
        const { data: agencyData, error: agencyError } = await supabase
          .from("agencies")
          .select("*")
          .eq("id", id)
          .single();

        if (agencyError) throw agencyError;
        setAgency(agencyData);

        // Fetch models from this agency
        const { data: modelsData, error: modelsError } = await supabase
          .from("public_model_profiles")
          .select("*")
          .eq("verified", true)
          .limit(6);

        if (!modelsError && modelsData) {
          setModels(modelsData);
        }
      } catch (error) {
        console.error("Guidesoft: Error fetching agency:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgencyData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 container px-6 lg:px-12">
          <Skeleton className="h-96 w-full mb-8" />
          <Skeleton className="h-20 w-full mb-4" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }

  if (!agency) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 container px-6 lg:px-12 text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Agency Not Found</h1>
          <Link to="/agencies">
            <Button>Back to Agencies</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title={agency.agency_name}
        description={`${agency.agency_name} - Professional modeling agency`}
        type="organization"
      />
      <Header />

      {/* Section 1: Hero */}
      <HeroSection
        title={agency.agency_name}
        subtitle="Professional Modeling Agency"
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
        ctaText="Contact Agency"
        ctaLink="#contact"
        secondaryCtaText="View Models"
        secondaryCtaLink="#models"
      />

      {/* Section 2: Agency Information */}
      <ContentSection title="About the Agency" centered>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {agency.verified && (
              <Badge className="bg-accent text-accent-foreground flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                Verified Agency
              </Badge>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {agency.website && (
              <Card className="p-6 text-center">
                <ExternalLink className="h-8 w-8 mx-auto mb-3 text-accent" />
                <h4 className="font-semibold mb-1">Website</h4>
                <a 
                  href={agency.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  Visit Website
                </a>
              </Card>
            )}

            <Card className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h4 className="font-semibold mb-1">Talent Roster</h4>
              <p className="text-muted-foreground">{models.length}+ Models</p>
            </Card>

            <Card className="p-6 text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h4 className="font-semibold mb-1">Status</h4>
              <p className="text-muted-foreground">
                {agency.verified ? "Verified Partner" : "Pending Verification"}
              </p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Section 3: Featured Models */}
      {models.length > 0 && (
        <ContentSection 
          title="Featured Talent" 
          description="Meet some of our represented models"
          centered 
          className="bg-muted"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <ModelCard
                key={model.id}
                id={model.id}
                name={model.full_name}
                category={model.category || "Model"}
                location={model.location}
                height={model.height}
                rating={model.rating}
                imageUrl={model.avatar_url}
                verified={model.verified}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/models">
              <Button size="lg">View All Models</Button>
            </Link>
          </div>
        </ContentSection>
      )}

      {/* Section 4: Call to Action */}
      <CallToActionSection
        title="Ready to Collaborate?"
        description="Partner with us for your next campaign or discover exceptional talent"
        primaryCtaText="Contact Us"
        primaryCtaLink="/auth"
        secondaryCtaText="Become a Partner"
        secondaryCtaLink="/agencies/management"
        variant="gradient"
      />

      <Footer />
    </div>
  );
}