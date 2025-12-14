import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Star, MapPin, Instagram, Youtube, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

const makeupArtists = [
  {
    id: "1",
    name: "Priya Khanna",
    title: "Celebrity Makeup Artist",
    location: "Mumbai",
    rating: 4.9,
    experience: 12,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&auto=format&q=80",
    specialties: ["Film", "Editorial", "Bridal"],
    awards: ["IIFA Best Makeup", "Filmfare Award"],
    instagram: "125K",
    verified: true
  },
  {
    id: "2",
    name: "Rashmi Verma",
    title: "Fashion Makeup Specialist",
    location: "Delhi",
    rating: 4.8,
    experience: 8,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format&q=80",
    specialties: ["Fashion Week", "High Fashion", "Avant-garde"],
    awards: ["LFW Best Look 2023"],
    instagram: "89K",
    verified: true
  },
  {
    id: "3",
    name: "Anita Sharma",
    title: "SFX & Creative Artist",
    location: "Bangalore",
    rating: 4.7,
    experience: 6,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format&q=80",
    specialties: ["SFX", "Prosthetics", "Fantasy"],
    awards: ["Creative Excellence Award"],
    instagram: "67K",
    verified: false
  },
  {
    id: "4",
    name: "Deepika Malhotra",
    title: "Natural & Minimalist Expert",
    location: "Chennai",
    rating: 4.9,
    experience: 10,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format&q=80",
    specialties: ["Natural", "Skincare", "Organic"],
    awards: ["Sustainable Beauty Award"],
    instagram: "156K",
    verified: true
  }
];

export const MakeupArtistsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative Brush Strokes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="right">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-400 text-purple-500">
              <Palette className="h-3 w-3 mr-1" /> Makeup Artists
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Master <span className="text-gradient">Makeup Artists</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From celebrity looks to avant-garde creations, work with India's finest
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {makeupArtists.map((artist, index) => (
            <AnimatedSection 
              key={artist.id} 
              direction={index % 2 === 0 ? "right" : "left"}
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-500">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    
                    {/* Verified Badge */}
                    {artist.verified && (
                      <motion.div 
                        className="absolute top-3 right-3 bg-purple-500 text-white p-2 rounded-full"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="h-4 w-4" />
                      </motion.div>
                    )}

                    {/* Social Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-pink-500">
                          <Instagram className="h-4 w-4" /> {artist.instagram}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg text-foreground">{artist.name}</h3>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="h-4 w-4 fill-accent" />
                        <span className="text-sm font-medium">{artist.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{artist.title}</p>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3" /> {artist.location}
                      <span>•</span>
                      <span>{artist.experience} years exp.</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {artist.specialties.slice(0, 2).map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs py-0">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    <Link to={`/professionals/makeup/${artist.id}`}>
                      <Button size="sm" className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                        View Portfolio
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
            <Link to="/professionals/makeup">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950">
                Explore All Artists <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
