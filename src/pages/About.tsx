import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Code, Lightbulb, Mail, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const studentLeaders = [
    {
      name: "Maya",
      role: "Club President",
      grade: "12th",
      bio: "Started coding in 10th grade, loves creating interactive art and mentoring new members.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Alex",
      role: "Project Coordinator", 
      grade: "11th",
      bio: "Passionate about building tools that solve real problems. Organizes our demo days.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Jordan",
      role: "Community Manager",
      grade: "11th", 
      bio: "Keeps our online spaces welcoming and helps new members get started.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const communityPartners = [
    {
      name: "Local Tech Co.",
      description: "Provides guest speakers and internship opportunities",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop"
    },
    {
      name: "Code Academy",
      description: "Donates premium learning resources",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            About South Vibe
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where creativity meets code. We're building a community where every student can create with their words.
          </p>
        </section>

        {/* What is Vibe Coding */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">What is Vibe Coding?</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-secondary/20">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Vibe Coding started with a simple idea: <strong>what if students could create with their words?</strong> 
                  Instead of getting stuck in syntax and setup, we use AI-powered tools to turn ideas into reality fast.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our approach is unique — we blend creativity with technology, focusing on shipping real projects 
                  from day one. Students don't just learn to code; they learn to create, collaborate, and communicate their ideas.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Lightbulb className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-medium">Describe</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Code className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-medium">Scaffold</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Heart className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-medium">Personalize</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ExternalLink className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-medium">Ship</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who We Are */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
          
          {/* Student Leaders */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Student Leaders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {studentLeaders.map((leader, index) => (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-3">
                      <AvatarImage src={leader.avatar} alt={leader.name} />
                      <AvatarFallback>{leader.name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{leader.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary">{leader.role}</Badge>
                      <span className="ml-2 text-muted-foreground">{leader.grade} Grade</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Advisor */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Faculty Advisor</h3>
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Ms. Johnson</CardTitle>
                <CardDescription>Computer Science Teacher</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Passionate about making technology accessible to all students. 
                  10+ years teaching experience.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:advisor@sphs.edu" className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    advisor@sphs.edu
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Equity & Inclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Equity & Inclusion</h2>
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200">
                  Everyone Belongs Here
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-700 dark:text-blue-300">
                <div>
                  <h4 className="font-semibold mb-2">Open to All</h4>
                  <ul className="text-sm space-y-1">
                    <li>• No prior experience required</li>
                    <li>• All skill levels welcome</li>
                    <li>• Free for all SPHS students</li>
                    <li>• Device lending available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Accessibility Support</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Screen reader compatibility</li>
                    <li>• Alternative input methods</li>
                    <li>• Flexible participation options</li>
                    <li>• Accommodations on request</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Community Partners */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Community Partners</h2>
          <p className="text-center text-muted-foreground mb-6">
            Local organizations that support our mission of making coding accessible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityPartners.map((partner, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={partner.logo} alt={partner.name} />
                    <AvatarFallback>{partner.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{partner.name}</CardTitle>
                    <CardDescription>{partner.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Press & Partnerships */}
        <section className="mb-12">
          <Card className="bg-secondary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Interested in Partnering?</CardTitle>
              <CardDescription className="text-lg">
                We're always looking for ways to expand opportunities for our students.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Sponsor the Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Support our mission with equipment, software licenses, or event funding.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Guest Speaking</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your expertise and inspire the next generation of creators.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Host a Workshop</h3>
                  <p className="text-sm text-muted-foreground">
                    Lead a hands-on session on design, development, or entrepreneurship.
                  </p>
                </div>
              </div>
              <Button asChild>
                <a href="mailto:advisor@sphs.edu" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-muted-foreground mb-6">
            Be part of something bigger — where your ideas become reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/join#signup">Join the Club</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/projects">See What We Build</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;