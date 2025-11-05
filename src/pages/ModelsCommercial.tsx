import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ModelsCommercial = () => {
  const models = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Commercial Model ${i + 1}`,
    location: "Delhi, India",
    height: "5'7\"",
    category: "Commercial"
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-center mb-4">Commercial Models</h1>
          <p className="text-center text-muted-foreground mb-12">
            Browse models for brand campaigns and advertising
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <Card key={model.id} className="overflow-hidden group cursor-pointer">
                <div className="aspect-[3/4] bg-muted"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{model.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{model.location}</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{model.height}</span>
                    <span>{model.category}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModelsCommercial;