import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 animate-gradient"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-6 lg:px-12 py-32 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-8 animate-bounce-in">
            <Sparkles className="h-4 w-4 text-accent animate-pulse-glow" />
            <span className="text-sm font-medium text-accent">AI-Powered Discovery Platform</span>
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white text-balance leading-tight">
            The Future of
            <br />
            <span className="text-gradient">
              Talent Discovery
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto text-balance animate-slide-in-left">
            Connect with the world's most sought-after models, agencies, and brands through intelligent AI matching
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/models">
              <Button variant="gold" size="xl" className="group hover-glow">
                Discover Talent
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="xl" className="glass border-white/30 hover:bg-white/20 backdrop-blur-sm">
                Join as Agency
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center hover-lift">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-2 animate-pulse-glow">100K+</div>
              <div className="text-sm text-white/70">Verified Models</div>
            </div>
            <div className="text-center hover-lift">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-2 animate-pulse-glow">2K+</div>
              <div className="text-sm text-white/70">Top Agencies</div>
            </div>
            <div className="text-center hover-lift">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-2 animate-pulse-glow">98%</div>
              <div className="text-sm text-white/70">Match Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
