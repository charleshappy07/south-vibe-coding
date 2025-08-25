import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Mail, Users, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      id: "experience",
      question: "Do I need coding experience to join?",
      answer: "Not at all! We welcome complete beginners. Our approach focuses on creating with your words first, then understanding the code behind it. You'll be building projects from Week 1, regardless of your starting point."
    },
    {
      id: "advanced",
      question: "What if I'm already advanced in coding?",
      answer: "Advanced students can take leadership roles, mentor newer members, and dive deeper into AI IDE features like Windsurf and Crusor. You can also tackle more complex final projects and explore advanced topics during office hours."
    },
    {
      id: "device",
      question: "What do I need to bring?",
      answer: "Just bring a laptop or school-issued device, charger, and headphones. Chromebooks work fine for most activities. If you don't have access to a device, let us know during sign-up and we can help arrange one."
    },
    {
      id: "homework",
      question: "Is there homework or work outside meetings?",
      answer: "There's no required homework. Students sometimes choose to polish projects they're excited about, but everything can be completed during our weekly hour-long sessions. We believe in making progress together, not adding stress to your schedule."
    },
    {
      id: "joining-late",
      question: "Can I join mid-semester?",
      answer: "Yes, if space permits! Our project-based approach makes it easy to catch up. New members can jump into the current week's activity and build their portfolio from there. Contact us to join our waitlist if the club is full."
    },
    {
      id: "college",
      question: "Does this help with college applications?",
      answer: "Absolutely! You'll build a portfolio of real projects (websites, games, apps) that you can showcase. The presentation practice, collaboration experience, and problem-solving skills are all valuable for college interviews and essays."
    },
    {
      id: "safety",
      question: "Is the club safe and supervised?",
      answer: "Yes. We have a faculty advisor present at all meetings, follow school device and network policies, and maintain moderated online spaces. All shared content is reviewed, and we have zero tolerance for harassment or inappropriate behavior."
    },
    {
      id: "cost",
      question: "How much does it cost?",
      answer: "The club is completely free for all SPHS students. All tools we use have free tiers or educational access. If you need a device, we can help arrange lending through the school."
    },
    {
      id: "time-commitment",
      question: "What's the time commitment?",
      answer: "Just one hour per week during our Thursday meetings (3:00-4:00 PM). Optional office hours are available Tuesdays for extra help. We respect your time and other commitments!"
    },
    {
      id: "final-project",
      question: "What if I can't think of a final project idea?",
      answer: "Don't worry! By Week 8, you'll have built websites, games, art, and tools. Your final project can be an expanded version of something you loved, a combination of different techniques, or something completely new. We'll help you brainstorm."
    },
    {
      id: "presentation",
      question: "Do I have to present my work?",
      answer: "We encourage presentations because they're great practice, but we understand not everyone is comfortable. You can do a screen-recording demo, present with a partner, or share in small groups instead of the full club."
    },
    {
      id: "tools-at-home",
      question: "Can I use these tools at home?",
      answer: "Yes! All the tools we use (Lovable, Windsurf, Crusor, p5.js, Replit, etc.) are available for personal use. Many have free plans that are perfect for learning and personal projects."
    }
  ];

  const quickAnswers = [
    {
      question: "When do you meet?",
      answer: "Wednesdays, 3:00-4:00 PM",
      icon: Clock
    },
    {
      question: "Who can join?",
      answer: "Grades 9-12, all skill levels",
      icon: Users
    },
    {
      question: "How much does it cost?",
      answer: "Free for all SPHS students",
      icon: HelpCircle
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about joining and participating.
          </p>
        </section>

        {/* Quick Answers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickAnswers.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary font-semibold">{item.answer}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Detailed FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Detailed Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Categories for Parents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">For Parents & Guardians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Safety & Supervision</CardTitle>
                <CardDescription>Learn about our safety measures and supervision</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Faculty advisor present at all meetings</li>
                  <li>• School device and network policies enforced</li>
                  <li>• Content moderation for shared projects</li>
                  <li>• Zero tolerance for harassment</li>
                </ul>
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <Link to="/parents">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills & Outcomes</CardTitle>
                <CardDescription>What your student will learn and create</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Portfolio of real projects</li>
                  <li>• Presentation and collaboration skills</li>
                  <li>• Problem-solving and creativity</li>
                  <li>• Digital literacy and responsibility</li>
                </ul>
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <Link to="/parents">Parent Info</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="mailto:advisor@sphs.edu" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Our Advisor
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Form</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            We typically respond within 24 hours during school days.
          </p>
        </section>

        {/* Ready to Join */}
        <section className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Questions answered? Let's start building together!
          </p>
          <Button size="lg" asChild>
            <Link to="/join#signup">Join the Club</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;