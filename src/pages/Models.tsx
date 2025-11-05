import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Models = () => {
  const [models, setModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      const { data, error } = await supabase
        .from('models')
        .select('*, profiles(*)')
        .eq('verified', true)
        .order('rating', { ascending: false });

      if (error) throw error;
      setModels(data || []);
    } catch (error) {
      console.error('Error fetching models:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredModels = models.filter(model => {
    const matchesSearch = model.profiles?.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          model.profiles?.location?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || model.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-6 lg:px-12 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Discover Models</h1>
          <p className="text-muted-foreground">Browse our verified talent pool</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="editorial">Editorial</SelectItem>
              <SelectItem value="fitness">Fitness</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Card key={i} className="h-96 animate-pulse bg-secondary/20" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model) => (
              <Link key={model.id} to={`/models/${model.id}`}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <h3 className="text-xl font-bold">{model.profiles?.full_name}</h3>
                      <p className="text-sm">{model.category} • {model.height}cm</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{model.profiles?.location}</span>
                      <span className="text-sm font-medium">★ {model.rating || '5.0'}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {!loading && filteredModels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No models found matching your criteria</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Models;