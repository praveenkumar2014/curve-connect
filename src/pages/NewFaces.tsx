// Guidesoft: New Faces Page - Fresh talent discovery
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

export default function NewFaces() {
  const [models, setModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewModels = async () => {
      try {
        const { data, error } = await supabase
          .from("public_model_profiles")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(12);

        if (error) throw error;
        setModels(data || []);
      } catch (error) {
        console.error("Guidesoft: Error fetching new models:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewModels();
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="New Faces"
        description="Discover the freshest talent in the modeling industry. Meet emerging models ready to make their mark."
        keywords="new models, emerging talent, fresh faces, model discovery"
      />
      <Header />

      <HeroSection
        title="New Faces"
        subtitle="Discover Tomorrow's Stars Today"
        backgroundImage="https://images.unsplash.com/photo-1509631179647-0177331693ae"
        ctaText="View All Models"
        ctaLink="#models"
      />

      <ContentSection 
        title="Fresh Talent" 
        description="Recently joined models ready to bring fresh energy to your next project"
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
                category={model.category || "New Face"}
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

      <ContentSection title="Why Choose New Faces?" className="bg-muted">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Fresh Perspective</h3>
            <p className="text-muted-foreground">
              New models bring unique energy and contemporary aesthetics to every project
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Competitive Rates</h3>
            <p className="text-muted-foreground">
              Work with emerging talent at more accessible price points without compromising quality
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Future Stars</h3>
            <p className="text-muted-foreground">
              Be among the first to work with models who will shape the industry's future
            </p>
          </div>
        </div>
      </ContentSection>

      <CallToActionSection
        title="Start Your Next Campaign with Fresh Faces"
        description="Book emerging talent for your upcoming projects and campaigns"
        primaryCtaText="Contact Models"
        primaryCtaLink="/auth"
        secondaryCtaText="View All Categories"
        secondaryCtaLink="/models"
        variant="gradient"
      />

      <Footer />
    </div>
  );
}