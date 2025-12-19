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
import { GraduationCap, Star, Users, Award, Camera, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const trainers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    specialty: "Runway & Posing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    rating: 4.9,
    students: 500,
    experience: "15+ years",
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "youtube", url: "https://youtube.com" },
    ],
  },
  {
    id: 2,
    name: "Sunita Menon",
    specialty: "Fashion Photography Poses",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    rating: 4.8,
    students: 380,
    experience: "12+ years",
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: 3,
    name: "Vikram Singh",
    specialty: "Male Modeling",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    rating: 4.7,
    students: 290,
    experience: "10+ years",
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: 4,
    name: "Aisha Khan",
    specialty: "Commercial Acting",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    rating: 5.0,
    students: 420,
    experience: "8+ years",
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "youtube", url: "https://youtube.com" },
    ],
  },
];

const courses = [
  { icon: Camera, title: "Portfolio Building", duration: "4 weeks", price: "₹15,000" },
  { icon: Users, title: "Runway Training", duration: "6 weeks", price: "₹25,000" },
  { icon: Mic, title: "Screen Acting", duration: "8 weeks", price: "₹35,000" },
  { icon: Award, title: "Complete Model Course", duration: "12 weeks", price: "₹50,000" },
];

const Trainers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Model Training"
        description="Learn from India's top modeling trainers. Courses in runway walking, posing, acting, and portfolio building at GSMODELING Academy."
        keywords="modeling course, runway training, model academy, fashion training, portfolio building"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-accent/10" />
          <div className="container px-6 lg:px-12 relative">
            <AnimatedSection direction="up">
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 mb-6"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-sm font-medium">GSMODELING Academy</span>
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  Master the Art of <span className="text-gradient">Modeling</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Learn from industry veterans and launch your modeling career
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/auth">
                    <Button variant="hero" size="lg">Enroll Now</Button>
                  </Link>
                  <Button variant="outline" size="lg">View Courses</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold font-display text-center mb-12">
                Expert <span className="text-gradient">Trainers</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainers.map((trainer, index) => (
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
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-muted-foreground">{trainer.experience}</span>
                        <span className="text-xs text-accent">{trainer.students}+ students</span>
                      </div>
                      <SocialMediaIcons links={trainer.social} size="sm" variant="ghost" />
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 lg:px-12">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold font-display text-center mb-12">
                Our <span className="text-gradient">Courses</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <AnimatedSection key={course.title} direction="up" delay={index * 0.1}>
                  <Card className="glass border-0 hover-lift h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4"
                      >
                        <course.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{course.duration}</p>
                      <p className="text-accent font-bold text-xl">{course.price}</p>
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
              type="trainer"
              title="Apply as Trainer"
              subtitle="Share your expertise with aspiring models"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Trainers;
