import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Building2, Star, Award, TrendingUp, Heart } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Verified Models", color: "text-blue-500" },
  { icon: Building2, value: 500, suffix: "+", label: "Partner Agencies", color: "text-purple-500" },
  { icon: Star, value: 98, suffix: "%", label: "Satisfaction Rate", color: "text-accent" },
  { icon: Award, value: 5000, suffix: "+", label: "Successful Bookings", color: "text-green-500" },
  { icon: TrendingUp, value: 200, suffix: "%", label: "Growth Rate", color: "text-orange-500" },
  { icon: Heart, value: 50, suffix: "+", label: "NGO Partners", color: "text-rose-500" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid" />
      </div>
      
      <motion.div 
        className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Trusted by <span className="text-accent">Thousands</span>
            </h2>
            <p className="text-background/70 max-w-xl mx-auto">
              India's largest professional modeling network
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={stat.label} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-background/10 mb-4 ${stat.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-7 w-7" />
                </motion.div>
                <div className="text-background">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-background/60 mt-1">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
