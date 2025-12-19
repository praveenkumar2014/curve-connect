import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/sections/AnimatedSection";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SocialMediaIcons, companySocialLinks } from "@/components/SocialMediaIcons";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Fashion Street, Mumbai, Maharashtra 400001" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@gsmodeling.com" },
  { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM-7PM IST" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us"
        description="Get in touch with GSMODELING. Contact us for model registration, agency partnerships, casting inquiries, and more."
        keywords="contact GSMODELING, modeling agency contact, model registration, casting inquiry"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background" />
          <div className="container px-6 lg:px-12 relative">
            <AnimatedSection direction="up">
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Get in Touch</span>
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  Let's <span className="text-gradient">Connect</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <AnimatedSection direction="left">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-4">Contact Information</h2>
                    <p className="text-muted-foreground">
                      Reach out to us through any of these channels
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border">
                    <h3 className="font-semibold mb-4">Follow Us</h3>
                    <SocialMediaIcons links={companySocialLinks} size="lg" />
                  </div>

                  {/* Map placeholder */}
                  <div className="aspect-video rounded-2xl overflow-hidden glass">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702646400000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GSMODELING Location"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection direction="right">
                <ContactForm 
                  type="general"
                  title="Send us a Message"
                  subtitle="Fill out the form below and we'll get back to you"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
