import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, MapPin, Users, Star } from "lucide-react";

const Agencies = () => {
  const agencies = [
    {
      id: 1,
      name: "Elite Model Management",
      location: "Mumbai, India",
      models: 150,
      rating: 4.8,
      verified: true,
    },
    {
      id: 2,
      name: "IMG Models India",
      location: "Delhi, India",
      models: 200,
      rating: 4.9,
      verified: true,
    },
    {
      id: 3,
      name: "Prime Models",
      location: "Bangalore, India",
      models: 120,
      rating: 4.7,
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Partner Agencies</h1>
            <p className="text-muted-foreground text-lg">
              Discover top modeling agencies and talent management companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencies.map((agency) => (
              <Card key={agency.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <Building2 className="h-8 w-8 text-accent" />
                  {agency.verified && (
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                      Verified
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{agency.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {agency.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {agency.models} Models
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    {agency.rating} Rating
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agencies;