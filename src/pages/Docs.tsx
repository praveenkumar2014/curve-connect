import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { mockDocsSections } from "@/lib/mock-data";
import { Search, Copy, Check, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const docsContent: Record<string, { title: string; content: string }> = {
  introduction: {
    title: "Introduction to GSMODELING",
    content: `
## Welcome to GSMODELING

GSMODELING is India's premier AI-powered modeling and talent discovery platform. This documentation will guide you through setting up and using every feature.

### Key Features
- **AI-Powered Matching** — Our algorithm analyzes 50+ parameters for 95%+ accuracy
- **Portfolio Management** — Upload unlimited photos and videos
- **Agency Dashboard** — Manage your entire roster from one place
- **Advanced Analytics** — Real-time insights on all your metrics

### Quick Links
- [Getting Started](#quick-start)
- [API Reference](#api-auth)
- [Support](mailto:support@gsmodeling.com)

\`\`\`bash
# Install the GSMODELING SDK
npm install @gsmodeling/sdk

# Initialize
import { GSModeling } from '@gsmodeling/sdk';
const gs = new GSModeling({ apiKey: 'your-api-key' });
\`\`\`
    `,
  },
  "quick-start": {
    title: "Quick Start Guide",
    content: `
## Quick Start Guide

Get up and running with GSMODELING in under 5 minutes.

### Step 1: Create an Account
Visit [gsmodeling.lovable.app/auth](/auth) and create your account. Choose your role (Model, Agency, or Brand).

### Step 2: Complete Your Profile
Fill in your professional details, upload portfolio images, and set your preferences.

\`\`\`typescript
// Using the API to update your profile
const response = await gs.profiles.update({
  fullName: 'Priya Sharma',
  category: 'fashion',
  height: 175,
  measurements: '32-24-34',
  location: 'Mumbai, India'
});
\`\`\`

### Step 3: Get Matched
Our AI will automatically start matching you with relevant campaigns and opportunities.

### Step 4: Book & Earn
Accept bookings, manage your schedule, and track your earnings from the dashboard.
    `,
  },
};

const Docs = () => {
  const [activeSlug, setActiveSlug] = useState("introduction");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedBlock, setCopiedBlock] = useState<number | null>(null);

  const currentDoc = docsContent[activeSlug] || docsContent.introduction;

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedBlock(index);
    setTimeout(() => setCopiedBlock(null), 2000);
  };

  const renderContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    return parts.map((part, i) => {
      if (part.startsWith("```")) {
        const lines = part.split("\n");
        const lang = lines[0].replace("```", "").trim();
        const code = lines.slice(1, -1).join("\n");
        return (
          <div key={i} className="relative my-6 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between bg-muted px-4 py-2 border-b border-border">
              <span className="text-xs font-mono text-muted-foreground">{lang || "code"}</span>
              <Button variant="ghost" size="sm" onClick={() => copyCode(code, i)} className="h-7 text-xs">
                {copiedBlock === i ? <Check className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                {copiedBlock === i ? "Copied" : "Copy"}
              </Button>
            </div>
            <pre className="bg-muted/50 p-4 overflow-x-auto"><code className="text-sm font-mono">{code}</code></pre>
          </div>
        );
      }
      return (
        <div key={i} className="prose prose-sm dark:prose-invert max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_li]:mb-1 [&_strong]:font-semibold">
          {part.split("\n").map((line, j) => {
            if (line.startsWith("## ")) return <h2 key={j}>{line.replace("## ", "")}</h2>;
            if (line.startsWith("### ")) return <h3 key={j}>{line.replace("### ", "")}</h3>;
            if (line.startsWith("- ")) return <li key={j} dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>') }} />;
            if (line.trim()) return <p key={j} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/`(.*?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>') }} />;
            return null;
          })}
        </div>
      );
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 pt-20 flex">
          {/* Sidebar */}
          <aside className="w-72 border-r border-border p-6 hidden lg:block overflow-y-auto sticky top-20 h-[calc(100vh-5rem)]">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search docs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 h-9 text-sm" />
            </div>
            {mockDocsSections.map((section) => (
              <div key={section.title} className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{section.title}</h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.slug}>
                      <button
                        onClick={() => setActiveSlug(item.slug)}
                        className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${activeSlug === item.slug ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 max-w-4xl">
            <motion.div key={activeSlug} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Documentation</span>
              </div>
              <h1 className="text-3xl font-bold mb-8">{currentDoc.title}</h1>
              {renderContent(currentDoc.content)}
            </motion.div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default Docs;
