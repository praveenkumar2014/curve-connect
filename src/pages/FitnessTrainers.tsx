import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/sections/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SocialMediaIcons } from "@/components/SocialMediaIcons";
import { motion } from "framer-motion";
import { Dumbbell, Star, Heart, Flame, Timer, Target } from "lucide-react";
import { Link } from "react-router-dom";

const fitnessTrainers = [
  {
    id: 1,
    name: "Arjun Verma",
    specialty: "Model Physique Training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop",
    rating: 4.9,
    clients: 200,
    certifications: ["ACE", "NASM"],
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "youtube", url: "https://youtube.com" },
    ],
  },
  {
    id: 2,
    name: "Neha Patel",
    specialty: "Female Model Fitness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
    rating: 4.8,
    clients: 180,
    certifications: ["ISSA", "CPT"],
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: 3,
    name: "Karan Malhotra",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop",
    rating: 5.0,
    clients: 250,
    certifications: ["CSCS", "PES"],
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: 4,
    name: "Divya Sharma",
    specialty: "Yoga & Flexibility",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop",
    rating: 4.9,
    clients: 300,
    certifications: ["RYT-500", "YACEP"],
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "youtube", url: "https://youtube.com" },
    ],
  },
];

const programs = [
  { icon: Target, title: "Model Physique", desc: "Sculpt the perfect model body" },
  { icon: Flame, title: "Fat Loss", desc: "Strategic fat loss for photoshoots" },
  { icon: Heart, title: "Endurance", desc: "Build stamina for long shoots" },
  { icon: Timer, title: "Quick Prep", desc: "Last-minute shoot preparation" },
];

const FitnessTrainers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fitness Trainers"
        description="Get in shape for modeling with specialized fitness trainers. Model physique training, fat loss, and shoot preparation programs."
        keywords="fitness trainer, model fitness, physique training, model workout, fashion fitness"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-accent/10" />
          <div className="container px-6 lg:px-12 relative">
            <AnimatedSection direction="up">
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 mb-6"
                >
                  <Dumbbell className="h-4 w-4" />
                  <span className="text-sm font-medium">Elite Fitness</span>
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  Train Like a <span className="text-gradient">Supermodel</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Specialized fitness programs designed for the modeling industry
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/auth">
                    <Button variant="hero" size="lg">Start Training</Button>
                  </Link>
                  <Button variant="outline" size="lg">View Programs</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <div className="grid md:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <AnimatedSection key={program.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="glass rounded-2xl p-6 text-center"
                  >
                    <program.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                    <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Trainers */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 lg:px-12">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold font-display text-center mb-12">
                Our <span className="text-gradient">Trainers</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fitnessTrainers.map((trainer, index) => (
                <AnimatedSection key={trainer.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <Card className="glass border-0 overflow-hidden group hover-lift">
                    <div className="relative aspect-[4/5]">
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent/90">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          {trainer.rating}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{trainer.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{trainer.specialty}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {trainer.certifications.map((cert) => (
                          <Badge key={cert} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-accent">{trainer.clients}+ clients</span>
                      </div>
                      <SocialMediaIcons links={trainer.social} size="sm" variant="ghost" />
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <ContactForm 
              type="fitness"
              title="Join as Fitness Trainer"
              subtitle="Help models achieve their best physique"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FitnessTrainers;
