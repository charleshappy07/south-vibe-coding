import { Card } from "@/components/ui/card";
import { Sparkles, Bot, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const ValueTiles = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Make It Yours",
      description: "Art, games, stories, tools — your vibe.",
      color: "text-cyber-blue"
    },
    {
      icon: Bot,
      title: "AI + Code Together",
      description: "Use Lovable, Windsurf, Cursor, Flute, p5.js, Replit.",
      color: "text-neon-green"
    },
    {
      icon: Trophy,
      title: "Portfolio Ready",
      description: "Demos you can show on applications.",
      color: "text-vibe-gold"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <Link key={index} to="/tools" className="block">
              <Card 
                className="p-6 text-center border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-slide-up cursor-pointer h-full hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <value.icon className={`h-12 w-12 mx-auto ${value.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueTiles;