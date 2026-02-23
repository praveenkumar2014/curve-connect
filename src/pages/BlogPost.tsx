import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { mockBlogPosts } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const BlogPost = () => {
  const { slug } = useParams();
  const post = mockBlogPosts.find(p => p.slug === slug);
  const relatedPosts = mockBlogPosts.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen">
          <Header />
          <div className="pt-28 pb-24 text-center container">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog"><Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Button></Link>
          </div>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  const articleContent = `
    <p class="text-lg leading-relaxed mb-6">The modeling industry stands at a pivotal crossroads. As artificial intelligence continues to evolve at an unprecedented pace, its impact on talent discovery, campaign matching, and career management is nothing short of revolutionary.</p>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">The Rise of AI in Fashion</h2>
    <p class="leading-relaxed mb-6">In the past decade, the fashion industry has undergone a massive digital transformation. From virtual runway shows to AI-generated lookbooks, technology is reshaping every aspect of the industry. At GSMODELING, we've been at the forefront of this revolution, developing algorithms that analyze over 50 parameters to match models with their ideal campaigns.</p>

    <h2 class="text-2xl font-bold mb-4 mt-8">How AI Matching Works</h2>
    <p class="leading-relaxed mb-6">Our proprietary matching algorithm considers factors including facial symmetry, body proportions, style versatility, past campaign performance, brand alignment scores, and geographic availability. This multi-dimensional analysis results in a 95%+ match accuracy rate, significantly reducing the time brands spend on casting.</p>

    <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-lg text-muted-foreground">"AI doesn't replace the human eye for talent — it amplifies it. We can now discover potential in places we never could before." — Priya Sharma, Creative Director</blockquote>

    <h2 class="text-2xl font-bold mb-4 mt-8">What This Means for Models</h2>
    <p class="leading-relaxed mb-6">For aspiring and established models alike, AI-powered platforms offer unprecedented opportunities. No longer limited by geographic constraints or agency connections, models can now be discovered based purely on their talent and fit for specific campaigns. The democratization of the industry means that a model in a small Indian city has the same chance of being discovered as one in Mumbai or Delhi.</p>

    <h2 class="text-2xl font-bold mb-4 mt-8">Looking Ahead</h2>
    <p class="leading-relaxed mb-6">As we move into 2026 and beyond, we expect AI to play an even larger role in the modeling industry. From predicting fashion trends to generating personalized career roadmaps, the possibilities are endless. The key is to embrace this technology while maintaining the human creativity and artistry that makes fashion unique.</p>
  `;

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <article className="container px-6 lg:px-12 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>

            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <span className="text-muted-foreground flex items-center gap-1 text-sm"><Calendar className="h-3 w-3" /> {post.date}</span>
              <span className="text-muted-foreground flex items-center gap-1 text-sm"><Clock className="h-3 w-3" /> {post.readTime}</span>
            </div>

            <img src={post.image} alt={post.title} className="w-full aspect-video object-cover rounded-2xl mb-12" />

            <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: articleContent }} />
          </article>

          {/* Related Posts */}
          <div className="container px-6 lg:px-12 mt-24">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(rp => (
                <Link key={rp.id} to={`/blog/${rp.slug}`}>
                  <Card className="overflow-hidden glass hover-lift group h-full">
                    <div className="aspect-video overflow-hidden">
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2">{rp.category}</Badge>
                      <h3 className="font-bold group-hover:text-primary transition-colors">{rp.title}</h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
