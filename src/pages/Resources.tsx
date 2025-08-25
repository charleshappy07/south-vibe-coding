import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Code, Palette, Gamepad2, BookOpen, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  const starterKits = [
    {
      title: "Web Starter (Lovable → Replit)",
      description: "Basic website template ready to customize and deploy",
      icon: Code,
      downloadUrl: "https://lovable.dev",
      category: "Web"
    },
    {
      title: "p5.js Starter Sketch",
      description: "Interactive art canvas with mouse and keyboard inputs",
      icon: Palette,
      downloadUrl: "https://p5js.org/tutorials/get-started/",
      category: "Art"
    },
    {
      title: "Game Starter (JS Boilerplate)",
      description: "Basic game loop with collision detection and scoring",
      icon: Gamepad2,
      downloadUrl: "https://www.builder.io/fusion?utm_term=vibe%20coding%20design%20systems&utm_campaign=VibeCoding_NonBrand&utm_source=adwords&utm_medium=ppc&hsa_acc=8119935409&hsa_cam=22901307784&hsa_grp=183514045589&hsa_ad=769493078621&hsa_src=g&hsa_tgt=kwd-2435525053651&hsa_kw=vibe%20coding%20design%20systems&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=22901307784&gbraid=0AAAAACUA9YmjaxRZosKKQKaHn_pAZgWYL&gclid=Cj0KCQjw8KrFBhDUARIsAMvIApbEL3JvHPMzRBzkqDPmnOxYCxAXVGVtxqIeKZgZaurhdPjwTVkrhoYaAlqwEALw_wcB",
      category: "Game"
    },
    {
      title: "Story Starter (Twine Map)",
      description: "Branching narrative template with choice mechanics",
      icon: BookOpen,
      downloadUrl: "https://twinery.org/",
      category: "Story"
    }
  ];

  const designPrompts = [
    "Make a site that changes based on your mood words.",
    "Create an art sketch that reacts to a favorite song's tempo (manual slider).",
    "Build a tool that saves a friend 5 minutes a day.",
    "Design a game where the story changes based on player choices.",
    "Create an interactive resume that tells your story.",
    "Build a random quote generator with your favorite quotes."
  ];

  const inspirationLinks = [
    {
      title: "CodePen Student Showcase",
      description: "Amazing projects from student developers worldwide",
      url: "https://codepen.io/",
      category: "Showcase"
    },
    {
      title: "p5.js Gallery",
      description: "Creative coding examples and interactive art",
      url: "https://p5js.org/gallery/",
      category: "Art"
    },
    {
      title: "Replit Templates",
      description: "Ready-to-remix projects in various languages",
      url: "https://replit.com/templates",
      category: "Templates"
    },
    {
      title: "Congressional App Challenge",
      description: "Student app competition with real prizes",
      url: "https://www.congressionalappchallenge.us/",
      category: "Competition"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everything you need to start building — starter kits, prompts, guides, and inspiration.
          </p>
        </section>

        {/* Starter Kits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Starter Kits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {starterKits.map((kit, index) => {
              const IconComponent = kit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                      {kit.title}
                    </CardTitle>
                    <CardDescription>{kit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-secondary px-2 py-1 rounded">
                        {kit.category}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={kit.downloadUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          <ArrowRight className="h-4 w-4" />
                          Learn More
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Design & Writing Prompts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-primary" />
            Design & Writing Prompts
          </h2>
          <div className="bg-secondary/20 rounded-lg p-6">
            <p className="text-muted-foreground mb-6">
              Stuck for ideas? Try one of these creative prompts to get started:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {designPrompts.map((prompt, index) => (
                <div key={index} className="bg-background p-4 rounded-md border border-border">
                  <p className="text-sm font-medium">"{prompt}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inspiration Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Inspiration Links</h2>
          <p className="text-muted-foreground mb-6">
            Curated showcases, competitions, and learning resources (all student-safe).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inspirationLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {link.title}
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-secondary px-2 py-1 rounded">
                      {link.category}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Visit Site
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-muted-foreground mb-6">
            Join the club and get access to all these resources plus weekly mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/join#signup">Join the Club</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/tools">Explore Tools</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;