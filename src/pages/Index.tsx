import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Shield, BarChart3, Users, Camera, Brain } from "lucide-react";
import { trustedBrands, mockTestimonials, mockFAQs, mockPricingPlans } from "@/lib/mock-data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const TypewriterText = () => {
  const words = ["Talent Discovery", "AI Matching", "Fashion Careers", "Brand Growth"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={currentWordIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="gradient-text"
    >
      {words[currentWordIndex]}
    </motion.span>
  );
};

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const features = [
  { icon: Brain, title: "AI-Powered Matching", description: "Our machine learning algorithm analyzes 50+ parameters for 95%+ match accuracy between models and campaigns." },
  { icon: Camera, title: "Portfolio Management", description: "Upload unlimited photos and videos. Our AI auto-enhances and categorizes your portfolio for maximum impact." },
  { icon: Users, title: "Agency Dashboard", description: "Manage your entire roster, track bookings, handle commissions, and discover new talent from one dashboard." },
  { icon: BarChart3, title: "Advanced Analytics", description: "Real-time insights on profile views, booking rates, revenue trends, and campaign performance metrics." },
  { icon: Shield, title: "Verified Profiles", description: "Every profile goes through our verification process. Work with confidence knowing every user is authenticated." },
  { icon: Zap, title: "Instant Bookings", description: "Skip the back-and-forth. Our platform enables instant booking confirmations with integrated contracts." },
];

const steps = [
  { step: "01", title: "Create Your Profile", description: "Sign up, upload your portfolio, and let our AI optimize your profile for maximum visibility." },
  { step: "02", title: "Get AI Matched", description: "Our algorithm analyzes your profile against thousands of campaigns to find your perfect matches." },
  { step: "03", title: "Book & Grow", description: "Accept bookings, manage your schedule, track earnings, and build your career on autopilot." },
];

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
            <div className="absolute inset-0 gradient-bg opacity-10 animate-gradient" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)]" />
            
            <div className="container relative z-10 px-6 lg:px-12 py-32 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-5xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">AI-Powered Platform — Trusted by 12,000+ Professionals</span>
                </motion.div>

                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                  The Future of
                  <br />
                  <TypewriterText />
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
                  Connect with India's most sought-after models, agencies, and brands through intelligent AI matching technology
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/models">
                    <Button size="xl" className="gradient-bg text-white hover:opacity-90 hover-glow group">
                      Discover Talent
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button variant="outline" size="xl" className="glass">
                      Join as Agency
                    </Button>
                  </Link>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {[
                    { value: 12847, suffix: "+", label: "Verified Models" },
                    { value: 2100, suffix: "+", label: "Top Agencies" },
                    { value: 95, suffix: "%", label: "Match Rate" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                      className="text-center"
                    >
                      <div className="font-display text-3xl sm:text-4xl font-bold mb-1">
                        <CountUp target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
          </section>

          {/* Trusted Brands Scroll */}
          <AnimatedSection className="py-12 border-y border-border/50 overflow-hidden">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">
              Trusted by Leading Brands
            </p>
            <div className="flex animate-[scroll_20s_linear_infinite] gap-12 whitespace-nowrap">
              {[...trustedBrands, ...trustedBrands].map((brand, i) => (
                <span key={i} className="text-xl font-display font-semibold text-muted-foreground/40 hover:text-foreground transition-colors">
                  {brand}
                </span>
              ))}
            </div>
            <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
          </AnimatedSection>

          {/* Features Section */}
          <AnimatedSection className="py-24">
            <div className="container px-6 lg:px-12">
              <div className="text-center mb-16">
                <Badge className="mb-4 gradient-bg text-white border-0">Features</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need to Succeed</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From AI-powered matching to advanced analytics, we provide all the tools for your modeling career
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="p-6 glass hover-lift group cursor-pointer h-full">
                      <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* How It Works */}
          <AnimatedSection className="py-24 bg-secondary/30">
            <div className="container px-6 lg:px-12">
              <div className="text-center mb-16">
                <Badge className="mb-4 gradient-bg text-white border-0">How It Works</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Launch Your Career in 3 Steps</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="text-center"
                  >
                    <div className="text-6xl font-display font-bold gradient-text mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Section */}
          <AnimatedSection className="py-24">
            <div className="container px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { value: 12847, suffix: "+", label: "Active Models" },
                  { value: 2100, suffix: "+", label: "Partner Agencies" },
                  { value: 5400, suffix: "+", label: "Campaigns Completed" },
                  { value: 99, suffix: ".97%", label: "Platform Uptime" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-6 glass rounded-2xl hover-lift"
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonials */}
          <AnimatedSection className="py-24 bg-secondary/30">
            <div className="container px-6 lg:px-12">
              <div className="text-center mb-16">
                <Badge className="mb-4 gradient-bg text-white border-0">Testimonials</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockTestimonials.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="p-6 glass hover-lift h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="font-semibold text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground flex-1">{t.text}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Pricing Section */}
          <AnimatedSection className="py-24">
            <div className="container px-6 lg:px-12">
              <div className="text-center mb-16">
                <Badge className="mb-4 gradient-bg text-white border-0">Pricing</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-xl text-muted-foreground">Start free, scale as you grow</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {mockPricingPlans.map((plan, i) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <Card className={`p-8 h-full flex flex-col ${plan.popular ? 'gradient-border ring-2 ring-primary/20' : 'glass'} hover-lift relative`}>
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white border-0">
                          Most Popular
                        </Badge>
                      )}
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">₹{plan.monthlyPrice.toLocaleString()}</span>
                        <span className="text-muted-foreground">/mo</span>
                      </div>
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm">
                            <span className="text-primary">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link to="/auth">
                        <Button className={`w-full ${plan.popular ? 'gradient-bg text-white' : ''}`} variant={plan.popular ? 'default' : 'outline'} size="lg">
                          Get Started
                        </Button>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection className="py-24 bg-secondary/30">
            <div className="container px-6 lg:px-12 max-w-3xl">
              <div className="text-center mb-16">
                <Badge className="mb-4 gradient-bg text-white border-0">FAQ</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-2">
                {mockFAQs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-lg px-6 border-0">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>

          {/* Newsletter CTA */}
          <AnimatedSection className="py-24">
            <div className="container px-6 lg:px-12">
              <Card className="max-w-3xl mx-auto p-12 text-center glass">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Get exclusive industry insights, casting opportunities, and platform updates delivered to your inbox
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="gradient-bg text-white hover:opacity-90">Subscribe</Button>
                </form>
              </Card>
            </div>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
