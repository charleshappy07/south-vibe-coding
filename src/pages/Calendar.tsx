import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin, ExternalLink, Users, Code, Presentation } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Calendar = () => {
  const sessions = [
    {
      date: "2024-09-05",
      dateFormatted: "Thursday, September 5",
      week: 1,
      topic: "The Vibe of Coding",
      deliverable: "First prototype website via Lovable",
      description: "Ideate 3 ideas, generate a site, customize copy/images",
      status: "upcoming"
    },
    {
      date: "2024-09-12",
      dateFormatted: "Thursday, September 12",
      week: 2,
      topic: "Words → Web",
      deliverable: "Personal portfolio page live",
      description: "Edit sections, add links, push live via Replit/Glitch",
      status: "upcoming"
    },
    {
      date: "2024-09-19",
      dateFormatted: "Thursday, September 19",
      week: 3,
      topic: "Interactive Art",
      deliverable: "p5.js 'vibe sketch' reacting to mouse/keys",
      description: "Shapes, input, simple animation",
      status: "upcoming"
    },
    {
      date: "2024-09-26",
      dateFormatted: "Thursday, September 26",
      week: 4,
      topic: "Make a Mini-Game",
      deliverable: "Playable JS mini-game with score/lives",
      description: "Game loop, collisions, scoreboard",
      status: "upcoming"
    },
    {
      date: "2024-10-03",
      dateFormatted: "Thursday, October 3",
      week: 5,
      topic: "Story & Choices",
      deliverable: "Interactive story with branches",
      description: "Map choices, publish story via Twine or Flute",
      status: "upcoming"
    },
    {
      date: "2024-10-10",
      dateFormatted: "Thursday, October 10",
      week: 6,
      topic: "Build a Tool",
      deliverable: "Utility app (e.g., grade calculator, planner)",
      description: "UI + logic, test with a peer",
      status: "upcoming"
    },
    {
      date: "2024-10-17",
      dateFormatted: "Thursday, October 17",
      week: 7,
      topic: "Level Up with AI IDEs",
      deliverable: "Improved feature set & bug fixes",
      description: "'Talk to your code' to add features & debug",
      status: "upcoming"
    },
    {
      date: "2024-10-24",
      dateFormatted: "Thursday, October 24",
      week: 8,
      topic: "Project Sprint I",
      deliverable: "Final project scaffold (your choice)",
      description: "Pitch idea, scaffold core features",
      status: "upcoming"
    },
    {
      date: "2024-10-31",
      dateFormatted: "Thursday, October 31",
      week: 9,
      topic: "Project Sprint II",
      deliverable: "Near-final build + design polish",
      description: "UX clean-up, playtest, prep demo",
      status: "upcoming"
    },
    {
      date: "2024-11-07",
      dateFormatted: "Thursday, November 7",
      week: 10,
      topic: "Demo Day",
      deliverable: "2–3 minute live demo + 60-sec video",
      description: "Present, celebrate, publish links",
      status: "upcoming",
      special: true
    }
  ];

  const specialEvents = [
    {
      date: "2024-09-28",
      dateFormatted: "Saturday, September 28",
      title: "Local Hackathon Field Trip",
      description: "Optional weekend event to see coding in action",
      type: "Field Trip"
    },
    {
      date: "2024-10-15",
      dateFormatted: "Tuesday, October 15",
      title: "Guest Speaker: UX Designer",
      description: "Industry professional shares design insights",
      type: "Guest Speaker"
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
            Our 10-week journey from first prototype to demo day. Every Thursday brings new skills and projects.
          </p>
          
          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Wednesdays, 3:00–4:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Room TBD, South Plantation High School</span>
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

        {/* Special Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            Special Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {event.title}
                    <Badge variant="outline">{event.type}</Badge>
                  </CardTitle>
                  <CardDescription>{event.dateFormatted}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Office Hours */}
        <section className="mb-12">
          <Card className="bg-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Office Hours
              </CardTitle>
              <CardDescription>
                Need extra help? Drop by for one-on-one coding support.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>When:</strong> Tuesdays, 3:00–3:30 PM</p>
                <p><strong>Where:</strong> Room TBD (same as club meetings)</p>
                <p><strong>What to bring:</strong> Your project, questions, and device</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Dates Summary */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">First Meeting</h3>
              <p className="text-muted-foreground">Thursday, September 5</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mid-Semester Check</h3>
              <p className="text-muted-foreground">Thursday, October 3</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Demo Day</h3>
              <p className="text-muted-foreground">Thursday, November 7</p>
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