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
            
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <Link to="/models" className="text-sm hover:text-accent transition-colors flex items-center gap-1">
                  Discover
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/models" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      All Models
                    </Link>
                    <Link to="/models/new-faces" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      New Faces
                    </Link>
                    <Link to="/models/top-models" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      Top Models
                    </Link>
                    <Link to="/models/fashion" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      Fashion
                    </Link>
                    <Link to="/models/commercial" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      Commercial
                    </Link>
                    <Link to="/models/editorial" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      Editorial
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/agencies" className="text-sm hover:text-accent transition-colors">
                Agencies
              </Link>
              
              <Link to="/casting-calls" className="text-sm hover:text-accent transition-colors">
                Casting
              </Link>
              
              <Link to="/campaigns" className="text-sm hover:text-accent transition-colors">
                Campaigns
              </Link>

              <div className="relative group">
                <Link to="/services/portfolio" className="text-sm hover:text-accent transition-colors flex items-center gap-1">
                  Services
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/services/portfolio" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      Portfolio Services
                    </Link>
                    <Link to="/agencies/management" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      Agency Management
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link to="/company/about" className="text-sm hover:text-accent transition-colors flex items-center gap-1">
                  Company
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/company/about" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      About Us
                    </Link>
                    <Link to="/editorial" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                      Editorial
                    </Link>
                  </div>
                </div>
              </div>
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
          <nav className="lg:hidden pb-6 space-y-2 animate-slide-in-left">
            <div className="space-y-1">
              <Link to="/models" className="block px-4 py-2 text-sm hover:bg-accent/10 rounded transition-colors font-semibold">
                Discover Models
              </Link>
              <Link to="/models/new-faces" className="block px-6 py-2 text-sm hover:bg-accent/10 rounded transition-colors">
                New Faces
              </Link>
              <Link to="/models/top-models" className="block px-6 py-2 text-sm hover:bg-accent/10 rounded transition-colors">
                Top Models
              </Link>
            </div>
            
            <Link to="/agencies" className="block px-4 py-2 text-sm hover:bg-accent/10 rounded transition-colors font-semibold">
              Agencies
            </Link>
            <Link to="/casting-calls" className="block px-4 py-2 text-sm hover:bg-accent/10 rounded transition-colors font-semibold">
              Casting Calls
            </Link>
            <Link to="/campaigns" className="block px-4 py-2 text-sm hover:bg-accent/10 rounded transition-colors font-semibold">
              Campaigns
            </Link>
            
            <div className="space-y-1">
              <Link to="/services/portfolio" className="block px-4 py-2 text-sm hover:bg-accent/10 rounded transition-colors font-semibold">
                Services
              </Link>
              <Link to="/agencies/management" className="block px-6 py-2 text-sm hover:bg-accent/10 rounded transition-colors">
                Agency Management
              </Link>
            </div>
            
            <div className="space-y-1">
              <Link to="/company/about" className="block px-4 py-2 text-sm hover:bg-accent/10 rounded transition-colors font-semibold">
                Company
              </Link>
              <Link to="/editorial" className="block px-6 py-2 text-sm hover:bg-accent/10 rounded transition-colors">
                Editorial
              </Link>
            </div>

            <div className="pt-4 space-y-2 border-t border-border/50 mt-4">
              <Link to="/search" className="w-full block">
                <Button variant="outline" className="w-full">
                  Search
                </Button>
              </Link>
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
