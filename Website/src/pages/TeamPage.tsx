import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TeamPage = () => {
  const teamMembers = [
    { name: "Alex Chen", role: "Team Lead", expertise: "Mechanical Design" },
    { name: "Sarah Johnson", role: "Software Lead", expertise: "AI & Autonomy" },
    { name: "Marcus Rodriguez", role: "Electronics Lead", expertise: "Circuit Design" },
    { name: "Emily Zhang", role: "Project Manager", expertise: "Operations" },
    { name: "David Kim", role: "Mechanical Engineer", expertise: "CAD & Fabrication" },
    { name: "Lisa Patel", role: "Software Engineer", expertise: "Computer Vision" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Meet the talented individuals who make our robotics vision a reality. Our diverse team brings together expertise from multiple disciplines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamPage;
