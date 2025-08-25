import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import southVibeLogo from "@/assets/south-vibe-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-vibe-gold rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyber-blue rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-vibe-gold rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-5 h-5 bg-neon-green rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Logo */}
          <img src={southVibeLogo} alt="South Vibe Logo" className="h-32 w-32 md:h-48 md:w-48 mx-auto mb-8" />

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create with your
            <span className="block bg-gradient-accent bg-clip-text text-transparent animate-glow">
              words.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vibe Coding turns ideas into games, websites, and tools — fast.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link to="/tools" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 hover-scale cursor-pointer">
              <Code className="h-4 w-4 text-vibe-gold" />
              <span className="text-sm text-white">AI + Code Together</span>
            </Link>
            <Link to="/tools" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 hover-scale cursor-pointer">
              <Palette className="h-4 w-4 text-cyber-blue" />
              <span className="text-sm text-white">Make It Yours</span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/join#signup">
                Join the Club
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/projects">
                See Projects
              </Link>
            </Button>
          </div>

          {/* Meeting Info */}
          <div className="mt-12 text-white/80">
            <p className="text-lg font-semibold">Next Meeting</p>
            <p className="text-sm">Wednesdays, 3:00–4:00 PM • Room 145 (Ms. Handlers classroom)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;