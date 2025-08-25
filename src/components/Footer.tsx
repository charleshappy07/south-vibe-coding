import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Program", href: "/program" },
    { name: "Join", href: "/join" },
    { name: "Projects", href: "/projects" },
    { name: "Calendar", href: "/calendar" },
    { name: "Resources", href: "/resources" },
    { name: "Tools", href: "/tools" }
  ];

  const parentLinks = [
    { name: "Parent Info", href: "/parents" },
    { name: "Safety & Guidelines", href: "/about#safety" },
    { name: "Code of Conduct", href: "/conduct" },
    { name: "Contact Advisor", href: "/contact" }
  ];

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">South Vibe Coding Club</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Wednesdays, 3:00–4:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Room 145 (Ms. Handlers classroom), South Plantation High School</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@southvibecoding.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Parent Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Parents</h3>
            <ul className="space-y-2">
              {parentLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ready to Create?</h3>
            <p className="text-sm text-white/80 mb-4">
              Join our community of student creators and start building your portfolio today.
            </p>
            <Button variant="default" asChild>
              <Link to="/join">
                Join the Club
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2024 South Vibe Coding Club. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-sm text-white/60 hover:text-white/80 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/conduct" className="text-sm text-white/60 hover:text-white/80 transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;