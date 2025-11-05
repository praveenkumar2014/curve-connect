// Guidesoft: Model Detail Page with 4 Sections
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Ruler, Star, Calendar, Mail, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ModelDetail() {
  const { id } = useParams();
  const [model, setModel] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [portfolioImages, setPortfolioImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchModelData = async () => {
      if (!id) return;

      try {
        // Fetch model data with profile
        const { data: modelData, error: modelError } = await supabase
          .from("public_model_profiles")
          .select("*")
          .eq("id", id)
          .single();

        if (modelError) throw modelError;
        setModel(modelData);

        // Fetch portfolio images
        const { data: images, error: imagesError } = await supabase
          .from("portfolio_images")
          .select("*")
          .eq("model_id", id)
          .order("order_index", { ascending: true });

        if (!imagesError && images) {
          setPortfolioImages(images);
        }
      } catch (error) {
        console.error("Guidesoft: Error fetching model:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchModelData();
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

  if (!model) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 container px-6 lg:px-12 text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Model Not Found</h1>
          <Link to="/models">
            <Button>Back to Models</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title={model.full_name}
        description={model.bio || `View ${model.full_name}'s modeling portfolio`}
        image={model.avatar_url}
        type="profile"
      />
      <Header />

      {/* Section 1: Hero */}
      <HeroSection
        title={model.full_name}
        subtitle={model.bio || "Professional Model"}
        backgroundImage={model.avatar_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
        ctaText="Contact Model"
        ctaLink="#contact"
        secondaryCtaText="View Portfolio"
        secondaryCtaLink="#portfolio"
      />

      {/* Section 2: Profile Details */}
      <ContentSection title="Profile Information" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 text-center">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h4 className="font-semibold mb-1">Location</h4>
            <p className="text-muted-foreground">{model.location || "Not specified"}</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Ruler className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h4 className="font-semibold mb-1">Height</h4>
            <p className="text-muted-foreground">{model.height ? `${model.height} cm` : "Not specified"}</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Star className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h4 className="font-semibold mb-1">Rating</h4>
            <p className="text-muted-foreground">{model.rating ? model.rating.toFixed(1) : "N/A"}</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h4 className="font-semibold mb-1">Experience</h4>
            <p className="text-muted-foreground">{model.experience_years ? `${model.experience_years} years` : "Not specified"}</p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {model.verified && (
              <Badge className="bg-accent text-accent-foreground">Verified Model</Badge>
            )}
            {model.category && (
              <Badge variant="outline">{model.category}</Badge>
            )}
            {model.measurements && (
              <Badge variant="secondary">Measurements: {model.measurements}</Badge>
            )}
          </div>

          {model.bio && (
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">About</h3>
              <p className="text-muted-foreground leading-relaxed">{model.bio}</p>
            </Card>
          )}
        </div>
      </ContentSection>

      {/* Section 3: Portfolio Gallery */}
      {portfolioImages.length > 0 && (
        <ContentSection title="Portfolio" description="Professional work and featured shoots" centered className="bg-muted">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image.image_url}
                    alt={image.title || "Portfolio image"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {image.title && (
                  <div className="p-4">
                    <h4 className="font-semibold">{image.title}</h4>
                    {image.category && (
                      <p className="text-sm text-muted-foreground">{image.category}</p>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </ContentSection>
      )}

      {/* Section 4: Call to Action */}
      <CallToActionSection
        title="Interested in Working Together?"
        description="Get in touch to discuss opportunities and collaborations"
        primaryCtaText="Contact Model"
        primaryCtaLink="/auth"
        secondaryCtaText="View All Models"
        secondaryCtaLink="/models"
        variant="gradient"
      />

      <Footer />
    </div>
  );
}