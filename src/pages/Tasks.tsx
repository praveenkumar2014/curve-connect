import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockTasks, mockTeamMembers } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const priorityColors: Record<string, string> = {
  urgent: "bg-red-500/20 text-red-600",
  high: "bg-orange-500/20 text-orange-600",
  medium: "bg-yellow-500/20 text-yellow-600",
  low: "bg-green-500/20 text-green-600",
};

const Tasks = () => {
  const columns = [
    { id: "backlog", title: "Backlog", tasks: mockTasks.filter(t => t.status === "backlog") },
    { id: "in_progress", title: "In Progress", tasks: mockTasks.filter(t => t.status === "in_progress") },
    { id: "review", title: "Review", tasks: mockTasks.filter(t => t.status === "review") },
    { id: "done", title: "Done", tasks: mockTasks.filter(t => t.status === "done") },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container px-6 lg:px-12">
            <h1 className="text-3xl font-bold mb-8">Tasks</h1>

            <Tabs defaultValue="kanban">
              <TabsList className="glass mb-6">
                <TabsTrigger value="kanban">Kanban</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>

              <TabsContent value="kanban">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {columns.map(col => (
                    <div key={col.id}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-sm">{col.title}</h3>
                        <Badge variant="secondary" className="text-xs">{col.tasks.length}</Badge>
                      </div>
                      <div className="space-y-3">
                        {col.tasks.map((task, i) => {
                          const assignee = mockTeamMembers.find(m => m.id === task.assignee);
                          return (
                            <motion.div key={task.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                              <Card className="p-4 glass hover-lift cursor-pointer">
                                <h4 className="text-sm font-medium mb-2">{task.title}</h4>
                                <div className="flex flex-wrap gap-1 mb-3">
                                  {task.labels.map(l => <Badge key={l} variant="secondary" className="text-xs">{l}</Badge>)}
                                </div>
                                <div className="flex items-center justify-between">
                                  <Badge className={`text-xs ${priorityColors[task.priority]}`}>{task.priority}</Badge>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                                    {assignee && <img src={assignee.avatar} alt={assignee.name} className="w-6 h-6 rounded-full" />}
                                  </div>
                                </div>
                              </Card>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="list">
                <div className="space-y-2">
                  {mockTasks.map((task, i) => {
                    const assignee = mockTeamMembers.find(m => m.id === task.assignee);
                    return (
                      <motion.div key={task.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}>
                        <Card className="p-4 glass hover-lift flex items-center gap-4">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{task.title}</h4>
                            <div className="flex gap-1.5 mt-1">{task.labels.map(l => <Badge key={l} variant="secondary" className="text-xs">{l}</Badge>)}</div>
                          </div>
                          <Badge className={`text-xs ${priorityColors[task.priority]}`}>{task.priority}</Badge>
                          <Badge variant="secondary" className="text-xs capitalize">{task.status.replace("_", " ")}</Badge>
                          <span className="text-xs text-muted-foreground hidden md:block">{task.dueDate}</span>
                          {assignee && <img src={assignee.avatar} alt={assignee.name} className="w-6 h-6 rounded-full" />}
                        </Card>
                      </motion.div>
                    );
                  })}
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

export default Tasks;
