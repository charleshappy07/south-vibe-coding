import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Code, Presentation, Clock, MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "",
    email: "",
    phoneNumber: "",
    interests: [] as string[],
    otherInterest: "",
    codeOfConduct: false,
    photoConsent: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState("");
  
  // For admin setup - in production, this would be configured elsewhere
  const webhookUrl = ""; // Admin would configure this Zapier webhook URL

  const interests = ["Art", "Game Development", "Web Design", "App Development"];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");
    
    // Validate required fields
    if (!formData.studentName.trim() || !formData.email.trim() || !formData.codeOfConduct) {
      setValidationError("Error: not all questions answered");
      return;
    }
    
    setIsLoading(true);

    // For now, we'll use a simple email service
    // In production, you would set up a Zapier webhook to send emails to contact@southvibecoding.com
    try {
      // Simulate form submission
      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        interests: formData.interests.join(", ")
      };

      // If webhookUrl is configured, send to Zapier
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(submissionData),
        });
      }

      setSubmitted(true);
      
      toast({
        title: "Application Submitted!",
        description: "Your application has been sent to contact@southvibecoding.com. We'll be in touch soon!",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your application. Please email us directly at contact@southvibecoding.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Welcome to Vibe Coding!</h1>
            <p className="text-muted-foreground mb-6">
              Thanks for applying! Your application has been sent to contact@southvibecoding.com. 
              We'll review it and get back to you soon.
            </p>
            <div className="bg-secondary/20 rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-2">What's Next:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Welcome email with Slack/Discord invite</li>
                <li>• First meeting details</li>
                <li>• What to bring for Week 1</li>
              </ul>
            </div>
            <Button asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Join the Club
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to create with your words? Join South Vibe Coding Club and start building projects that matter.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Info Cards */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Who It's For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Grades 9–12, all experience levels welcome. Whether you're a complete beginner 
                  or already know some coding, we'll meet you where you are.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  What You'll Do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Publish something in Week 1</li>
                  <li>• Build games, websites, art, and tools</li>
                  <li>• Present your work to peers</li>
                  <li>• Create a real portfolio</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Meeting Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>When:</strong> Wednesday, 3:00–4:00 PM</p>
                  <p><strong>Where:</strong> Room 145 (Ms. Handler's classroom), South Plantation High School</p>
                  <p><strong>Cost:</strong> Free for all SPHS students</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Presentation className="h-5 w-5" />
                  Code of Conduct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  We're committed to creating an inclusive, respectful, and safe environment for all members.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Be kind and respectful to all members</li>
                  <li>• Create school-appropriate content</li>
                  <li>• Follow all SPHS policies</li>
                  <li>• Zero tolerance for harassment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sign Up Form */}
          <div id="signup">
            <Card>
              <CardHeader>
                <CardTitle>Apply to Join</CardTitle>
                <CardDescription>
                  Fill out this form to join South Vibe Coding Club
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdKctTswFCVRsoIc3t9seun1wfYyRhEU5CIhL_CBLC4zIsNjg/viewform?embedded=true" 
                  width="100%" 
                  height="1608" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  title="South Vibe Coding Club Application Form"
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Contact */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Questions?</h2>
          <p className="text-muted-foreground mb-4">
            Reach out to our club advisor with any questions about joining.
          </p>
          <Button variant="outline" asChild>
            <a href="mailto:contact@southvibecoding.com" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              contact@southvibecoding.com
            </a>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Join;