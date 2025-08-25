import { Card } from "@/components/ui/card";
import { Rocket, Sparkles, Bot, Trophy } from "lucide-react";

const ValueTiles = () => {
  const values = [
    {
      icon: Rocket,
      title: "Ship Fast",
      description: "Publish something in your first weeks.",
      color: "text-vibe-gold"
    },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-6 text-center border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <value.icon className={`h-12 w-12 mx-auto ${value.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueTiles;