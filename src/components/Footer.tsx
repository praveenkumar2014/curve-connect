import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Youtube, Facebook, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const links = {
    discover: [
      { label: "All Models", href: "/models" },
      { label: "New Faces", href: "/models/new-faces" },
      { label: "Top Models", href: "/models/top-models" },
      { label: "Agencies", href: "/agencies" },
      { label: "Casting Calls", href: "/casting-calls" },
    ],
    platform: [
      { label: "Projects", href: "/projects" },
      { label: "Analytics", href: "/analytics" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
    ],
    services: [
      { label: "Bridal", href: "/bridal" },
      { label: "Makeup Artists", href: "/makeup-artists" },
      { label: "Trainers", href: "/trainers" },
      { label: "Fitness", href: "/fitness" },
      { label: "NGO Initiatives", href: "/ngo" },
    ],
    company: [
      { label: "About Us", href: "/company/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Settings", href: "/settings" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="GSMODELING" className="h-8 w-8" />
              <span className="text-lg font-bold font-display">GSMODELING</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              India's premier AI-powered modeling and talent discovery platform
            </p>
            <div className="flex gap-2">
              {[Instagram, Twitter, Linkedin, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 capitalize">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GSMODELING. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> hello@gsmodeling.com</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Mumbai, India</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Designed and Developed by{" "}
            <a 
              href="https://www.guideitsol.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-medium"
            >
              GUIDESOFT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
