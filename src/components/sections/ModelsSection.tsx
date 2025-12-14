import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Verified, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

const featuredModels = [
  {
    id: "1",
    name: "Aria Sterling",
    location: "Mumbai",
    category: "Fashion",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&auto=format&q=80",
    verified: true,
    instagram: "@ariamodel"
  },
  {
    id: "2",
    name: "Maya Chen",
    location: "Delhi",
    category: "Commercial",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&auto=format&q=80",
    verified: true,
    instagram: "@mayachen"
  },
  {
    id: "3",
    name: "Sofia Patel",
    location: "Bangalore",
    category: "Editorial",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&auto=format&q=80",
    verified: true,
    instagram: "@sofiap"
  },
  {
    id: "4",
    name: "Priya Sharma",
    location: "Chennai",
    category: "Runway",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=500&fit=crop&auto=format&q=80",
    verified: false,
    instagram: "@priyasharma"
  }
];

export const ModelsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="left">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-accent text-accent">
              Featured Talent
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Discover Top <span className="text-gradient">Models</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked talent from across India, ready for your next campaign
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredModels.map((model, index) => (
            <AnimatedSection 
              key={model.id} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Verified Badge */}
                    {model.verified && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-accent text-accent-foreground gap-1">
                          <Verified className="h-3 w-3" /> Verified
                        </Badge>
                      </div>
                    )}

                    {/* Rating */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <span className="text-xs font-medium">{model.rating}</span>
                    </div>

                    {/* Hover Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 text-primary-foreground mb-2">
                        <Instagram className="h-4 w-4" />
                        <span className="text-sm">{model.instagram}</span>
                      </div>
                      <Link to={`/models/${model.id}`}>
                        <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          View Profile <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{model.name}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {model.location}
                      </div>
                      <Badge variant="secondary" className="text-xs">{model.category}</Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <Link to="/models">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                View All Models <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
