import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/sections/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Camera, Star, Sparkles, Crown, Gem } from "lucide-react";
import { Link } from "react-router-dom";

const bridalServices = [
  {
    icon: Crown,
    title: "Bridal Makeup",
    description: "Professional bridal makeup artists for your special day",
    price: "From ₹25,000",
  },
  {
    icon: Camera,
    title: "Pre-Wedding Shoots",
    description: "Stunning pre-wedding photography with professional models",
    price: "From ₹50,000",
  },
  {
    icon: Sparkles,
    title: "Bridal Styling",
    description: "Complete bridal styling including hair, accessories & outfit coordination",
    price: "From ₹35,000",
  },
  {
    icon: Gem,
    title: "Destination Weddings",
    description: "Full service bridal team for destination wedding events",
    price: "Custom Quote",
  },
];

const bridalGallery = [
  { id: 1, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop", name: "Elegant Bride" },
  { id: 2, image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop", name: "Royal Wedding" },
  { id: 3, image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop", name: "Traditional Beauty" },
  { id: 4, image: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=800&fit=crop", name: "Modern Bride" },
  { id: 5, image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600&h=800&fit=crop", name: "Glamour Look" },
  { id: 6, image: "https://images.unsplash.com/photo-1595981267686-a5a8e93d17c2?w=600&h=800&fit=crop", name: "Dreamy Setup" },
];

const Bridal = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Bridal Services"
        description="Premium bridal services including makeup, styling, and pre-wedding shoots. Make your special day unforgettable with GSMODELING."
        keywords="bridal makeup, wedding photography, bridal styling, pre-wedding shoot, destination wedding"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-accent/10" />
          <div className="container px-6 lg:px-12 relative">
            <AnimatedSection direction="up">
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 mb-6"
                >
                  <Heart className="h-4 w-4" />
                  <span className="text-sm font-medium">Bridal Excellence</span>
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  Your Dream <span className="text-gradient">Wedding</span> Awaits
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Premium bridal services with India's top makeup artists, stylists, and photographers
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/auth">
                    <Button variant="hero" size="lg" className="hover-glow">
                      Book Consultation
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold font-display text-center mb-12">
                Our Bridal <span className="text-gradient">Services</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bridalServices.map((service, index) => (
                <AnimatedSection key={service.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <Card className="glass border-0 hover-lift h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4"
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <p className="text-accent font-semibold">{service.price}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 lg:px-12">
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold font-display text-center mb-12">
                Bridal <span className="text-gradient">Gallery</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {bridalGallery.map((item, index) => (
                <AnimatedSection key={item.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-medium">{item.name}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <ContactForm 
              type="bridal"
              title="Book Your Bridal Consultation"
              subtitle="Let us make your wedding day perfect"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bridal;
