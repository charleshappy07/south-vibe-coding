import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Laptop, Calendar, Mail, MapPin, Clock, FileText, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Parents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            For Parents & Guardians
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everything you need to know about South Vibe Coding Club — safety, outcomes, and how to support your student.
          </p>
        </section>

        {/* Why This Club Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why This Club Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  21st Century Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Confidence:</strong> Students ship real projects they can show off</li>
                  <li><strong>Creativity:</strong> Technology becomes a tool for self-expression</li>
                  <li><strong>Communication:</strong> Regular presentations build speaking skills</li>
                  <li><strong>Collaboration:</strong> Peer feedback and team projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  College & Career Ready
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Portfolio:</strong> Real projects for college applications</li>
                  <li><strong>Digital Literacy:</strong> Understanding how technology works</li>
                  <li><strong>Problem Solving:</strong> Breaking down complex challenges</li>
                  <li><strong>Growth Mindset:</strong> Learning from failures and iterations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety & Supervision */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            Safety & Supervision
          </h2>
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">
              Your Student's Safety is Our Priority
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-700 dark:text-green-300">
              <div>
                <h4 className="font-semibold mb-2">Adult Supervision</h4>
                <ul className="text-sm space-y-1">
                  <li>• Faculty advisor present at all meetings</li>
                  <li>• Clear check-in/check-out procedures</li>
                  <li>• Emergency contact procedures in place</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Digital Safety</h4>
                <ul className="text-sm space-y-1">
                  <li>• School device and network policies enforced</li>
                  <li>• Content moderation for all shared projects</li>
                  <li>• Privacy protection in online spaces</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• All projects must be school-appropriate</li>
                  <li>• No personal information shared publicly</li>
                  <li>• Respect for intellectual property and attribution</li>
                  <li>• Zero tolerance for harassment or bullying</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Photo & Video Permissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  We may take photos/videos for:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Club promotional materials</li>
                  <li>• School website and social media</li>
                  <li>• Demo day documentation</li>
                </ul>
                <p className="text-sm mt-3 font-medium">
                  Permission is requested during sign-up and can be revoked anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Students Need */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Laptop className="h-8 w-8 text-primary" />
            What Students Need
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Device</h3>
                  <p className="text-muted-foreground text-sm">
                    Laptop or school-issued device with internet access. 
                    Chromebooks work fine for most activities.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Curiosity</h3>
                  <p className="text-muted-foreground text-sm">
                    No prior coding experience required. 
                    Just bring an open mind and willingness to experiment.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Commitment</h3>
                  <p className="text-muted-foreground text-sm">
                    Regular attendance helps build skills progressively. 
                    Each week builds on the last.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Progress & Outcomes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Eye className="h-8 w-8 text-primary" />
            Progress & Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How You'll Stay Informed</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Monthly email updates with project highlights</li>
                  <li>• Mid-semester progress check-in</li>
                  <li>• Demo Day invitation (Week 10)</li>
                  <li>• Digital portfolio sharing at semester end</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Students Will Create</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 2+ published websites</li>
                  <li>• 1 interactive art piece</li>
                  <li>• 1 mini-game</li>
                  <li>• 1 utility app/tool</li>
                  <li>• 1 final project of their choice</li>
                  <li>• 60-second demo video</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs for Parents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Will this help with college applications?</h3>
              <p className="text-muted-foreground">
                Absolutely! Students build a portfolio of real projects they can showcase. 
                The presentation skills and collaborative experience are valuable for interviews and essays.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What if my student is already advanced in coding?</h3>
              <p className="text-muted-foreground">
                Advanced students can lead teams, explore deeper AI IDE features, and tackle more complex final projects. 
                We encourage peer mentoring and leadership opportunities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Is there homework or work outside of meetings?</h3>
              <p className="text-muted-foreground">
                Minimal. Students may choose to polish projects they're excited about, but there's no required homework. 
                Everything can be completed during club time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What if my student needs accessibility accommodations?</h3>
              <p className="text-muted-foreground">
                We're committed to inclusion. Please contact us to discuss specific needs — 
                we can provide alternative input methods, screen readers, or other supports.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can my student join mid-semester?</h3>
              <p className="text-muted-foreground">
                Yes, if space permits. New members can catch up quickly since we focus on creation over theory. 
                Contact us to join our waitlist.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
          <p className="text-muted-foreground mb-6">
            We're here to support your student's learning journey. Don't hesitate to reach out.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold mb-1">Email</h3>
              <a href="mailto:advisor@sphs.edu" className="text-primary hover:underline">
                advisor@sphs.edu
              </a>
              <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground">Room TBD</p>
              <p className="text-muted-foreground">South Plantation High School</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold mb-1">Meeting Time</h3>
              <p className="text-muted-foreground">Wednesdays</p>
              <p className="text-muted-foreground">3:00–4:00 PM</p>
            </div>
          </div>

          <Button asChild>
            <a href="/join#signup">Sign Up Your Student</a>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Parents;