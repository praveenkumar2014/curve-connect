import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedTalent } from "@/components/FeaturedTalent";
import { DiscoverSection } from "@/components/DiscoverSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedTalent />
        <DiscoverSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
