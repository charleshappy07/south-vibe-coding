import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Search, Code, Gamepad2, Palette, Wrench, BookOpen, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock project data - replace with real data later
const mockProjects = [
  {
    id: 1,
    title: "Planet Hopper Game",
    blurb: "Jump between planets in this physics-based adventure game with power-ups and scoring.",
    category: "Game",
    tools: ["p5.js", "Replit"],
    author: "Maya",
    grade: "11th",
    image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400&h=300&fit=crop",
    demoUrl: "#",
    slug: "planet-hopper-game"
  },
  {
    id: 2,
    title: "Study Scheduler",
    blurb: "Plan your homework and track study sessions with smart reminders and progress bars.",
    category: "Tool",
    tools: ["Lovable", "Windsurf"],
    author: "Alex",
    grade: "10th",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    demoUrl: "#",
    slug: "study-scheduler"
  },
  {
    id: 3,
    title: "Interactive Mood Ring",
    blurb: "Click and drag to create colorful patterns that respond to your mouse movements.",
    category: "Art",
    tools: ["p5.js", "Crusor"],
    author: "Jordan",
    grade: "12th",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
    demoUrl: "#",
    slug: "interactive-mood-ring"
  },
  {
    id: 4,
    title: "Choose Your Adventure",
    blurb: "Navigate through a mystery story where your choices determine the outcome.",
    category: "Story",
    tools: ["Twine", "Flute"],
    author: "Sam",
    grade: "9th",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    demoUrl: "#",
    slug: "choose-your-adventure"
  },
  {
    id: 5,
    title: "Portfolio Showcase",
    blurb: "Personal website featuring projects, resume, and contact information with smooth animations.",
    category: "Web",
    tools: ["Lovable", "Glitch"],
    author: "Riley",
    grade: "11th",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    demoUrl: "#",
    slug: "portfolio-showcase"
  },
  {
    id: 6,
    title: "Grade Calculator",
    blurb: "Calculate your GPA and track assignments with automatic letter grade conversion.",
    category: "Tool",
    tools: ["Windsurf", "Replit"],
    author: "Casey",
    grade: "10th",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    demoUrl: "#",
    slug: "grade-calculator"
  }
];

const categories = ["All", "Art", "Game", "Tool", "Story", "Web"];
const sortOptions = ["Newest", "Most Viewed", "A-Z"];

const categoryIcons = {
  Art: Palette,
  Game: Gamepad2,
  Tool: Wrench,
  Story: BookOpen,
  Web: Globe
};

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
  const [sortBy, setSortBy] = useState("Newest");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryFilter = (category: string) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      const newCategories = selectedCategories.includes("All") 
        ? [category]
        : selectedCategories.includes(category)
          ? selectedCategories.filter(c => c !== category)
          : [...selectedCategories.filter(c => c !== "All"), category];
      
      setSelectedCategories(newCategories.length === 0 ? ["All"] : newCategories);
    }
  };

  const filteredProjects = mockProjects.filter(project => {
    const matchesCategory = selectedCategories.includes("All") || selectedCategories.includes(project.category);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.blurb.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "A-Z":
        return a.title.localeCompare(b.title);
      case "Most Viewed":
        return b.id - a.id; // Mock sorting by ID for now
      default:
        return b.id - a.id; // Newest first
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="intro" className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Student Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See what SPHS students shipped — games, websites, art, tools, and interactive stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="#submit">Submit Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/join#signup">Join the Club</Link>
            </Button>
          </div>
        </section>

        {/* Filters */}
        <section id="filters" className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category !== "All" && categoryIcons[category as keyof typeof categoryIcons] && (
                    <span className="mr-1">
                      {React.createElement(categoryIcons[category as keyof typeof categoryIcons], { size: 14 })}
                    </span>
                  )}
                  {category}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search title or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section id="gallery" className="mb-12">
          {sortedProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                No projects yet for these filters. Clear filters or submit yours.
              </p>
              <Button asChild>
                <Link to="#submit">Submit Your Project</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProjects.map((project) => {
                const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons];
                return (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={`Screenshot of ${project.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                        {CategoryIcon && <CategoryIcon className="h-5 w-5 text-primary flex-shrink-0" />}
                      </div>
                      <CardDescription className="line-clamp-3">
                        {project.blurb}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {project.author}, {project.grade}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link to={`/projects/${project.slug}`}>Learn More</Link>
                          </Button>
                          <Button size="sm" asChild>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </section>

        {/* Submit Section */}
        <section id="submit" className="bg-secondary/20 rounded-lg p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Submit Your Project</h2>
            <p className="text-muted-foreground mb-6">
              Club members can submit finished or in-progress work.
            </p>
            <Button size="lg" asChild>
              <Link to="/join">Join to Submit Projects</Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Who can submit?</h3>
              <p className="text-muted-foreground">Current club members.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I update my project later?</h3>
              <p className="text-muted-foreground">Yes—resubmit with changes.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What if I don't have a demo link?</h3>
              <p className="text-muted-foreground">Upload a short screen recording or images.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;