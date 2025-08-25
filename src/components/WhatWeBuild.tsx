import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Globe, Wrench, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const WhatWeBuild = () => {
  const projects = [
    {
      icon: Globe,
      title: "Interactive Websites",
      description: "Personal portfolios, landing pages, and interactive experiences",
      tech: ["Lovable", "React", "Tailwind"],
      color: "from-vibe-purple to-vibe-purple-light"
    },
    {
      icon: Gamepad2,
      title: "Mini-Games",
      description: "Browser games with scoring, animations, and player interaction",
      tech: ["p5.js", "JavaScript", "Game Logic"],
      color: "from-cyber-blue to-vibe-purple"
    },
    {
      icon: Wrench,
      title: "Utility Apps",
      description: "Grade calculators, planners, and productivity tools",
      tech: ["React", "Local Storage", "APIs"],
      color: "from-vibe-gold to-vibe-gold-light"
    },
    {
      icon: BookOpen,
      title: "Interactive Stories",
      description: "Choose-your-own-adventure and branching narratives",
      tech: ["Twine", "Flute", "Interactive Fiction"],
      color: "from-neon-green to-cyber-blue"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From your first idea to a polished demo — create projects that showcase your creativity and technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <Link key={index} to="/tools" className="block">
              <Card 
                className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-slide-up cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-secondary/50 text-xs font-medium rounded-full text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeBuild;