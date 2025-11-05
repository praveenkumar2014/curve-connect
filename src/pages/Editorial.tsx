import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const Editorial = () => {
  const stories = [
    {
      id: 1,
      title: "Spring Collection 2024",
      date: "March 15, 2024",
      photographer: "Rahul Mehta",
      description: "Exploring vibrant colors and modern silhouettes",
    },
    {
      id: 2,
      title: "Urban Beauty",
      date: "February 28, 2024",
      photographer: "Priya Sharma",
      description: "Street style meets high fashion",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-center mb-12">Editorial Stories</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-muted"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                  <p className="text-muted-foreground mb-4">{story.description}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {story.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {story.photographer}
                    </div>
                  </div>
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

export default Editorial;