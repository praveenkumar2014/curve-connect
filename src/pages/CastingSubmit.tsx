import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const CastingSubmit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-8">Submit for Casting</h1>
            
            <Card className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div>
                  <Label htmlFor="casting">Casting Call</Label>
                  <Input id="casting" placeholder="Campaign or casting name" />
                </div>

                <div>
                  <Label htmlFor="portfolio">Portfolio Link</Label>
                  <Input id="portfolio" placeholder="https://..." />
                </div>

                <div>
                  <Label htmlFor="message">Why are you interested?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us why you're perfect for this role..."
                    rows={5}
                  />
                </div>

                <div>
                  <Label htmlFor="photos">Upload Photos (Max 5)</Label>
                  <Input id="photos" type="file" multiple accept="image/*" />
                </div>

                <Button type="submit" variant="hero" className="w-full h-12">
                  Submit Application
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CastingSubmit;