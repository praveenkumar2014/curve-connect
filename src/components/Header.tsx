import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="GSMODELING" className="h-12 w-12" />
              <span className="text-2xl font-bold tracking-tight font-['Playfair_Display']">GSMODELING</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#models" className="text-sm hover:text-accent transition-colors">
                Models
              </a>
              <a href="#agencies" className="text-sm hover:text-accent transition-colors">
                Agencies
              </a>
              <a href="#discover" className="text-sm hover:text-accent transition-colors">
                Discover
              </a>
              <a href="#about" className="text-sm hover:text-accent transition-colors">
                About
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="hidden sm:inline-flex" onClick={() => window.location.href = '/auth'}>
              Sign In
            </Button>
            <Button variant="hero" className="hidden sm:inline-flex" onClick={() => window.location.href = '/auth'}>
              Join Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4 animate-fade-in">
            <a href="#models" className="block text-sm hover:text-accent transition-colors">
              Models
            </a>
            <a href="#agencies" className="block text-sm hover:text-accent transition-colors">
              Agencies
            </a>
            <a href="#discover" className="block text-sm hover:text-accent transition-colors">
              Discover
            </a>
            <a href="#about" className="block text-sm hover:text-accent transition-colors">
              About
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" onClick={() => window.location.href = '/auth'}>
                Sign In
              </Button>
              <Button variant="hero" className="w-full" onClick={() => window.location.href = '/auth'}>
                Join Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
