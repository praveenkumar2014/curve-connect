import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockProjects, mockTeamMembers } from "@/lib/mock-data";
import { Search, Grid, List, Plus, Calendar, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Projects = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = mockProjects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === "all" || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statusColors: Record<string, string> = {
    active: "bg-green-500/20 text-green-700 dark:text-green-400",
    completed: "bg-primary/20 text-primary",
    planning: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400",
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="text-muted-foreground">{filtered.length} projects</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search projects..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 w-64" />
                </div>
                <div className="flex glass rounded-lg p-1">
                  <Button variant={view === "grid" ? "default" : "ghost"} size="icon" className="h-8 w-8" onClick={() => setView("grid")}><Grid className="h-4 w-4" /></Button>
                  <Button variant={view === "list" ? "default" : "ghost"} size="icon" className="h-8 w-8" onClick={() => setView("list")}><List className="h-4 w-4" /></Button>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="gradient-bg text-white"><Plus className="mr-2 h-4 w-4" /> New Project</Button>
                  </DialogTrigger>
                  <DialogContent className="glass">
                    <DialogHeader><DialogTitle>Create New Project</DialogTitle></DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-2"><Label>Project Name</Label><Input placeholder="Summer Campaign 2026" /></div>
                      <div className="space-y-2"><Label>Description</Label><Textarea placeholder="Describe your project..." rows={3} /></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2"><Label>Deadline</Label><Input type="date" /></div>
                        <div className="space-y-2"><Label>Tags</Label><Input placeholder="Fashion, Campaign" /></div>
                      </div>
                      <Button className="w-full gradient-bg text-white">Create Project</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-6">
              {["all", "active", "completed", "planning"].map(s => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${statusFilter === s ? 'gradient-bg text-white' : 'glass text-muted-foreground'}`}
                >
                  {s}
                </button>
              ))}
            </div>

            {view === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((project, i) => (
                  <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <Link to={`/projects/${project.id}`}>
                      <Card className="overflow-hidden glass hover-lift group h-full">
                        <div className="aspect-video overflow-hidden">
                          <img src={project.cover} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                            <Badge className={statusColors[project.status]}>{project.status}</Badge>
                          </div>
                          <div className="mb-4">
                            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                              <span>Progress</span><span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-1.5" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex -space-x-2">
                              {project.team.slice(0, 3).map(id => {
                                const m = mockTeamMembers.find(t => t.id === id);
                                return m ? <img key={id} src={m.avatar} alt={m.name} className="w-7 h-7 rounded-full border-2 border-card" /> : null;
                              })}
                            </div>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {project.deadline}
                            </span>
                          </div>
                          <div className="flex gap-1.5 mt-3">
                            {project.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>)}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((project, i) => (
                  <motion.div key={project.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link to={`/projects/${project.id}`}>
                      <Card className="p-4 glass hover-lift flex items-center gap-4">
                        <img src={project.cover} alt={project.title} className="w-16 h-12 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold truncate">{project.title}</h3>
                          <div className="flex gap-1.5 mt-1">{project.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>)}</div>
                        </div>
                        <Badge className={statusColors[project.status]}>{project.status}</Badge>
                        <div className="w-32 hidden md:block">
                          <Progress value={project.progress} className="h-1.5" />
                          <span className="text-xs text-muted-foreground">{project.progress}%</span>
                        </div>
                        <span className="text-xs text-muted-foreground hidden lg:block">{project.deadline}</span>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Projects;
