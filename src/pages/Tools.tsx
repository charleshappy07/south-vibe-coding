import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, Edit, MessageSquare, Wand2, Palette, Code, Globe, FileText, Bot } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Tools = () => {
  const tools = [
    {
      name: "Microsoft Copilot",
      description: "AI-powered chat assistant that helps with research, writing, and problem-solving. Your personal AI companion for any task.",
      icon: Bot,
      category: "AI Assistant",
      whyWeUse: "Perfect starting point for brainstorming ideas, getting explanations, and planning your projects before you code.",
      safetyNote: "Use AI responsibly - always fact-check important information and create original content.",
      url: "https://www.microsoft.com/en-us/microsoft-365-copilot/chat",
      bestFor: ["Research", "Planning", "Writing Help"]
    },
    {
      name: "Lovable",
      description: "Turn text prompts into working web prototypes you can customize. Perfect for rapid prototyping and getting ideas into reality fast.",
      icon: Zap,
      category: "AI Builder",
      whyWeUse: "Creates full websites from descriptions, letting you focus on ideas instead of setup.",
      safetyNote: "Remember to create original content and give credit to any inspiration sources.",
      url: "https://lovable.dev",
      bestFor: ["Websites", "Landing Pages", "Prototypes"]
    },
    {
      name: "Windsurf",
      description: "AI-assisted editor for refactors, features, and debugging. Like having a coding partner who never sleeps.",
      icon: Edit,
      category: "AI Editor",
      whyWeUse: "Helps you improve existing code and add new features with natural language commands.",
      safetyNote: "Always understand the code changes before applying them to your projects.",
      url: "https://codeium.com/windsurf",
      bestFor: ["Code Editing", "Refactoring", "Bug Fixes"]
    },
    {
      name: "Rosebud",
      description: "AI-powered game development platform that helps you create games through natural language descriptions.",
      icon: MessageSquare,
      category: "AI IDE",
      whyWeUse: "Perfect for creating games quickly using AI assistance and natural language commands.",
      safetyNote: "Use AI suggestions as learning opportunities, not shortcuts to skip understanding.",
      url: "https://rosebud.ai/",
      bestFor: ["Game Development", "AI Assistance", "Rapid Prototyping"]
    },
    {
      name: "Flute",
      description: "Generates app scaffolds and flows from descriptions. Quickly set up project structures and user flows.",
      icon: Wand2,
      category: "Generator",
      whyWeUse: "Saves time on boilerplate code so you can focus on the creative parts.",
      safetyNote: "Generated code is a starting point — always customize it to match your vision.",
      url: "#",
      bestFor: ["Project Setup", "App Structure", "Quick Prototypes"]
    },
    {
      name: "p5.js",
      description: "Creative coding library for visuals and interaction. Make art that responds to mouse, keyboard, and more.",
      icon: Palette,
      category: "Creative",
      whyWeUse: "Perfect for interactive art, animations, and creative expression through code.",
      safetyNote: "Create original artwork and be mindful of content that will be shared publicly.",
      url: "https://p5js.org",
      bestFor: ["Interactive Art", "Animations", "Creative Coding"]
    },
    {
      name: "Replit",
      description: "In-browser IDE and hosting for web apps. Code, test, and share projects all in one place.",
      icon: Code,
      category: "Platform",
      whyWeUse: "No setup required — just start coding and instantly share your work with others.",
      safetyNote: "Keep your repl settings appropriate for school sharing and follow community guidelines.",
      url: "https://replit.com",
      bestFor: ["Web Apps", "Collaboration", "Quick Testing"]
    },
    {
      name: "Glitch",
      description: "Instant web app hosting and remixing. Build on existing projects or start fresh.",
      icon: Globe,
      category: "Platform",
      whyWeUse: "Great for hosting live web apps and learning from community projects.",
      safetyNote: "Only remix projects with appropriate licenses and always credit original creators.",
      url: "https://glitch.com",
      bestFor: ["Web Hosting", "Remixing", "Community Learning"]
    },
    {
      name: "Twine",
      description: "Interactive, branching stories. Create choose-your-own-adventure games and narrative experiences.",
      icon: FileText,
      category: "Storytelling",
      whyWeUse: "No coding required to create engaging interactive stories with multiple paths.",
      safetyNote: "Keep story content school-appropriate and respect others in shared narratives.",
      url: "https://twinery.org",
      bestFor: ["Interactive Fiction", "Storytelling", "Narrative Games"]
    }
  ];

  const categories = ["All", "AI Assistant", "AI Builder", "AI Editor", "AI IDE", "Generator", "Creative", "Platform", "Storytelling"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Tools We Use
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Powerful, friendly tools that help you create without getting stuck in the technical details.
          </p>
        </section>

        {/* Digital Citizenship Note */}
        <section className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold mb-2 text-amber-800 dark:text-amber-200">
            Digital Citizenship Reminder
          </h2>
          <p className="text-amber-700 dark:text-amber-300">
            <strong>Attribution & Licenses:</strong> Always give credit to inspiration sources and respect licensing terms.
            <br />
            <strong>School-Appropriate Content:</strong> All projects must follow SPHS content policies and community guidelines.
          </p>
        </section>

        {/* Tools Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle className="text-xl">{tool.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {tool.category}
                          </Badge>
                        </div>
                      </div>
                      {tool.url !== "#" && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={tool.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">
                      {tool.description}
                    </CardDescription>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">Why We Use It:</h4>
                      <p className="text-sm text-muted-foreground">{tool.whyWeUse}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Best For:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tool.bestFor.map((use, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {use}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-secondary/20 p-3 rounded-md">
                      <h4 className="font-semibold text-sm mb-1 text-orange-600 dark:text-orange-400">
                        Safety Note:
                      </h4>
                      <p className="text-xs text-muted-foreground">{tool.safetyNote}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Week 1-2</CardTitle>
                <CardDescription>Foundation Building</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Begin with <strong>Microsoft Copilot</strong> to plan your ideas</li>
                  <li>• Start with <strong>Lovable</strong> for your first website</li>
                  <li>• Use <strong>Replit</strong> to host and share</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Week 3-6</CardTitle>
                <CardDescription>Skill Development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Learn <strong>Windsurf</strong> for editing code</li>
                  <li>• Create stories with <strong>Twine</strong></li>
                  <li>• Use <strong>Rosebud</strong> for game development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Week 7-10</CardTitle>
                <CardDescription>Advanced Projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Combine multiple tools for final project</li>
                  <li>• Use <strong>Flute</strong> for complex app structures</li>
                  <li>• Polish with <strong>Glitch</strong> hosting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Creating?</h2>
          <p className="text-muted-foreground mb-6">
            Join the club and get hands-on experience with all these tools plus weekly mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/join#signup">Join the Club</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resources">Get Resources</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;