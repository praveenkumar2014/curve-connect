import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { mockBlogPosts } from "@/lib/mock-data";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Technology", "Fashion", "Guide", "Events", "Photography"];
  const featured = mockBlogPosts.find(p => p.featured);
  const filteredPosts = mockBlogPosts.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container px-6 lg:px-12">
            <div className="text-center mb-12">
              <Badge className="mb-4 gradient-bg text-white border-0">Blog</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Industry Insights</h1>
              <p className="text-xl text-muted-foreground">Latest trends, tips, and stories from the modeling world</p>
            </div>

            {/* Featured Post */}
            {featured && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
                <Link to={`/blog/${featured.slug}`}>
                  <Card className="overflow-hidden glass hover-lift group">
                    <div className="grid md:grid-cols-2">
                      <div className="aspect-video md:aspect-auto overflow-hidden">
                        <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <Badge className="w-fit mb-4">{featured.category}</Badge>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{featured.title}</h2>
                        <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                        <div className="flex items-center gap-4">
                          <img src={featured.author.avatar} alt={featured.author.name} className="w-8 h-8 rounded-full" />
                          <span className="text-sm font-medium">{featured.author.name}</span>
                          <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )}

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'gradient-bg text-white' : 'glass text-muted-foreground hover:text-foreground'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, i) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden glass hover-lift group h-full flex flex-col">
                      <div className="aspect-video overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <Badge variant="secondary" className="w-fit mb-3">{post.category}</Badge>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
                            <span className="text-xs">{post.author.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
