import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Users, Zap } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-8">About GSMODELING</h1>
            
            <div className="prose prose-lg mx-auto mb-16">
              <p className="text-xl text-muted-foreground text-center">
                The premier AI-powered platform connecting models, agencies, and brands 
                in the evolving landscape of digital talent discovery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  Democratizing access to modeling opportunities worldwide
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Connecting thousands of talents with opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  AI-powered matching and discovery technology
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2024, GSMODELING emerged from a vision to revolutionize the modeling 
                industry through technology. We recognized the challenges faced by aspiring models 
                and agencies in connecting with the right opportunities.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve as the bridge between talent and opportunity, 
                powered by cutting-edge AI technology and a commitment to inclusivity and 
                transparency in the industry.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;