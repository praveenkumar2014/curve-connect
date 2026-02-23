import { Button } from "@/components/ui/button";
import { Menu, Search, X, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const navItems = [
    {
      label: "Discover",
      href: "/models",
      children: [
        { label: "All Models", href: "/models" },
        { label: "New Faces", href: "/models/new-faces" },
        { label: "Top Models", href: "/models/top-models" },
        { label: "Fashion", href: "/models/fashion" },
        { label: "Commercial", href: "/models/commercial" },
      ],
    },
    { label: "Agencies", href: "/agencies" },
    { label: "Casting", href: "/casting-calls" },
    {
      label: "Services",
      href: "/bridal",
      children: [
        { label: "Bridal", href: "/bridal" },
        { label: "Makeup Artists", href: "/makeup-artists" },
        { label: "Trainers", href: "/trainers" },
        { label: "Fitness", href: "/fitness" },
        { label: "Portfolio", href: "/services/portfolio" },
      ],
    },
    {
      label: "Platform",
      href: "/projects",
      children: [
        { label: "Projects", href: "/projects" },
        { label: "Tasks", href: "/tasks" },
        { label: "Analytics", href: "/analytics" },
        { label: "Team", href: "/team" },
      ],
    },
    {
      label: "Resources",
      href: "/blog",
      children: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "/docs" },
        { label: "Pricing", href: "/pricing" },
        { label: "About Us", href: "/company/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  const allMobileLinks: { label: string; href: string; header: boolean }[] = navItems.flatMap(item =>
    item.children
      ? [{ label: item.label, href: item.href, header: true }, ...item.children.map(c => ({ ...c, header: false }))]
      : [{ label: item.label, href: item.href, header: false }]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover-scale">
              <img src={logo} alt="GSMODELING" className="h-9 w-9" />
              <span className="text-lg font-bold font-display">GSMODELING</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-muted flex items-center gap-1 ${location.pathname.startsWith(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3 w-3" />}
                  </Link>
                  {item.children && (
                    <div className="absolute top-full left-0 mt-1 w-48 glass rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/search">
              <Button variant="ghost" size="icon" className="hidden sm:flex"><Search className="h-4 w-4" /></Button>
            </Link>
            <ThemeToggle />
            {user ? (
              <>
                <Link to="/notifications">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full gradient-bg" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="hidden sm:inline-flex">Dashboard</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth"><Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign In</Button></Link>
                <Link to="/auth"><Button size="sm" className="hidden sm:inline-flex gradient-bg text-white">Join Now</Button></Link>
              </>
            )}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-1 border-t border-border pt-3">
            {allMobileLinks.map((link, i) => (
              <Link
                key={`${link.href}-${i}`}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors hover:bg-muted ${link.header ? 'font-semibold mt-3' : 'pl-8 text-muted-foreground'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border mt-3 space-y-2 px-4">
              {!user && (
                <>
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}><Button variant="outline" className="w-full">Sign In</Button></Link>
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}><Button className="w-full gradient-bg text-white">Join Now</Button></Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
