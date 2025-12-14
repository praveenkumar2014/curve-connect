import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    id: "1",
    name: "Aditi Sharma",
    role: "Fashion Model",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format&q=80",
    content: "GSModeling transformed my career. Within 3 months of joining, I got signed by a top agency and worked with major brands!",
    rating: 5,
    highlight: "Signed by Elite Agency"
  },
  {
    id: "2",
    name: "Ravi Mehta",
    role: "Brand Manager, Luxe Fashion",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format&q=80",
    content: "The quality of talent on this platform is exceptional. We found our brand ambassador within a week of posting!",
    rating: 5,
    highlight: "Found Perfect Match"
  },
  {
    id: "3",
    name: "Neha Kapoor",
    role: "Makeup Artist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format&q=80",
    content: "Being featured on GSModeling helped me connect with top models and agencies. My bookings increased by 200%!",
    rating: 5,
    highlight: "200% More Bookings"
  },
  {
    id: "4",
    name: "Vikram Singh",
    role: "Agency Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format&q=80",
    content: "The platform's verification system ensures we only work with professional, reliable talent. Highly recommended!",
    rating: 5,
    highlight: "Trusted Platform"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-radial-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-accent text-accent">
              <Star className="h-3 w-3 mr-1 fill-accent" /> Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              What Our <span className="text-gradient">Community</span> Says
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied models, agencies, and brands
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.id} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    {testimonial.highlight}
                  </Badge>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
