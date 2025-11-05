import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, User } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const CastingCalls = () => {
  const [castingCalls, setCastingCalls] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCastingCalls();
  }, []);

  const fetchCastingCalls = async () => {
    try {
      const { data, error } = await supabase
        .from('casting_calls')
        .select('*')
        .eq('status', 'open')
        .order('casting_date', { ascending: true });

      if (error) throw error;
      setCastingCalls(data || []);
    } catch (error) {
      console.error('Error fetching casting calls:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-6 lg:px-12 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Open Casting Calls</h1>
          <p className="text-muted-foreground">Find your next opportunity</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <Card key={i} className="h-72 animate-pulse bg-secondary/20" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {castingCalls.map((casting) => (
              <Card key={casting.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{casting.title}</h3>
                  <Badge variant="outline" className="mb-2">{casting.status}</Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {casting.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{casting.casting_director}</span>
                  </div>
                  {casting.location && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{casting.location}</span>
                    </div>
                  )}
                  {casting.casting_date && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(casting.casting_date).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                {casting.compensation && (
                  <p className="text-sm font-medium text-primary mb-4">
                    Compensation: {casting.compensation}
                  </p>
                )}

                <Button variant="gold" className="w-full">Submit Application</Button>
              </Card>
            ))}
          </div>
        )}

        {!loading && castingCalls.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No open casting calls at the moment</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CastingCalls;