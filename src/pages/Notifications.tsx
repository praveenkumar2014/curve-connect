import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockNotifications } from "@/lib/mock-data";
import { Bell, Check, CheckCheck, Filter, User, AlertCircle, Star, Mail, Calendar, TrendingUp } from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  bell: <Bell className="h-4 w-4" />,
  user: <User className="h-4 w-4" />,
  check: <Check className="h-4 w-4" />,
  alert: <AlertCircle className="h-4 w-4" />,
  star: <Star className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
  calendar: <Calendar className="h-4 w-4" />,
  trending: <TrendingUp className="h-4 w-4" />,
};

const Notifications = () => {
  const [filter, setFilter] = useState("all");
  const [notifications, setNotifications] = useState(mockNotifications);
  const filters = ["all", "unread", "mentions", "system"];

  const filtered = notifications.filter(n => {
    if (filter === "all") return true;
    if (filter === "unread") return !n.read;
    if (filter === "mentions") return n.type === "mention";
    if (filter === "system") return n.type === "system";
    return true;
  });

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const grouped = {
    today: filtered.filter(n => n.time.includes("min") || n.time.includes("hour")),
    yesterday: filtered.filter(n => n.time === "Yesterday"),
    earlier: filtered.filter(n => n.time.includes("day")),
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container px-6 lg:px-12 max-w-3xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Notifications</h1>
                <p className="text-muted-foreground">{notifications.filter(n => !n.read).length} unread</p>
              </div>
              <Button variant="outline" size="sm" onClick={markAllRead}>
                <CheckCheck className="mr-2 h-4 w-4" /> Mark all read
              </Button>
            </div>

            <div className="flex gap-2 mb-8">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${filter === f ? 'gradient-bg text-white' : 'glass text-muted-foreground hover:text-foreground'}`}
                >
                  {f}
                </button>
              ))}
            </div>

            {Object.entries(grouped).map(([group, items]) =>
              items.length > 0 && (
                <div key={group} className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 capitalize">{group}</h3>
                  <div className="space-y-2">
                    {items.map((n, i) => (
                      <motion.div key={n.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                        <Card className={`p-4 flex items-start gap-4 ${!n.read ? 'border-primary/30 bg-primary/5' : 'glass'} hover-lift cursor-pointer`}>
                          <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${!n.read ? 'gradient-bg text-white' : 'bg-muted text-muted-foreground'}`}>
                            {iconMap[n.icon] || <Bell className="h-4 w-4" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm ${!n.read ? 'font-medium' : 'text-muted-foreground'}`}>{n.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                          </div>
                          {!n.read && <div className="h-2 w-2 rounded-full gradient-bg shrink-0 mt-2" />}
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <Bell className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No notifications</h3>
                <p className="text-muted-foreground">You're all caught up!</p>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Notifications;
