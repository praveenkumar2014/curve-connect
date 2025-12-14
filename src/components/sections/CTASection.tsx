import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Building2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-accent/30" />
      
      {/* Animated Decorations */}
      <motion.div 
        className="absolute top-10 left-10 text-accent/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="h-32 w-32" />
      </motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 text-accent/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Star className="h-24 w-24" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="up">
            <div className="text-center text-background">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-8"
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Join India's #1 Modeling Platform</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Ready to Start Your
                <br />
                <span className="text-gradient">Modeling Journey?</span>
              </h2>
              
              <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto">
                Whether you're a model, agency, brand, or professional - 
                GSModeling is your gateway to success in the fashion industry
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/auth">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 h-14">
                    <Users className="mr-2 h-5 w-5" /> Join as Model
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/auth">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground text-lg px-8 h-14">
                    <Building2 className="mr-2 h-5 w-5" /> Register Agency
                  </Button>
                </motion.div>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-background">
              <motion.div 
                className="p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10"
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="text-3xl font-bold text-accent mb-2">Free</div>
                <p className="text-background/70">Basic profile & listing</p>
              </motion.div>
              <motion.div 
                className="p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10"
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-background/70">Support & assistance</p>
              </motion.div>
              <motion.div 
                className="p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10"
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-background/70">Verified profiles</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
