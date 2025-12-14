import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, MapPin, Camera, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

const bridalProfessionals = [
  {
    id: "1",
    name: "Meera's Bridal Studio",
    location: "Mumbai",
    specialty: "Bridal Makeup & Styling",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&auto=format&q=80",
    price: "₹25,000+",
    services: ["Bridal Makeup", "Pre-Wedding", "Mehendi"]
  },
  {
    id: "2",
    name: "Royal Wedding Studio",
    location: "Delhi",
    specialty: "Traditional & Contemporary",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop&auto=format&q=80",
    price: "₹35,000+",
    services: ["HD Makeup", "Draping", "Hair Styling"]
  },
  {
    id: "3",
    name: "Elegance Bridal",
    location: "Jaipur",
    specialty: "Royal Rajasthani Looks",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop&auto=format&q=80",
    price: "₹20,000+",
    services: ["Traditional", "Jewelry Styling", "Outfits"]
  }
];

export const BridalSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Hearts */}
      <motion.div 
        className="absolute top-20 left-10 text-accent/20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Heart className="h-24 w-24 fill-current" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 text-accent/20"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Sparkles className="h-32 w-32" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="left">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-pink-400 text-pink-500">
              <Heart className="h-3 w-3 mr-1 fill-pink-500" /> Bridal Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Make Your <span className="text-gradient">Dream Wedding</span> Perfect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with the best bridal makeup artists, stylists, and wedding professionals
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bridalProfessionals.map((pro, index) => (
            <AnimatedSection 
              key={pro.id} 
              direction={index === 1 ? "up" : index === 0 ? "left" : "right"}
              delay={index * 0.2}
            >
              <motion.div
                whileHover={{ y: -12, rotateY: 5 }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-glow transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={pro.image}
                      alt={pro.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    
                    {/* Price Tag */}
                    <motion.div 
                      className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {pro.price}
                    </motion.div>

                    {/* Rating */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-medium">{pro.rating}</span>
                      <span className="text-sm text-muted-foreground">({pro.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-foreground mb-2">{pro.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3" /> {pro.location}
                    </div>
                    <p className="text-muted-foreground mb-4">{pro.specialty}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pro.services.map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>

                    <Link to={`/professionals/bridal/${pro.id}`}>
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                        <Camera className="mr-2 h-4 w-4" /> Book Consultation
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.6}>
          <div className="text-center mt-12">
            <Link to="/professionals/bridal">
              <Button size="lg" variant="outline" className="border-pink-400 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950">
                View All Bridal Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
