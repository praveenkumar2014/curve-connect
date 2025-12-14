import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, HandHeart, Target, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

const ngos = [
  {
    id: "1",
    name: "Fashion for Change",
    mission: "Empowering underprivileged youth through modeling opportunities",
    location: "Pan India",
    impact: "5,000+ lives changed",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&auto=format&q=80",
    causes: ["Youth Empowerment", "Skill Development", "Employment"],
    verified: true
  },
  {
    id: "2",
    name: "Models Against Trafficking",
    mission: "Using the fashion platform to fight human trafficking",
    location: "Mumbai, Delhi",
    impact: "₹2Cr+ raised",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop&auto=format&q=80",
    causes: ["Anti-Trafficking", "Awareness", "Rehabilitation"],
    verified: true
  },
  {
    id: "3",
    name: "Green Runway Initiative",
    mission: "Promoting sustainable fashion and eco-friendly practices",
    location: "Bangalore",
    impact: "100+ sustainable shows",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop&auto=format&q=80",
    causes: ["Sustainability", "Eco Fashion", "Zero Waste"],
    verified: true
  }
];

export const NGOSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 left-10 text-rose-500/10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Heart className="h-48 w-48 fill-current" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-rose-400 text-rose-500">
              <HandHeart className="h-3 w-3 mr-1" /> Social Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Fashion With <span className="text-gradient">Purpose</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with NGOs making a real difference through the modeling industry
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ngos.map((ngo, index) => (
            <AnimatedSection 
              key={ngo.id} 
              direction={index === 0 ? "left" : index === 2 ? "right" : "up"}
              delay={index * 0.2}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group h-full overflow-hidden border-border/50 bg-card hover:shadow-elegant transition-all duration-500 flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={ngo.image}
                      alt={ngo.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    
                    {/* Verified Badge */}
                    {ngo.verified && (
                      <motion.div 
                        className="absolute top-3 right-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Sparkles className="h-3 w-3" /> Verified NGO
                      </motion.div>
                    )}

                    {/* Impact Badge */}
                    <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <span className="text-sm font-semibold text-accent flex items-center gap-1">
                        <Target className="h-4 w-4" /> {ngo.impact}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="font-semibold text-xl text-foreground">{ngo.name}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 flex-1">{ngo.mission}</p>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Globe className="h-4 w-4" /> {ngo.location}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {ngo.causes.map((cause) => (
                        <Badge key={cause} variant="secondary" className="text-xs bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-300">
                          {cause}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/ngo/${ngo.id}`} className="flex-1">
                        <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                          <Heart className="mr-2 h-4 w-4" /> Support Cause
                        </Button>
                      </Link>
                      <Button variant="outline" size="icon" className="border-rose-400 text-rose-500 hover:bg-rose-50">
                        <Users className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.6}>
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-blue-500/10 border border-border/50">
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Want to Make a Difference?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Join our platform as an NGO partner and leverage the fashion industry's reach for social good
              </p>
              <Link to="/auth">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white">
                  <HandHeart className="mr-2 h-5 w-5" /> Register Your NGO
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
