import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/sections/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Sparkles, HandHeart, BookOpen, Leaf, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const initiatives = [
  {
    icon: HandHeart,
    title: "Model Welfare",
    description: "Supporting mental health and fair treatment of models in the industry",
    impact: "500+ models helped",
  },
  {
    icon: BookOpen,
    title: "Education Fund",
    description: "Scholarships for aspiring models from underprivileged backgrounds",
    impact: "₹25L+ distributed",
  },
  {
    icon: Leaf,
    title: "Sustainable Fashion",
    description: "Promoting eco-friendly practices in fashion and modeling",
    impact: "50+ brands partnered",
  },
  {
    icon: Shield,
    title: "Safe Workspace",
    description: "Creating harassment-free environments in the modeling industry",
    impact: "100+ events certified",
  },
];

const partners = [
  { name: "Fashion Forward", image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop" },
  { name: "Green Style", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop" },
  { name: "Model Rights", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop" },
  { name: "Youth Empower", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=100&fit=crop" },
];

const stories = [
  {
    name: "Priya",
    age: 22,
    story: "From a small village to walking the ramp - GSMODELING scholarship changed my life",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=400&fit=crop",
  },
  {
    name: "Rahul",
    age: 25,
    story: "The mental health support helped me overcome industry pressures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
  },
  {
    name: "Meera",
    age: 20,
    story: "Safe workspace certification gave me confidence to pursue my dreams",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop",
  },
];

const NGO = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="NGO & Social Impact"
        description="GSMODELING's commitment to social responsibility. Supporting model welfare, education, sustainable fashion, and creating safe workspaces."
        keywords="fashion NGO, model welfare, sustainable fashion, fashion charity, modeling education"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-teal-500/10 to-accent/10" />
          <div className="container px-6 lg:px-12 relative">
            <AnimatedSection direction="up">
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 mb-6"
                >
                  <Heart className="h-4 w-4" />
                  <span className="text-sm font-medium">Social Impact</span>
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  Fashion with <span className="text-gradient">Purpose</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Making the modeling industry more inclusive, sustainable, and safe for everyone
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/auth">
                    <Button variant="hero" size="lg">Support Our Cause</Button>
                  </Link>
                  <Button variant="outline" size="lg">Learn More</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-border/50">
          <div className="container px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "1000+", label: "Lives Impacted" },
                { number: "₹50L+", label: "Funds Raised" },
                { number: "100+", label: "Partner NGOs" },
                { number: "50+", label: "Cities Reached" },
              ].map((stat, index) => (
                <AnimatedSection key={stat.label} direction="up" delay={index * 0.1}>
                  <div className="text-center">
                    <motion.p
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      className="text-3xl md:text-4xl font-bold text-gradient"
                    >
                      {stat.number}
                    </motion.p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold font-display text-center mb-12">
                Our <span className="text-gradient">Initiatives</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {initiatives.map((initiative, index) => (
                <AnimatedSection key={initiative.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <Card className="glass border-0 hover-lift h-full">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4"
                      >
                        <initiative.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{initiative.description}</p>
                      <p className="text-accent font-semibold text-sm">{initiative.impact}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 lg:px-12">
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold font-display text-center mb-12">
                Success <span className="text-gradient">Stories</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <AnimatedSection key={story.name} direction="up" delay={index * 0.1}>
                  <Card className="glass border-0 overflow-hidden hover-lift">
                    <div className="relative aspect-[3/4]">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white font-bold text-xl">{story.name}, {story.age}</h3>
                        <p className="text-white/80 text-sm mt-2">{story.story}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold font-display text-center mb-12">
                Our <span className="text-gradient">Partners</span>
              </h2>
            </AnimatedSection>
            
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner, index) => (
                <AnimatedSection key={partner.name} direction="up" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="glass rounded-xl p-4"
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <ContactForm 
              type="ngo"
              title="Partner with Us"
              subtitle="Join our mission to transform the modeling industry"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NGO;
