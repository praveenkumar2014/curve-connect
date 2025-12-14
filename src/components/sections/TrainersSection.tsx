import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Star, MapPin, Users, BookOpen, Video, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

const trainers = [
  {
    id: "1",
    name: "Vikram Mehta",
    title: "Runway & Posing Coach",
    location: "Mumbai",
    rating: 4.9,
    students: 500,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80",
    expertise: ["Runway Walk", "Posing", "Body Language"],
    courses: 12,
    certified: true
  },
  {
    id: "2",
    name: "Anjali Gupta",
    title: "Portfolio Development Expert",
    location: "Delhi",
    rating: 4.8,
    students: 350,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&auto=format&q=80",
    expertise: ["Portfolio Building", "Personal Branding", "Social Media"],
    courses: 8,
    certified: true
  },
  {
    id: "3",
    name: "Rajesh Kumar",
    title: "Acting & Expression Coach",
    location: "Bangalore",
    rating: 4.7,
    students: 280,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format&q=80",
    expertise: ["Expressions", "Camera Confidence", "Acting"],
    courses: 6,
    certified: true
  }
];

export const TrainersSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="left">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-blue-400 text-blue-500">
              <GraduationCap className="h-3 w-3 mr-1" /> Professional Training
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Learn From <span className="text-gradient">Industry Experts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master the art of modeling with certified trainers and personalized coaching
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <AnimatedSection 
              key={trainer.id} 
              direction={index === 0 ? "left" : index === 2 ? "right" : "up"}
              delay={index * 0.15}
            >
              <motion.div
                whileHover={{ y: -10, rotateX: 5 }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-elegant transition-all duration-500 relative">
                  {/* Certified Badge */}
                  {trainer.certified && (
                    <motion.div 
                      className="absolute top-4 right-4 z-10 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Award className="h-3 w-3" /> Certified
                    </motion.div>
                  )}

                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                      <div className="flex justify-around text-center">
                        <motion.div 
                          className="text-foreground"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Users className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                          <span className="text-lg font-bold">{trainer.students}+</span>
                          <span className="text-xs text-muted-foreground block">Students</span>
                        </motion.div>
                        <motion.div 
                          className="text-foreground"
                          whileHover={{ scale: 1.1 }}
                        >
                          <BookOpen className="h-5 w-5 mx-auto mb-1 text-green-500" />
                          <span className="text-lg font-bold">{trainer.courses}</span>
                          <span className="text-xs text-muted-foreground block">Courses</span>
                        </motion.div>
                        <motion.div 
                          className="text-foreground"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Star className="h-5 w-5 mx-auto mb-1 text-accent fill-accent" />
                          <span className="text-lg font-bold">{trainer.rating}</span>
                          <span className="text-xs text-muted-foreground block">Rating</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-foreground mb-1">{trainer.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{trainer.title}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                      <MapPin className="h-3 w-3" /> {trainer.location}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {trainer.expertise.map((exp) => (
                        <Badge key={exp} variant="secondary" className="text-xs">
                          {exp}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/professionals/trainers/${trainer.id}`} className="flex-1">
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                          <Video className="mr-2 h-4 w-4" /> View Courses
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.5}>
          <div className="text-center mt-12">
            <Link to="/professionals/trainers">
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950">
                View All Trainers <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
