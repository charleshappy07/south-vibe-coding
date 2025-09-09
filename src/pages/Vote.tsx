import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Vote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const candidates = [
    {
      id: "1",
      name: "Sarah Johnson",
      position: "Vice President",
      bio: "Computer Science major with experience in student government and tech leadership.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      votes: 0
    },
    {
      id: "2", 
      name: "Mike Chen",
      position: "Vice President",
      bio: "Business student focused on improving campus resources and student engagement.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      votes: 0
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      position: "Vice President", 
      bio: "Engineering student passionate about sustainability and innovation on campus.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      votes: 0
    }
  ];

  const handleVote = () => {
    if (selectedCandidate) {
      setHasVoted(true);
      // Here you would typically send the vote to your backend
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Student Government Election</h1>
            <p className="text-muted-foreground text-lg">
              Vote for your next Vice President
            </p>
          </div>

          <Tabs defaultValue="vote" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vote" className="flex items-center gap-2">
                <Users size={16} />
                Vote
              </TabsTrigger>
              <TabsTrigger value="results" className="flex items-center gap-2">
                <TrendingUp size={16} />
                Results
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vote" className="mt-8">
              <div className="space-y-6">
                <Card className="text-center p-8">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold mb-4">Vote for Vice President</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      Help shape the future of our club! Cast your vote to choose our Vice President, the person who will support leadership, organize events, and represent student voices. Every vote counts—make sure your voice is heard.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Button 
                      asChild
                      size="lg"
                      className="px-8 py-3 text-lg"
                    >
                      <a 
                        href="https://vote.electionrunner.com/election/A6epK" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Vote Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-8">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Results will be available after the voting period ends.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vote;