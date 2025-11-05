// Guidesoft: Reusable CTA Section Component
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CallToActionSectionProps {
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  variant?: "default" | "gradient" | "dark";
}

export const CallToActionSection = ({
  title,
  description,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  variant = "default",
}: CallToActionSectionProps) => {
  const variantClasses = {
    default: "bg-muted",
    gradient: "bg-gradient-to-br from-primary to-accent text-primary-foreground",
    dark: "bg-primary text-primary-foreground",
  };

  return (
    <section className={`py-20 ${variantClasses[variant]}`}>
      <div className="container px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={primaryCtaLink}>
              <Button 
                variant={variant === "default" ? "hero" : "outline"} 
                size="lg"
                className="group hover-glow"
              >
                {primaryCtaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link to={secondaryCtaLink}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className={variant !== "default" ? "border-current" : ""}
                >
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};