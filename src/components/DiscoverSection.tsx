import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Zap, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "AI-Powered Search",
    description: "Find the perfect talent with intelligent filters and smart recommendations",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Streamlined workflow from discovery to contract in hours, not days",
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with verified models and agencies across 50+ countries",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track performance, engagement, and campaign success in real-time",
  },
];

export const DiscoverSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
      
      <div className="container relative px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover, Connect, Create
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Leverage cutting-edge AI technology to transform how you discover and book talent for your next campaign
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 border-0 bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-0 bg-gradient-to-br from-card to-secondary/30 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Ready to transform your talent discovery?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of agencies and brands already using GSMODELING to find their perfect matches.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/auth">
                    <Button variant="gold" size="lg" className="group hover-glow">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button variant="outline" size="lg">
                      Schedule Demo
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm">14-day free trial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm">24/7 premium support</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
