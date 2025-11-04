import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import model1 from "@/assets/model-1.jpg";
import model2 from "@/assets/model-2.jpg";
import model3 from "@/assets/model-3.jpg";

const featuredModels = [
  {
    id: 1,
    name: "Aria Chen",
    location: "Mumbai, India",
    category: "Editorial",
    rating: 4.9,
    image: model1,
    verified: true,
  },
  {
    id: 2,
    name: "Marcus Rivera",
    location: "Delhi, India",
    category: "Commercial",
    rating: 4.8,
    image: model2,
    verified: true,
  },
  {
    id: 3,
    name: "Zara Okafor",
    location: "Bangalore, India",
    category: "Runway",
    rating: 5.0,
    image: model3,
    verified: true,
  },
];

export const FeaturedTalent = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-6 lg:px-12">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Featured Talent</h2>
            <p className="text-muted-foreground text-lg">Handpicked professionals ready for your next campaign</p>
          </div>
          <Button variant="ghost" className="hidden md:inline-flex group">
            View All
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredModels.map((model, index) => (
            <Card
              key={model.id}
              className="group overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {model.verified && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm">
                    <span className="text-xs font-medium text-primary">Verified</span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-white">{model.rating}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/80">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{model.location}</span>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white">
                      {model.category}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="group">
            View All Models
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
