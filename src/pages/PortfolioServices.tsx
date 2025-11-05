import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Image, Sparkles, Check } from "lucide-react";

const PortfolioServices = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹15,000",
      icon: Image,
      features: [
        "2-hour photoshoot",
        "20 edited images",
        "1 location",
        "Digital delivery",
        "Portfolio consultation"
      ]
    },
    {
      name: "Professional",
      price: "₹35,000",
      icon: Camera,
      popular: true,
      features: [
        "4-hour photoshoot",
        "50 edited images",
        "2 locations",
        "Digital + Print delivery",
        "Professional styling",
        "Makeup artist included"
      ]
    },
    {
      name: "Premium",
      price: "₹60,000",
      icon: Sparkles,
      features: [
        "Full-day photoshoot",
        "100+ edited images",
        "3 locations",
        "Complete digital package",
        "Professional styling team",
        "Makeup + Hair artist",
        "Video content included"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Portfolio Services</h1>
            <p className="text-xl text-muted-foreground">
              Professional photography packages to build your modeling portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <Card 
                  key={pkg.name} 
                  className={`p-8 relative ${pkg.popular ? 'border-accent border-2' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <Icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-accent mb-2">{pkg.price}</div>
                    <p className="text-sm text-muted-foreground">One-time payment</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={pkg.popular ? "hero" : "outline"} 
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioServices;