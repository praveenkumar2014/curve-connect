// Guidesoft: Advanced Search Page with Filters
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { ModelCard } from "@/components/ModelCard";
import { AdvancedFilters, FilterState } from "@/components/AdvancedFilters";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

export default function Search() {
  const [models, setModels] = useState<any[]>([]);
  const [filteredModels, setFilteredModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      const { data, error } = await supabase
        .from("public_model_profiles")
        .select("*");

      if (error) throw error;
      setModels(data || []);
      setFilteredModels(data || []);
    } catch (error) {
      console.error("Guidesoft: Error fetching models:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filters: FilterState) => {
    console.log("Guidesoft: Applying filters:", filters);
    
    let filtered = [...models];

    // Search query
    if (filters.searchQuery) {
      filtered = filtered.filter((model) =>
        model.full_name.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    // Category
    if (filters.category !== "all") {
      filtered = filtered.filter((model) => model.category === filters.category);
    }

    // Location
    if (filters.location) {
      filtered = filtered.filter((model) =>
        model.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Height range
    filtered = filtered.filter((model) => {
      if (!model.height) return true;
      return model.height >= filters.minHeight && model.height <= filters.maxHeight;
    });

    // Verified
    if (filters.verified !== "all") {
      const isVerified = filters.verified === "verified";
      filtered = filtered.filter((model) => model.verified === isVerified);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "name":
          return a.full_name.localeCompare(b.full_name);
        case "height":
          return (b.height || 0) - (a.height || 0);
        case "recent":
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        default:
          return 0;
      }
    });

    setFilteredModels(filtered);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Advanced Search"
        description="Search and filter through our extensive database of professional models with advanced search capabilities."
        keywords="model search, find models, talent search, model directory"
      />
      <Header />

      <HeroSection
        title="Advanced Model Search"
        subtitle="Discover the perfect talent for your next project with powerful search and filtering"
        backgroundImage="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
        ctaText="View All Models"
        ctaLink="/models"
      />

      <div className="container px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <AdvancedFilters onFilterChange={handleFilterChange} />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">
                {filteredModels.length} {filteredModels.length === 1 ? "Model" : "Models"} Found
              </h2>
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="aspect-[3/4]" />
                ))}
              </div>
            ) : filteredModels.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">No models found matching your criteria</p>
                <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredModels.map((model) => (
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
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}