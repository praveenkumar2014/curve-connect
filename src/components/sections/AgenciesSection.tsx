import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Users, Star, Instagram, Facebook, Linkedin, ArrowRight, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

const featuredAgencies = [
  {
    id: "1",
    name: "Elite Models India",
    location: "Mumbai",
    models: 150,
    rating: 4.9,
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop&auto=format&q=80",
    verified: true,
    premium: true,
    specialties: ["Fashion", "Commercial", "Runway"],
    socials: { instagram: true, facebook: true, linkedin: true }
  },
  {
    id: "2",
    name: "Star Management",
    location: "Delhi",
    models: 85,
    rating: 4.8,
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop&auto=format&q=80",
    verified: true,
    premium: false,
    specialties: ["Commercial", "Print"],
    socials: { instagram: true, facebook: false, linkedin: true }
  },
  {
    id: "3",
    name: "Glamour Agency",
    location: "Bangalore",
    models: 120,
    rating: 4.7,
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop&auto=format&q=80",
    verified: true,
    premium: true,
    specialties: ["Editorial", "Bridal", "Fashion"],
    socials: { instagram: true, facebook: true, linkedin: false }
  }
];

export const AgenciesSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="right">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-accent text-accent">
              Partner Agencies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Top Modeling <span className="text-gradient">Agencies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with India's most prestigious talent management agencies
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAgencies.map((agency, index) => (
            <AnimatedSection 
              key={agency.id} 
              direction={index % 2 === 0 ? "right" : "left"}
              delay={index * 0.15}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group p-6 border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 relative overflow-hidden">
                  {/* Premium Badge */}
                  {agency.premium && (
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-xs font-medium flex items-center gap-1 rounded-bl-lg">
                      <Crown className="h-3 w-3" /> Premium
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-border"
                      whileHover={{ scale: 1.05, rotate: 3 }}
                    >
                      <img
                        src={agency.logo}
                        alt={agency.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg text-foreground">{agency.name}</h3>
                        {agency.verified && (
                          <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3" />
                        {agency.location}
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" /> {agency.models} Models
                        </span>
                        <span className="flex items-center gap-1 text-accent">
                          <Star className="h-3 w-3 fill-accent" /> {agency.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {agency.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex gap-2">
                      {agency.socials.instagram && (
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Instagram className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      )}
                      {agency.socials.facebook && (
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Facebook className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      )}
                      {agency.socials.linkedin && (
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      )}
                    </div>
                    <Link to={`/agencies/${agency.id}`}>
                      <Button size="sm" variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
                        View Agency <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.5}>
          <div className="text-center mt-12">
            <Link to="/agencies">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Building2 className="mr-2 h-5 w-5" /> Explore All Agencies
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
