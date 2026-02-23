import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockRevenueData, mockWeeklyActivity, mockCategoryDistribution } from "@/lib/mock-data";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LineChart, Line, Legend } from "recharts";
import { Download, Calendar } from "lucide-react";

const Analytics = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container px-6 lg:px-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Analytics</h1>
                <p className="text-muted-foreground">Performance overview and insights</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm"><Calendar className="mr-2 h-4 w-4" /> Last 12 Months</Button>
                <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Export</Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              {/* Revenue Area Chart */}
              <Card className="p-6 glass">
                <h3 className="font-semibold mb-4">Revenue Overview</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={mockRevenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(263, 70%, 50%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(263, 70%, 50%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                    <Area type="monotone" dataKey="revenue" stroke="hsl(263, 70%, 50%)" fill="url(#colorRevenue)" strokeWidth={2} />
                    <Area type="monotone" dataKey="lastYear" stroke="hsl(187, 94%, 43%)" fill="none" strokeWidth={2} strokeDasharray="5 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>

              {/* Weekly Activity Bar */}
              <Card className="p-6 glass">
                <h3 className="font-semibold mb-4">Weekly Activity</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockWeeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                    <Bar dataKey="bookings" fill="hsl(263, 70%, 50%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="inquiries" fill="hsl(187, 94%, 43%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="applications" fill="hsl(45, 93%, 47%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Category Distribution Pie */}
              <Card className="p-6 glass">
                <h3 className="font-semibold mb-4">Category Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={mockCategoryDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                      {mockCategoryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </Card>

              {/* Line Chart Comparison */}
              <Card className="p-6 glass">
                <h3 className="font-semibold mb-4">Revenue Comparison</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockRevenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="hsl(263, 70%, 50%)" strokeWidth={2} name="This Year" dot={false} />
                    <Line type="monotone" dataKey="lastYear" stroke="hsl(187, 94%, 43%)" strokeWidth={2} name="Last Year" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Analytics;
