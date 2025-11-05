import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, DollarSign } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const { data, error } = await supabase
        .from('campaigns')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCampaigns(data || []);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-6 lg:px-12 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Active Campaigns</h1>
          <p className="text-muted-foreground">Discover exciting opportunities from top brands</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(i => (
              <Card key={i} className="h-64 animate-pulse bg-secondary/20" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{campaign.title}</h3>
                    <p className="text-muted-foreground">{campaign.brand_name}</p>
                  </div>
                  <Badge variant="secondary">{campaign.campaign_type}</Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {campaign.description}
                </p>

                <div className="space-y-2 mb-4">
                  {campaign.location && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{campaign.location}</span>
                    </div>
                  )}
                  {campaign.budget_range && (
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>{campaign.budget_range}</span>
                    </div>
                  )}
                  {campaign.start_date && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(campaign.start_date).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                <Button variant="gold" className="w-full">Apply Now</Button>
              </Card>
            ))}
          </div>
        )}

        {!loading && campaigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No active campaigns at the moment</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Campaigns;