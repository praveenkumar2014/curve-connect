import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { mockPricingPlans, mockFAQs } from "@/lib/mock-data";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container px-6 lg:px-12">
            <div className="text-center mb-16">
              <Badge className="mb-4 gradient-bg text-white border-0">Pricing</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Choose Your Plan</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Start free and scale as your career grows. No hidden fees.
              </p>
              <div className="inline-flex items-center gap-3 glass rounded-full p-1">
                <button
                  onClick={() => setAnnual(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'gradient-bg text-white' : 'text-muted-foreground'}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setAnnual(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${annual ? 'gradient-bg text-white' : 'text-muted-foreground'}`}
                >
                  Annual <span className="text-xs ml-1 opacity-80">Save 17%</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
              {mockPricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Card className={`p-8 h-full flex flex-col relative ${plan.popular ? 'ring-2 ring-primary' : 'glass'} hover-lift`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white border-0">Most Popular</Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        ₹{annual ? Math.floor(plan.annualPrice / 12).toLocaleString() : plan.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                      {annual && <p className="text-xs text-primary mt-1">Billed ₹{plan.annualPrice.toLocaleString()}/year</p>}
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
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

            {/* FAQ */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {mockFAQs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-lg px-6 border-0">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Pricing;
