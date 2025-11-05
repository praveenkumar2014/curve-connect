import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, TrendingUp, FileText } from "lucide-react";

const AgencyManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold mb-8">Agency Management Dashboard</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6">
              <Users className="h-8 w-8 text-accent mb-2" />
              <div className="text-3xl font-bold mb-1">150</div>
              <div className="text-sm text-muted-foreground">Active Models</div>
            </Card>
            <Card className="p-6">
              <Calendar className="h-8 w-8 text-accent mb-2" />
              <div className="text-3xl font-bold mb-1">24</div>
              <div className="text-sm text-muted-foreground">Upcoming Bookings</div>
            </Card>
            <Card className="p-6">
              <TrendingUp className="h-8 w-8 text-accent mb-2" />
              <div className="text-3xl font-bold mb-1">₹12.5L</div>
              <div className="text-sm text-muted-foreground">Monthly Revenue</div>
            </Card>
            <Card className="p-6">
              <FileText className="h-8 w-8 text-accent mb-2" />
              <div className="text-3xl font-bold mb-1">45</div>
              <div className="text-sm text-muted-foreground">Active Campaigns</div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Add New Model
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Create Casting Call
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View Applications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Manage Bookings
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-medium">New booking confirmed</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium">Model profile updated</p>
                  <p className="text-sm text-muted-foreground">5 hours ago</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium">Campaign application received</p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgencyManagement;