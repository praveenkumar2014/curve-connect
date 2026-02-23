import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Bell, Link2, CreditCard, Shield, Key, Upload, Copy, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const mockApiKey = "gs_live_k8x2m9p4q7w1n6j3f5h0";

  const copyApiKey = () => {
    navigator.clipboard.writeText(mockApiKey);
    toast.success("API key copied to clipboard");
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container px-6 lg:px-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            <Tabs defaultValue="profile" className="space-y-8">
              <TabsList className="glass w-full justify-start flex-wrap h-auto p-1 gap-1">
                <TabsTrigger value="profile" className="gap-2"><User className="h-4 w-4" /> Profile</TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2"><Bell className="h-4 w-4" /> Notifications</TabsTrigger>
                <TabsTrigger value="integrations" className="gap-2"><Link2 className="h-4 w-4" /> Integrations</TabsTrigger>
                <TabsTrigger value="billing" className="gap-2"><CreditCard className="h-4 w-4" /> Billing</TabsTrigger>
                <TabsTrigger value="security" className="gap-2"><Shield className="h-4 w-4" /> Security</TabsTrigger>
                <TabsTrigger value="api" className="gap-2"><Key className="h-4 w-4" /> API Keys</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card className="p-6 glass">
                  <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center border-2 border-dashed border-border">
                        <Upload className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <Button variant="outline" size="sm">Upload Photo</Button>
                        <p className="text-xs text-muted-foreground mt-1">JPG, PNG up to 5MB</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2"><Label>Full Name</Label><Input defaultValue="Praveen Kumar" /></div>
                      <div className="space-y-2"><Label>Email</Label><Input defaultValue="pranu21m@gmail.com" type="email" /></div>
                      <div className="space-y-2"><Label>Phone</Label><Input defaultValue="+91 98765 43210" /></div>
                      <div className="space-y-2"><Label>Location</Label><Input defaultValue="Mumbai, India" /></div>
                    </div>
                    <div className="space-y-2"><Label>Bio</Label><Textarea defaultValue="Founder & CEO of GSMODELING. Passionate about connecting talent with opportunity through AI." rows={3} /></div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Timezone</Label>
                        <Select defaultValue="ist"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="ist">IST (UTC+5:30)</SelectItem><SelectItem value="utc">UTC</SelectItem><SelectItem value="est">EST (UTC-5)</SelectItem></SelectContent></Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Language</Label>
                        <Select defaultValue="en"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="en">English</SelectItem><SelectItem value="hi">Hindi</SelectItem><SelectItem value="ta">Tamil</SelectItem></SelectContent></Select>
                      </div>
                    </div>
                    <Button className="gradient-bg text-white">Save Changes</Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card className="p-6 glass">
                  <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>
                  <div className="space-y-6">
                    {[
                      { label: "New booking requests", description: "When someone requests a booking", channels: ["email", "push"] },
                      { label: "Campaign updates", description: "Status changes on your campaigns", channels: ["email", "push", "slack"] },
                      { label: "New messages", description: "Direct messages from other users", channels: ["push"] },
                      { label: "Weekly reports", description: "Analytics and performance summaries", channels: ["email"] },
                      { label: "Platform updates", description: "New features and announcements", channels: ["email"] },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          {["Email", "Push", "Slack"].map(ch => (
                            <div key={ch} className="flex items-center gap-2">
                              <Switch defaultChecked={item.channels.includes(ch.toLowerCase())} />
                              <span className="text-xs text-muted-foreground">{ch}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="integrations">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "GitHub", description: "Connect your repositories", connected: true, icon: "🐙" },
                    { name: "Slack", description: "Get notifications in Slack", connected: false, icon: "💬" },
                    { name: "Google Drive", description: "Sync files and documents", connected: true, icon: "📁" },
                    { name: "Notion", description: "Sync project docs", connected: false, icon: "📝" },
                  ].map((int) => (
                    <Card key={int.name} className="p-6 glass hover-lift">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{int.icon}</span>
                          <div>
                            <h3 className="font-semibold">{int.name}</h3>
                            <p className="text-sm text-muted-foreground">{int.description}</p>
                          </div>
                        </div>
                        <Button variant={int.connected ? "outline" : "default"} size="sm" className={!int.connected ? "gradient-bg text-white" : ""}>
                          {int.connected ? "Disconnect" : "Connect"}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="billing">
                <Card className="p-6 glass mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <Badge className="gradient-bg text-white border-0 mb-2">Professional Plan</Badge>
                      <h2 className="text-xl font-bold">₹2,499/month</h2>
                      <p className="text-sm text-muted-foreground">Next billing: March 23, 2026</p>
                    </div>
                    <Button variant="outline">Upgrade Plan</Button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "API Calls", used: 8420, total: 10000 },
                      { label: "Storage", used: 3.2, total: 10, unit: "GB" },
                      { label: "Team Members", used: 6, total: 10 },
                    ].map((usage) => (
                      <div key={usage.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{usage.label}</span>
                          <span className="text-muted-foreground">{usage.used}{usage.unit || ''} / {usage.total}{usage.unit || ''}</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full gradient-bg rounded-full" style={{ width: `${(usage.used / usage.total) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card className="p-6 glass">
                  <h2 className="text-xl font-bold mb-6">Security Settings</h2>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Change Password</h3>
                      <div className="grid gap-4 max-w-md">
                        <div className="space-y-2"><Label>Current Password</Label><Input type="password" /></div>
                        <div className="space-y-2"><Label>New Password</Label><Input type="password" /></div>
                        <div className="space-y-2"><Label>Confirm New Password</Label><Input type="password" /></div>
                        <Button className="w-fit gradient-bg text-white">Update Password</Button>
                      </div>
                    </div>
                    <div className="border-t border-border pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Two-Factor Authentication</h3>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                    <div className="border-t border-border pt-6">
                      <h3 className="font-semibold mb-4">Active Sessions</h3>
                      <div className="space-y-3">
                        {[
                          { device: "Chrome on MacOS", location: "Mumbai, India", active: true, time: "Current session" },
                          { device: "Safari on iPhone", location: "Mumbai, India", active: false, time: "2 hours ago" },
                        ].map((session) => (
                          <div key={session.device} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div>
                              <p className="text-sm font-medium">{session.device}</p>
                              <p className="text-xs text-muted-foreground">{session.location} · {session.time}</p>
                            </div>
                            {session.active ? <Badge variant="secondary">Current</Badge> : <Button variant="ghost" size="sm">Revoke</Button>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="api">
                <Card className="p-6 glass">
                  <h2 className="text-xl font-bold mb-6">API Keys</h2>
                  <p className="text-muted-foreground mb-6">Use API keys to authenticate requests to the GSMODELING API.</p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 mr-4">
                        <Key className="h-5 w-5 text-primary shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">Production Key</p>
                          <p className="text-sm font-mono text-muted-foreground truncate">
                            {showApiKey ? mockApiKey : "gs_live_•••••••••••••••"}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => setShowApiKey(!showApiKey)}>
                          {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button variant="ghost" size="icon" onClick={copyApiKey}><Copy className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="sm" className="text-destructive">Revoke</Button>
                      </div>
                    </div>
                    <Button className="gradient-bg text-white"><Key className="mr-2 h-4 w-4" /> Generate New Key</Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Settings;
