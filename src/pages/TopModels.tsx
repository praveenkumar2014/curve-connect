// Guidesoft: Top Models Page - Premium talent
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { ModelCard } from "@/components/ModelCard";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

export default function TopModels() {
  const [models, setModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopModels = async () => {
      try {
        const { data, error } = await supabase
          .from("public_model_profiles")
          .select("*")
          .eq("verified", true)
          .order("rating", { ascending: false })
          .limit(12);

        if (error) throw error;
        setModels(data || []);
      } catch (error) {
        console.error("Guidesoft: Error fetching top models:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopModels();
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Top Models"
        description="Browse our elite collection of top-rated professional models. Industry leaders with proven track records."
        keywords="top models, elite models, premium talent, high-rated models"
      />
      <Header />

      <HeroSection
        title="Top Models"
        subtitle="Elite Talent for Premium Campaigns"
        backgroundImage="https://images.unsplash.com/photo-1469334031218-e382a71b716b"
        ctaText="Book Elite Talent"
        ctaLink="/auth"
      />

      <ContentSection 
        title="Industry Elite" 
        description="Our highest-rated models with exceptional portfolios and proven success"
        centered
      >
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="aspect-[3/4]" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {models.map((model) => (
              <ModelCard
                key={model.id}
                id={model.id}
                name={model.full_name}
                category={model.category || "Top Model"}
                location={model.location}
                height={model.height}
                rating={model.rating}
                imageUrl={model.avatar_url}
                verified={model.verified}
              />
            ))}
          </div>
        )}
      </ContentSection>

      <ContentSection title="Premium Features" className="bg-muted">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Verified Profiles</h3>
            <p className="text-muted-foreground">
              All top models are verified professionals with authenticated portfolios
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">High Ratings</h3>
            <p className="text-muted-foreground">
              Top-rated by clients and industry professionals for exceptional work
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Proven Experience</h3>
            <p className="text-muted-foreground">
              Extensive portfolios showcasing work with major brands and campaigns
            </p>
          </div>
        </div>
      </ContentSection>

      <CallToActionSection
        title="Work with the Best"
        description="Elevate your brand with our elite modeling talent"
        primaryCtaText="Start Your Campaign"
        primaryCtaLink="/campaigns"
        secondaryCtaText="View All Models"
        secondaryCtaLink="/models"
        variant="dark"
      />

      <Footer />
    </div>
  );
}