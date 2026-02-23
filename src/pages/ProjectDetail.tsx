import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { mockProjects, mockTasks, mockTeamMembers } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Calendar, Users } from "lucide-react";

const priorityColors: Record<string, string> = {
  urgent: "bg-red-500/20 text-red-600",
  high: "bg-orange-500/20 text-orange-600",
  medium: "bg-yellow-500/20 text-yellow-600",
  low: "bg-green-500/20 text-green-600",
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === id);
  const projectTasks = mockTasks.filter(t => t.project === id);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen"><Header />
          <div className="pt-28 pb-24 text-center container">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects"><Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects</Button></Link>
          </div>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  const columns = [
    { id: "backlog", title: "Backlog", tasks: projectTasks.filter(t => t.status === "backlog") },
    { id: "in_progress", title: "In Progress", tasks: projectTasks.filter(t => t.status === "in_progress") },
    { id: "review", title: "Review", tasks: projectTasks.filter(t => t.status === "review") },
    { id: "done", title: "Done", tasks: projectTasks.filter(t => t.status === "done") },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container px-6 lg:px-12">
            <Link to="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {project.team.map(id => {
                    const m = mockTeamMembers.find(t => t.id === id);
                    return m ? <img key={id} src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full border-2 border-card" /> : null;
                  })}
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> Due {project.deadline}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Progress</span><span className="font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>

            <Tabs defaultValue="kanban">
              <TabsList className="glass"><TabsTrigger value="kanban">Kanban Board</TabsTrigger><TabsTrigger value="overview">Overview</TabsTrigger></TabsList>
              
              <TabsContent value="kanban" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {columns.map(col => (
                    <div key={col.id} className="space-y-3">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-sm">{col.title}</h3>
                        <Badge variant="secondary" className="text-xs">{col.tasks.length}</Badge>
                      </div>
                      {col.tasks.map(task => {
                        const assignee = mockTeamMembers.find(m => m.id === task.assignee);
                        return (
                          <Card key={task.id} className="p-4 glass hover-lift cursor-pointer">
                            <h4 className="text-sm font-medium mb-2">{task.title}</h4>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {task.labels.map(l => <Badge key={l} variant="secondary" className="text-xs">{l}</Badge>)}
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className={`text-xs ${priorityColors[task.priority]}`}>{task.priority}</Badge>
                              {assignee && <img src={assignee.avatar} alt={assignee.name} className="w-6 h-6 rounded-full" />}
                            </div>
                          </Card>
                        );
                      })}
                      {col.tasks.length === 0 && <div className="text-center py-8 text-sm text-muted-foreground border border-dashed border-border rounded-lg">No tasks</div>}
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="overview" className="mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 glass">
                    <h3 className="font-semibold mb-2">Status</h3>
                    <Badge className="capitalize">{project.status}</Badge>
                  </Card>
                  <Card className="p-6 glass">
                    <h3 className="font-semibold mb-2">Team Members</h3>
                    <p className="text-2xl font-bold">{project.team.length}</p>
                  </Card>
                  <Card className="p-6 glass">
                    <h3 className="font-semibold mb-2">Total Tasks</h3>
                    <p className="text-2xl font-bold">{projectTasks.length}</p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
