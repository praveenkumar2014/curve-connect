import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ModelCard } from "@/components/ModelCard";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const ModelsEditorial = () => {
  const [models, setModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("public_model_profiles")
        .select("*")
        .eq("category", "editorial")
        .order("rating", { ascending: false });
      setModels(data || []);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Editorial Models" description="Artistic and magazine-ready editorial models" />
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl font-bold font-display mb-4">Editorial Models</h1>
            <p className="text-muted-foreground text-lg">Artistic and magazine-ready talent</p>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => <Skeleton key={i} className="aspect-[3/4] rounded-xl" />)}
            </div>
          ) : models.length > 0 ? (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {models.map((m) => (
                <ModelCard key={m.id} id={m.id} name={m.full_name} category="Editorial" location={m.location} height={m.height} rating={m.rating} imageUrl={m.avatar_url} verified={m.verified} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No editorial models available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModelsEditorial;
