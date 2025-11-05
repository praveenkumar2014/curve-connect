import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">GSMODELING</h3>
            <p className="text-sm text-primary-foreground/70 mb-6">
              The next-generation AI-powered modeling and talent discovery platform
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/models" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Discover Models
                </Link>
              </li>
              <li>
                <Link to="/agencies" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Find Agencies
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  For Brands
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/company/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/editorial" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Editorial
                </Link>
              </li>
              <li>
                <Link to="/services/portfolio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Portfolio Services
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Search
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/legal/privacy" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/casting-calls" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Casting Calls
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>© 2025 GSMODELING. All rights reserved. Crafted with excellence by Praveen Kumar.</p>
        </div>
      </div>
    </footer>
  );
};
