import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ModelsSection } from "@/components/sections/ModelsSection";
import { AgenciesSection } from "@/components/sections/AgenciesSection";
import { BridalSection } from "@/components/sections/BridalSection";
import { MakeupArtistsSection } from "@/components/sections/MakeupArtistsSection";
import { TrainersSection } from "@/components/sections/TrainersSection";
import { FitnessSection } from "@/components/sections/FitnessSection";
import { NGOSection } from "@/components/sections/NGOSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ModelsSection />
        <AgenciesSection />
        <StatsSection />
        <BridalSection />
        <MakeupArtistsSection />
        <TrainersSection />
        <FitnessSection />
        <NGOSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
