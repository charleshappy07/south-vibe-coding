import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin, ExternalLink, Presentation } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Calendar = () => {
  const sessions = [
    {
      date: "2024-08-27",
      dateFormatted: "Wednesday, August 27",
      week: 1,
      topic: "The Vibe of Coding",
      deliverable: "First prototype website via Lovable",
      description: "Ideate 3 ideas, generate a site, customize copy/images",
      status: "upcoming"
    },
    {
      date: "2024-09-03",
      dateFormatted: "Wednesday, September 3",
      week: 2,
      topic: "Words → Web",
      deliverable: "Personal portfolio page live",
      description: "Edit sections, add links, push live via Replit/Glitch",
      status: "upcoming"
    },
    {
      date: "2024-09-10",
      dateFormatted: "Wednesday, September 10",
      week: 3,
      topic: "Interactive Art",
      deliverable: "p5.js 'vibe sketch' reacting to mouse/keys",
      description: "Shapes, input, simple animation",
      status: "upcoming"
    },
    {
      date: "2024-09-17",
      dateFormatted: "Wednesday, September 17",
      week: 4,
      topic: "Make a Mini-Game",
      deliverable: "Playable JS mini-game with score/lives",
      description: "Game loop, collisions, scoreboard",
      status: "upcoming"
    },
    {
      date: "2024-09-24",
      dateFormatted: "Wednesday, September 24",
      week: 5,
      topic: "Story & Choices",
      deliverable: "Interactive story with branches",
      description: "Map choices, publish story via Twine or Flute",
      status: "upcoming"
    },
    {
      date: "2024-10-01",
      dateFormatted: "Wednesday, October 1",
      week: 6,
      topic: "Build a Tool",
      deliverable: "Utility app (e.g., grade calculator, planner)",
      description: "UI + logic, test with a peer",
      status: "upcoming"
    },
    {
      date: "2024-10-08",
      dateFormatted: "Wednesday, October 8",
      week: 7,
      topic: "Level Up with AI IDEs",
      deliverable: "Improved feature set & bug fixes",
      description: "'Talk to your code' to add features & debug",
      status: "upcoming"
    },
    {
      date: "2024-10-15",
      dateFormatted: "Wednesday, October 15",
      week: 8,
      topic: "Project Sprint I",
      deliverable: "Final project scaffold (your choice)",
      description: "Pitch idea, scaffold core features",
      status: "upcoming"
    },
    {
      date: "2024-10-22",
      dateFormatted: "Wednesday, October 22",
      week: 9,
      topic: "Project Sprint II",
      deliverable: "Near-final build + design polish",
      description: "UX clean-up, playtest, prep demo",
      status: "upcoming"
    },
    {
      date: "2024-10-29",
      dateFormatted: "Wednesday, October 29",
      week: 10,
      topic: "Demo Day",
      deliverable: "2–3 minute live demo + 60-sec video",
      description: "Present, celebrate, publish links",
      status: "upcoming",
      special: true
    }
  ];


  const getStatusColor = (status: string, special?: boolean) => {
    if (special) return "bg-gradient-accent text-white";
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "current": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Club Calendar
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our 10-week journey from first prototype to demo day. Every Wednesday brings new skills and projects.
          </p>
          
          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Wednesday, 3:00–4:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Room 145 (Ms. Handler's classroom), South Plantation High School</span>
            </div>
          </div>

          <Button size="lg" asChild>
            <a 
              href="https://calendar.google.com/calendar/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <CalendarIcon className="h-5 w-5" />
              Add to Google Calendar
            </a>
          </Button>
        </section>

        {/* Weekly Sessions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weekly Sessions</h2>
          <div className="space-y-4">
            {sessions.map((session, index) => (
              <Card key={index} className={`${session.special ? 'ring-2 ring-primary' : ''} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-3">
                        <Badge className={getStatusColor(session.status, session.special)}>
                          Week {session.week}
                        </Badge>
                        {session.topic}
                        {session.special && <Presentation className="h-5 w-5 text-primary" />}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        {session.dateFormatted}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Deliverable:</h4>
                      <p className="text-muted-foreground">{session.deliverable}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">What we do:</h4>
                      <p className="text-muted-foreground">{session.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        {/* Important Dates Summary */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">First Meeting</h3>
              <p className="text-muted-foreground">Wednesday, August 27</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mid-Semester Check</h3>
              <p className="text-muted-foreground">Wednesday, September 24</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Demo Day</h3>
              <p className="text-muted-foreground">Wednesday, October 29</p>
            </div>
          </div>
          <div className="mt-6">
            <Button asChild>
              <a href="/join#signup">Join the Club</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;