import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Sparkles, 
  Zap, 
  Gamepad2, 
  Share, 
  MessageSquare, 
  Layers, 
  Play, 
  Rocket,
  Palette,
  Joystick,
  Calculator,
  Heart,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Phone,
  Mail,
  FileText
} from "lucide-react";

const Vibe = () => {
  const [demoInput, setDemoInput] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("portfolio");
  const [colorIntensity, setColorIntensity] = useState([70]);
  const [motionLevel, setMotionLevel] = useState([50]);
  const [previewText, setPreviewText] = useState("");

  const templates = {
    portfolio: {
      title: "Personal Portfolio Site",
      features: ["Responsive design", "Project galleries", "Contact forms"],
      thumbnail: "🎨",
      howItStarts: "Clean layout with your name and intro section",
      personalize: ["Choose color schemes and fonts", "Add your own projects and images"]
    },
    clicker: {
      title: "Interactive Clicker Game",
      features: ["Score tracking", "Power-ups", "Animations"],
      thumbnail: "🎮",
      howItStarts: "Simple click-to-earn points mechanic",
      personalize: ["Design custom characters", "Create unique power-up systems"]
    },
    mood: {
      title: "Mood Art Generator",
      features: ["Color palettes", "Dynamic visuals", "Mood tracking"],
      thumbnail: "🌈",
      howItStarts: "Color-based mood visualization system",
      personalize: ["Add music integration", "Create custom mood categories"]
    },
    calculator: {
      title: "Grade Calculator Tool",
      features: ["Assignment tracking", "GPA calculation", "Progress charts"],
      thumbnail: "📊",
      howItStarts: "Basic input form for grades and weights",
      personalize: ["Add semester planning", "Create visual progress reports"]
    }
  };

  const suggestions = [
    { text: "Portfolio", key: "portfolio" },
    { text: "Clicker Game", key: "clicker" },
    { text: "Mood Art", key: "mood" },
    { text: "Grade Calculator", key: "calculator" }
  ];

  const exampleTabs = {
    art: [
      { name: "Generative Patterns", description: "Math-based visual art", tools: ["p5.js", "Canvas API"] },
      { name: "Mood Color Wheel", description: "Emotional color mapping", tools: ["React", "CSS Animations"] }
    ],
    game: [
      { name: "Space Clicker", description: "Incremental space exploration", tools: ["JavaScript", "LocalStorage"] },
      { name: "Word Chain", description: "Collaborative storytelling game", tools: ["React", "Supabase"] }
    ],
    tool: [
      { name: "Study Timer", description: "Pomodoro with music integration", tools: ["React", "Web Audio API"] },
      { name: "Schedule Optimizer", description: "AI-powered class planning", tools: ["Python", "OpenAI API"] }
    ],
    story: [
      { name: "Interactive Fiction", description: "Choose-your-own adventure", tools: ["Twine", "JavaScript"] },
      { name: "Digital Zine", description: "Multimedia storytelling", tools: ["React", "Framer Motion"] }
    ]
  };

  useEffect(() => {
    const lowerInput = demoInput.toLowerCase();
    if (lowerInput.includes("portfolio") || lowerInput.includes("personal")) {
      setSelectedTemplate("portfolio");
    } else if (lowerInput.includes("game") || lowerInput.includes("click")) {
      setSelectedTemplate("clicker");
    } else if (lowerInput.includes("mood") || lowerInput.includes("art")) {
      setSelectedTemplate("mood");
    } else if (lowerInput.includes("grade") || lowerInput.includes("calculator")) {
      setSelectedTemplate("calculator");
    }
  }, [demoInput]);

  const getPreviewStyle = () => {
    const intensity = colorIntensity[0];
    const motion = motionLevel[0];
    
    return {
      backgroundColor: `hsl(${selectedTemplate === 'portfolio' ? '240' : selectedTemplate === 'clicker' ? '120' : selectedTemplate === 'mood' ? '300' : '200'}, ${intensity}%, 95%)`,
      borderColor: `hsl(${selectedTemplate === 'portfolio' ? '240' : selectedTemplate === 'clicker' ? '120' : selectedTemplate === 'mood' ? '300' : '200'}, ${intensity}%, 70%)`,
      animation: motion > 50 ? `pulse ${3 - (motion/50)}s infinite` : 'none'
    };
  };

  const handleAnalyticsEvent = (event: string, data?: any) => {
    // Analytics placeholder - in real app would integrate with analytics service
    console.log('Analytics:', event, data);
  };

  useEffect(() => {
    handleAnalyticsEvent('vibe_view');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            What is Vibe Coding?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Make things with your words — then shape them into games, websites, and tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild onClick={() => handleAnalyticsEvent('cta_click', 'Try a Starter')}>
              <Link to="/resources#starters">
                Try a Starter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild onClick={() => handleAnalyticsEvent('cta_click', 'Join the Club')}>
              <Link to="/join#signup">
                Join the Club
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            Describe → Scaffold → Personalize → Ship
          </p>
        </div>
      </section>

      {/* What It Is Section */}
      <section id="what-is" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Vibe Coding blends creativity with AI-assisted scaffolding so beginners get wins fast and advanced students iterate deeper. 
              It's about expressing ideas through code, not fighting syntax.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <MessageSquare className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Express</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Start with words, not code</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Layers className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Prototype</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Generate working foundations</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Play className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Play</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Explore and experiment freely</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Rocket className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Ship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Share your creation with the world</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="space-y-8">
            {[
              { 
                step: 1, 
                title: "Describe", 
                description: "Write what you want to build in plain English",
                icon: MessageSquare
              },
              { 
                step: 2, 
                title: "Scaffold", 
                description: "AI generates a working starting point for your idea",
                icon: Layers
              },
              { 
                step: 3, 
                title: "Personalize", 
                description: "Tweak visuals, logic, and copy to make it yours",
                icon: Palette
              },
              { 
                step: 4, 
                title: "Ship", 
                description: "Publish and share your creation with others",
                icon: Share
              }
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.description}</p>
                  <button 
                    onClick={() => {
                      const examplesSection = document.getElementById('examples');
                      if (examplesSection) {
                        examplesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-sm text-primary hover:underline"
                  >
                    See an example →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="live-demo" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Try It Yourself</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="demo-input">
                Type a goal (e.g., 'a site that shows my favorite songs by mood')
              </label>
              <Input
                id="demo-input"
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                placeholder="Describe what you want to build..."
                className="text-lg p-4"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <Button
                  key={suggestion.key}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setDemoInput(suggestion.text);
                    setSelectedTemplate(suggestion.key);
                  }}
                >
                  {suggestion.text}
                </Button>
              ))}
            </div>
            
            <Button 
              className="w-full"
              onClick={() => {
                setPreviewText(`Generating ${templates[selectedTemplate as keyof typeof templates].title}...`);
                handleAnalyticsEvent('live_demo_generate', selectedTemplate);
                setTimeout(() => setPreviewText(""), 2000);
              }}
            >
              Generate Preview
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
            
            <Card className="p-6" style={getPreviewStyle()}>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{templates[selectedTemplate as keyof typeof templates].thumbnail}</div>
                <h3 className="text-xl font-semibold">{templates[selectedTemplate as keyof typeof templates].title}</h3>
              </div>
              
              <div className="space-y-2 mb-4">
                {templates[selectedTemplate as keyof typeof templates].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 text-sm">
                <p><strong>How this starts:</strong> {templates[selectedTemplate as keyof typeof templates].howItStarts}</p>
                <div>
                  <strong>How you can personalize it:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {templates[selectedTemplate as keyof typeof templates].personalize.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {previewText && (
                <div className="mt-4 p-2 bg-background/80 rounded text-center text-sm font-medium" aria-live="polite">
                  {previewText}
                </div>
              )}
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Color Intensity: {colorIntensity[0]}%
                </label>
                <Slider
                  value={colorIntensity}
                  onValueChange={setColorIntensity}
                  max={100}
                  step={10}
                  className="w-full"
                  aria-label={`Color intensity: ${colorIntensity[0]} percent`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Motion Level: {motionLevel[0]}%
                </label>
                <Slider
                  value={motionLevel}
                  onValueChange={setMotionLevel}
                  max={100}
                  step={10}
                  className="w-full"
                  aria-label={`Motion level: ${motionLevel[0]} percent`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Student Examples</h2>
          
          <Tabs defaultValue="art" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger 
                value="art" 
                onClick={() => handleAnalyticsEvent('example_tab_select', 'Art')}
              >
                Art
              </TabsTrigger>
              <TabsTrigger 
                value="game"
                onClick={() => handleAnalyticsEvent('example_tab_select', 'Game')}
              >
                Game
              </TabsTrigger>
              <TabsTrigger 
                value="tool"
                onClick={() => handleAnalyticsEvent('example_tab_select', 'Tool')}
              >
                Tool
              </TabsTrigger>
              <TabsTrigger 
                value="story"
                onClick={() => handleAnalyticsEvent('example_tab_select', 'Story')}
              >
                Story
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(exampleTabs).map(([key, examples]) => (
              <TabsContent key={key} value={key} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {examples.map((example, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{example.name}</CardTitle>
                        <CardDescription>{example.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {example.tools.map((tool) => (
                            <Badge key={tool} variant="secondary" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              View how it's built
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{example.name}</DialogTitle>
                              <DialogDescription>{example.description}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">1</div>
                                <span>Student describes their vision</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">2</div>
                                <span>AI generates initial structure</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">3</div>
                                <span>Student customizes and enhances</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">4</div>
                                <span>Project gets deployed and shared</span>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/projects">
                See real student work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Principles Section */}
      <section id="ai-principles" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How we use AI responsibly</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>We credit sources and respect intellectual property</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All content is reviewed for school-appropriate standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Students learn to review and verify AI outputs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>We respect open source licenses and attribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Accessibility and inclusive design are prioritized</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-16 w-16 mx-auto text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Code of Conduct</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Read our complete guidelines for responsible AI use in education
                  </p>
                  <Button variant="outline" size="sm">
                    Download PDF
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Build</h2>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">By the end of the program:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "2+ published websites",
                "1 interactive game",
                "1 digital art piece",
                "1 useful tool/app",
                "Final project with 60-second demo",
                "Personal portfolio page"
              ].map((outcome, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/program#weeks">
                  See the 10-week plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Questions</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I need coding experience?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No experience required! We start with expressing ideas in plain language, 
                  then gradually introduce coding concepts as you build.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Will I write real code?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. AI helps generate starting points and suggests improvements, 
                  but you're the one steering the project and making it yours.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I bring my own project idea?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Please do! While we provide prompts and starters, the most exciting 
                  projects come from your own interests and passions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section id="join" className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start building?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join a community where creativity meets technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild onClick={() => handleAnalyticsEvent('cta_click', 'Join the Club')}>
              <Link to="/join#signup">
                Join the Club
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild onClick={() => handleAnalyticsEvent('cta_click', 'Try a Starter')}>
              <Link to="/resources#starters">
                Try a Starter
                <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vibe;