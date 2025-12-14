import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Star, MapPin, Trophy, Flame, Heart, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

const fitnessTrainers = [
  {
    id: "1",
    name: "Arjun Singh",
    title: "Model Body Specialist",
    location: "Mumbai",
    rating: 4.9,
    clients: 200,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop&auto=format&q=80",
    specialties: ["Lean Muscle", "Posture", "Runway Prep"],
    achievements: ["Celebrity Trainer", "10+ Years"],
    hourlyRate: "₹2,500"
  },
  {
    id: "2",
    name: "Priyanka Das",
    title: "Fitness & Wellness Coach",
    location: "Delhi",
    rating: 4.8,
    clients: 180,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop&auto=format&q=80",
    specialties: ["Yoga", "Pilates", "Body Sculpting"],
    achievements: ["Certified Nutritionist", "8+ Years"],
    hourlyRate: "₹2,000"
  },
  {
    id: "3",
    name: "Rahul Kapoor",
    title: "Strength & Conditioning",
    location: "Bangalore",
    rating: 4.7,
    clients: 150,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop&auto=format&q=80",
    specialties: ["HIIT", "CrossFit", "Athletic Training"],
    achievements: ["Sports Trainer", "12+ Years"],
    hourlyRate: "₹1,800"
  },
  {
    id: "4",
    name: "Sneha Iyer",
    title: "Dance & Cardio Expert",
    location: "Chennai",
    rating: 4.9,
    clients: 220,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=500&fit=crop&auto=format&q=80",
    specialties: ["Zumba", "Dance Fitness", "Aerobics"],
    achievements: ["Choreographer", "6+ Years"],
    hourlyRate: "₹1,500"
  }
];

export const FitnessSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 right-20 text-green-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Dumbbell className="h-40 w-40" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="right">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-green-400 text-green-500">
              <Dumbbell className="h-3 w-3 mr-1" /> Fitness Training
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Shape Your <span className="text-gradient">Model Body</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform with India's top fitness trainers specialized in modeling industry requirements
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fitnessTrainers.map((trainer, index) => (
            <AnimatedSection 
              key={trainer.id} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-glow transition-all duration-500">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    
                    {/* Rating Badge */}
                    <motion.div 
                      className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Star className="h-3 w-3 fill-white" /> {trainer.rating}
                    </motion.div>

                    {/* Price Badge */}
                    <motion.div 
                      className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-sm font-semibold text-accent">{trainer.hourlyRate}/hr</span>
                    </motion.div>

                    {/* Achievements */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex flex-wrap gap-1">
                        {trainer.achievements.map((achievement) => (
                          <Badge 
                            key={achievement} 
                            className="bg-green-500/80 text-white text-xs border-0"
                          >
                            <Trophy className="h-2 w-2 mr-1" /> {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{trainer.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{trainer.title}</p>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3" /> {trainer.location}
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3 text-red-500" /> {trainer.clients}+ clients
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {trainer.specialties.map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs py-0">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    <Link to={`/professionals/fitness/${trainer.id}`}>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <Flame className="mr-2 h-4 w-4" /> Book Session
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
            <Link to="/professionals/fitness">
              <Button size="lg" variant="outline" className="border-green-400 text-green-500 hover:bg-green-50 dark:hover:bg-green-950">
                View All Fitness Trainers <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
