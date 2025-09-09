import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import southVibeLogo from "@/assets/south-vibe-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Vibe Coding", href: "/vibe" },
    { name: "Program", href: "/program" },
    { name: "Vote", href: "/vote" },
    
    { name: "Resources", href: "/resources" },
    { name: "Tools", href: "/tools" },
    { name: "Calendar", href: "/calendar" },
    { name: "Parents", href: "/parents" },
    
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];

  const handleNavClick = (item: typeof navigation[0], e: React.MouseEvent) => {
    // Special handling for Program navigation
    if (item.name === "Program") {
      if (location.pathname === "/program") {
        e.preventDefault();
        // Smooth scroll to #weeks section
        const weeksSection = document.getElementById('weeks');
        if (weeksSection) {
          weeksSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    
    // Special handling for Vibe Coding navigation
    if (item.name === "Vibe Coding") {
      if (location.pathname === "/vibe") {
        e.preventDefault();
        // Smooth scroll to #what-is section
        const whatIsSection = document.getElementById('what-is');
        if (whatIsSection) {
          whatIsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={southVibeLogo} 
              alt="South Vibe Coding Club" 
              className="h-10 w-auto animate-float"
            />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              South Vibe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavClick(item, e)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? "text-primary bg-secondary/50"
                    : "text-foreground hover:text-primary hover:bg-secondary/50"
                }`}
                aria-current={location.pathname === item.href ? "page" : undefined}
                aria-label={
                  item.name === "Program" ? "Navigate to Program" : 
                  item.name === "Vibe Coding" ? "Navigate to Vibe Coding" : undefined
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <Link to="/join#signup">
                Join the Club
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? "text-primary bg-secondary/50"
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                  aria-label={
                    item.name === "Program" ? "Navigate to Program" : 
                    item.name === "Vibe Coding" ? "Navigate to Vibe Coding" : undefined
                  }
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/join#signup">
                    Join the Club
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;