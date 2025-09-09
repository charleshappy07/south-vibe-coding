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
                {hasVoted ? (
                  <Card className="text-center p-8">
                    <CardHeader>
                      <CardTitle className="text-2xl text-green-600">Thank You!</CardTitle>
                      <CardDescription>
                        Your vote has been recorded successfully. Check the Results tab to see live updates.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ) : (
                  <>
                    <div className="grid gap-4">
                      {candidates.map((candidate) => (
                        <Card 
                          key={candidate.id}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            selectedCandidate === candidate.id ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setSelectedCandidate(candidate.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <img 
                                src={candidate.image} 
                                alt={candidate.name}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="text-xl font-semibold">{candidate.name}</h3>
                                  <Badge variant="secondary">{candidate.position}</Badge>
                                </div>
                                <p className="text-muted-foreground">{candidate.bio}</p>
                              </div>
                              <div className="flex items-center">
                                <input 
                                  type="radio" 
                                  name="candidate" 
                                  checked={selectedCandidate === candidate.id}
                                  onChange={() => setSelectedCandidate(candidate.id)}
                                  className="w-4 h-4"
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        onClick={handleVote}
                        disabled={!selectedCandidate}
                        size="lg"
                        className="px-8"
                      >
                        Cast Your Vote
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Live Results</CardTitle>
                  <CardDescription>
                    Results update in real-time as votes are cast
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {candidates.map((candidate) => (
                      <div key={candidate.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img 
                            src={candidate.image} 
                            alt={candidate.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <span className="font-medium">{candidate.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-secondary rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: '0%' }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-12">0 votes</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t text-center text-muted-foreground">
                    Total votes cast: 0
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vote;