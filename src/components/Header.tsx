import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-3 hover-lift">
              <img src={logo} alt="GSMODELING" className="h-12 w-12 animate-float" />
              <span className="text-2xl font-bold tracking-tight font-display">GSMODELING</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/models" className="text-sm hover:text-accent transition-colors">
                Models
              </Link>
              <Link to="/agencies" className="text-sm hover:text-accent transition-colors">
                Agencies
              </Link>
              <Link to="/campaigns" className="text-sm hover:text-accent transition-colors">
                Campaigns
              </Link>
              <Link to="/casting-calls" className="text-sm hover:text-accent transition-colors">
                Casting
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/search">
              <Button variant="ghost" size="icon" className="hidden sm:flex hover-scale">
                <Search className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="hidden sm:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero" className="hidden sm:inline-flex hover-glow">
                Join Now
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-scale"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4 animate-slide-in-left">
            <Link to="/models" className="block text-sm hover:text-accent transition-colors">
              Models
            </Link>
            <Link to="/agencies" className="block text-sm hover:text-accent transition-colors">
              Agencies
            </Link>
            <Link to="/campaigns" className="block text-sm hover:text-accent transition-colors">
              Campaigns
            </Link>
            <Link to="/casting-calls" className="block text-sm hover:text-accent transition-colors">
              Casting
            </Link>
            <div className="pt-4 space-y-2">
              <Link to="/auth" className="w-full block">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth" className="w-full block">
                <Button variant="hero" className="w-full">
                  Join Now
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
