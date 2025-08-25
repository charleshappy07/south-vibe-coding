import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Calendar, 
  Download, 
  Eye, 
  CheckCircle, 
  Code, 
  Palette, 
  Gamepad2, 
  Wrench, 
  Sparkles,
  Globe,
  Zap,
  Users
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Program = () => {
  const [openWeek, setOpenWeek] = useState<string>("week-1");

  // Get the current week from URL params if available
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const weekParam = urlParams.get('week');
    if (weekParam) {
      setOpenWeek(`week-${weekParam}`);
    }
  }, []);

  // Analytics event firing
  useEffect(() => {
    // Fire program_view event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'program_view');
    }
  }, []);

  const handleAccordionChange = (value: string) => {
    setOpenWeek(value);
    // Fire accordion_open event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const weekNumber = value.replace('week-', '');
      (window as any).gtag('event', 'accordion_open', {
        week_number: weekNumber
      });
    }
  };

  const handleCTAClick = (label: string) => {
    // Fire CTA click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        label: label
      });
    }
  };

  const tools = [
    {
      name: "Lovable",
      description: "Turn words into websites with AI assistance",
      icon: Sparkles,
    },
    {
      name: "Windsurf",
      description: "AI-powered IDE for modern development",
      icon: Code,
    },
    {
      name: "Cursor",
      description: "Code with AI pair programming",
      icon: Zap,
    },
    {
      name: "Flute",
      description: "Simple tool building and prototyping",
      icon: Wrench,
    },
    {
      name: "p5.js",
      description: "Creative coding for interactive art",
      icon: Palette,
    },
    {
      name: "Replit",
      description: "Online coding and hosting platform",
      icon: Globe,
    }
  ];

  const weeks = [
    {
      id: "week-1",
      title: "Week 1 — The Vibe of Coding",
      deliverable: "First prototype website via Lovable",
      tools: "Lovable, Canva Whiteboards",
      description: "Ideate 3 ideas, generate a site, customize copy/images"
    },
    {
      id: "week-2", 
      title: "Week 2 — Words → Web",
      deliverable: "Personal portfolio page live",
      tools: "Lovable → Replit/Glitch (publish)",
      description: "Edit sections, add links, push live"
    },
    {
      id: "week-3",
      title: "Week 3 — Interactive Art", 
      deliverable: "p5.js 'vibe sketch' reacting to mouse/keys",
      tools: "p5.js, Cursor",
      description: "Shapes, input, simple animation"
    },
    {
      id: "week-4",
      title: "Week 4 — Make a Mini-Game",
      deliverable: "Playable JS mini-game with score/lives", 
      tools: "Replit, Cursor",
      description: "Game loop, collisions, scoreboard"
    },
    {
      id: "week-5",
      title: "Week 5 — Story & Choices",
      deliverable: "Interactive story with branches",
      tools: "Twine or Flute", 
      description: "Map choices, publish story"
    },
    {
      id: "week-6",
      title: "Week 6 — Build a Tool",
      deliverable: "Utility app (e.g., grade calculator, planner)",
      tools: "Windsurf, Flute",
      description: "UI + logic, test with a peer"
    },
    {
      id: "week-7", 
      title: "Week 7 — Level Up with AI IDEs",
      deliverable: "Improved feature set & bug fixes",
      tools: "Cursor, Windsurf",
      description: "'Talk to your code' to add features & debug"
    },
    {
      id: "week-8",
      title: "Week 8 — Project Sprint I", 
      deliverable: "Final project scaffold (your choice)",
      tools: "Student's choice",
      description: "Pitch idea, scaffold core features"
    },
    {
      id: "week-9",
      title: "Week 9 — Project Sprint II",
      deliverable: "Near-final build + design polish",
      tools: "Student's choice", 
      description: "UX clean-up, playtest, prep demo"
    },
    {
      id: "week-10",
      title: "Week 10 — Demo Day",
      deliverable: "2–3 minute live demo + 60-sec video",
      tools: "Student's choice",
      description: "Present, celebrate, publish links"
    }
  ];

  const outcomes = [
    "2+ published websites",
    "1 interactive art sketch", 
    "1 mini-game",
    "1 utility app",
    "1 final project + 60-sec demo video",
    "Presentation practice & portfolio page"
  ];

  const faqs = [
    {
      question: "Do I need experience?",
      answer: "No! We start from zero and build up together. The tools we use are designed to help beginners create amazing things from day one."
    },
    {
      question: "What if I'm advanced?",
      answer: "Perfect! You can lead teams, mentor others, and go deeper with AI IDEs. We'll challenge you with complex projects and leadership opportunities."
    },
    {
      question: "Is there homework?",
      answer: "Light homework only — mostly polishing projects you care about. We focus on building during our weekly sessions together."
    },
    {
      question: "Does this help with college?",
      answer: "Absolutely! You'll graduate with a real portfolio of projects and presentation experience that makes applications stand out."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Vibe Coding Program
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Make things with your words — ship a website, a game, an art sketch, 
                a tool, and a final project in 10 weeks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={() => handleCTAClick('Join the Club')}
                  asChild
                >
                  <Link to="/join#signup">
                    Join the Club
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
                  onClick={() => handleCTAClick('Add to Calendar')}
                  asChild
                >
                  <Link to="/calendar">
                    <Calendar className="mr-2 h-5 w-5" />
                    Add to Calendar
                  </Link>
                </Button>
              </div>

              <div className="text-white/80">
                <p className="text-lg font-semibold">Meets Thursdays, 3:00–4:00 PM</p>
                <p className="text-sm">Room (TBD) • South Plantation High School</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How the program works
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Vibe Coding blends creativity and AI assistance so students publish fast. 
                Our flow: <span className="text-vibe-purple font-semibold">Describe → Scaffold → Personalize → Ship</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-vibe-purple/20 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Ship something in Week 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    No prior experience needed. You'll create and publish your first project 
                    in the very first session.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-vibe-purple/20 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Use friendly tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Work with Lovable, Windsurf, Cursor, Flute, p5.js, and Replit — 
                    all designed to make coding accessible and fun.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-vibe-purple/20 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-vibe-gold rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Present your work</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Build a real portfolio and practice presenting your projects. 
                    Graduate with work you're proud to show.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 10-Week Plan Section */}  
        <section id="weeks" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                10-Week Plan
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Each week builds on the last, from your first website to demo day.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion 
                type="single" 
                collapsible 
                value={openWeek} 
                onValueChange={handleAccordionChange}
                className="space-y-4"
              >
                {weeks.map((week) => (
                  <AccordionItem 
                    key={week.id} 
                    value={week.id}
                    className="border border-border bg-card rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex flex-col items-start">
                        <h3 className="font-semibold text-lg text-vibe-purple">
                          {week.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Deliverable:</strong> {week.deliverable}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-accent">Tools: </span>
                          <span className="text-muted-foreground">{week.tools}</span>
                        </div>
                        <div>
                          <span className="font-medium text-accent">What we do: </span>
                          <span className="text-muted-foreground">{week.description}</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Syllabus (PDF)
                </Button>
                <Button variant="default" size="lg" asChild>
                  <Link to="/projects">
                    <Eye className="mr-2 h-5 w-5" />
                    See Project Examples
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tools you'll touch
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Modern, AI-powered tools that make coding creative and accessible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Card key={tool.name} className="border-vibe-purple/20 hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                        <tool.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-vibe-purple">{tool.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-amber-800 dark:text-amber-200 text-center">
                <strong>Safety note:</strong> School-appropriate content and attribution required for all projects.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section id="outcomes" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What you'll walk away with
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A real portfolio of projects you built yourself.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="h-6 w-6 text-neon-green flex-shrink-0" />
                    <span className="text-lg text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Logistics Section */}
        <section id="logistics" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Logistics
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-vibe-purple/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg text-vibe-purple mb-3">Who can join</h3>
                      <p className="text-muted-foreground mb-4">Grades 9–12, all experience levels welcome</p>
                      
                      <h3 className="font-semibold text-lg text-vibe-purple mb-3">Prerequisites</h3>
                      <p className="text-muted-foreground mb-4">None! Bring curiosity and creativity</p>
                      
                      <h3 className="font-semibold text-lg text-vibe-purple mb-3">What to bring</h3>
                      <p className="text-muted-foreground">Laptop/tablet + charger</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg text-vibe-purple mb-3">Attendance</h3>
                      <p className="text-muted-foreground mb-4">Weekly sessions build on each other — consistency helps!</p>
                      
                      <h3 className="font-semibold text-lg text-vibe-purple mb-3">Conduct & Support</h3>
                      <p className="text-muted-foreground mb-2">
                        <Link to="#" className="text-accent hover:underline">Code of Conduct (PDF)</Link>
                      </p>
                      <p className="text-muted-foreground">Accessibility support available on request</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="border border-border bg-card rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="font-semibold text-lg text-vibe-purple">
                        {faq.question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section id="join" className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start building?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join South Vibe and turn your ideas into real projects in 10 weeks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-vibe-purple hover:bg-white/90"
                onClick={() => handleCTAClick('Join the Club - Footer')}
                asChild
              >
                <Link to="/join#signup">
                  Join the Club
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
                onClick={() => handleCTAClick('Add to Calendar - Footer')}
                asChild
              >
                <Link to="/calendar">
                  <Calendar className="mr-2 h-5 w-5" />
                  Add to Calendar
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Program;