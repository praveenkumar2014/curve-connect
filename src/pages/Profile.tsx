import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Calendar, Award, Github, Twitter, Linkedin } from "lucide-react";

const Profile = () => {
  const activityData = Array.from({ length: 52 * 7 }, () => Math.random());
  const recentProjects = [
    { title: "Summer Fashion Campaign", cover: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=300", progress: 75 },
    { title: "AI Model Matching v2.0", cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300", progress: 45 },
    { title: "Bridal Collection Shoot", cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300", progress: 100 },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Banner */}
          <div className="h-48 md:h-64 gradient-bg relative">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.3),transparent_70%)]" />
          </div>

          <div className="container px-6 lg:px-12 -mt-16 relative z-10 pb-24">
            <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
              <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-32 h-32 rounded-2xl border-4 border-background shadow-lg" />
              <div className="flex-1">
                <h1 className="text-3xl font-bold">Praveen Kumar</h1>
                <p className="text-muted-foreground mb-3">Founder & CEO at GSMODELING</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Mumbai, India</span>
                  <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> 8 years experience</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Joined Jan 2025</span>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">Fashion Tech</Badge>
                  <Badge variant="secondary">Product</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon"><Github className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Twitter className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Linkedin className="h-4 w-4" /></Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card className="p-4 glass text-center">
                <p className="text-2xl font-bold">25</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </Card>
              <Card className="p-4 glass text-center">
                <p className="text-2xl font-bold">178</p>
                <p className="text-xs text-muted-foreground">Tasks Completed</p>
              </Card>
              <Card className="p-4 glass text-center">
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-muted-foreground">Contributions</p>
              </Card>
            </div>

            {/* Activity Heatmap */}
            <Card className="p-6 glass mb-8">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Award className="h-4 w-4 text-primary" /> Activity</h3>
              <div className="flex gap-[3px] flex-wrap">
                {activityData.map((value, i) => (
                  <div
                    key={i}
                    className="w-[10px] h-[10px] rounded-[2px]"
                    style={{
                      backgroundColor: value > 0.7 ? 'hsl(263, 70%, 50%)' : value > 0.4 ? 'hsl(263, 70%, 50% / 0.5)' : value > 0.15 ? 'hsl(263, 70%, 50% / 0.2)' : 'hsl(var(--muted))',
                    }}
                  />
                ))}
              </div>
            </Card>

            {/* Recent Projects */}
            <h3 className="font-semibold mb-4">Recent Projects</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {recentProjects.map(p => (
                <Card key={p.title} className="overflow-hidden glass hover-lift">
                  <img src={p.cover} alt={p.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h4 className="font-medium text-sm">{p.title}</h4>
                    <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className="h-full gradient-bg rounded-full" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Profile;
