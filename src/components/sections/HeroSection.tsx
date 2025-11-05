// Guidesoft: Reusable Hero Section Component
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlay?: boolean;
}

export const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Get Started",
  ctaLink = "/auth",
  secondaryCtaText,
  secondaryCtaLink,
  overlay = true,
}: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      )}
      
      <div className="container px-6 lg:px-12 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link to={ctaLink}>
            <Button variant="hero" size="lg" className="group hover-glow">
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          {secondaryCtaText && secondaryCtaLink && (
            <Link to={secondaryCtaLink}>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};