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
import { Palette, Star, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const makeupArtists = [
  {
    id: 1,
    name: "Priya Sharma",
    specialty: "Bridal & Editorial",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
    rating: 4.9,
    reviews: 234,
    price: "₹15,000+",
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "youtube", url: "https://youtube.com" },
    ],
  },
  {
    id: 2,
    name: "Anita Desai",
    specialty: "Fashion & Runway",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop",
    rating: 4.8,
    reviews: 189,
    price: "₹12,000+",
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: 3,
    name: "Meera Kapoor",
    specialty: "Celebrity & Film",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    rating: 5.0,
    reviews: 312,
    price: "₹25,000+",
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "facebook", url: "https://facebook.com" },
    ],
  },
  {
    id: 4,
    name: "Kavita Reddy",
    specialty: "SFX & Creative",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop",
    rating: 4.7,
    reviews: 156,
    price: "₹18,000+",
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
];

const MakeupArtists = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Makeup Artists"
        description="Connect with India's top makeup artists for bridal, editorial, fashion, and celebrity makeup. Book professional MUAs through GSMODELING."
        keywords="makeup artist, bridal makeup, fashion makeup, celebrity makeup artist, MUA India"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-accent/10" />
          <div className="container px-6 lg:px-12 relative">
            <AnimatedSection direction="up">
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 mb-6"
                >
                  <Palette className="h-4 w-4" />
                  <span className="text-sm font-medium">Top Makeup Artists</span>
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  Art Meets <span className="text-gradient">Beauty</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Connect with India's most talented makeup artists for any occasion
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/auth">
                    <Button variant="hero" size="lg">Join as MUA</Button>
                  </Link>
                  <Button variant="outline" size="lg">Browse Artists</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold font-display text-center mb-12">
                Featured <span className="text-gradient">Artists</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {makeupArtists.map((artist, index) => (
                <AnimatedSection key={artist.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <Card className="glass border-0 overflow-hidden group hover-lift">
                    <div className="relative aspect-[4/5]">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent/90 text-accent-foreground">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          {artist.rating}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{artist.specialty}</p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-accent font-semibold">{artist.price}</span>
                        <span className="text-xs text-muted-foreground">{artist.reviews} reviews</span>
                      </div>
                      <SocialMediaIcons links={artist.social} size="sm" variant="ghost" />
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Sparkles, title: "Bridal Makeup", desc: "Complete bridal packages for your special day" },
                { icon: Award, title: "Editorial", desc: "High-fashion looks for magazines and campaigns" },
                { icon: Palette, title: "Special Effects", desc: "Creative and SFX makeup for film & TV" },
              ].map((service, index) => (
                <AnimatedSection key={service.title} direction="up" delay={index * 0.1}>
                  <div className="glass rounded-2xl p-8 text-center hover-lift">
                    <service.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <ContactForm 
              type="makeup"
              title="Become a Featured MUA"
              subtitle="Join our network of professional makeup artists"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MakeupArtists;
