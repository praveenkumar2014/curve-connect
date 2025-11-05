// Guidesoft: Reusable Content Section Component
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export const ContentSection = ({
  title,
  description,
  children,
  className = "",
  centered = false,
}: ContentSectionProps) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container px-6 lg:px-12">
        <div className={centered ? "text-center mb-12" : "mb-12"}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};