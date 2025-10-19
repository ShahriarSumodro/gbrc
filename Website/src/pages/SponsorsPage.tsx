import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SponsorsPage = () => {
  const sponsors = [
    { name: "Tech Corp", tier: "Platinum", contribution: "Major funding support" },
    { name: "Engineering Solutions", tier: "Gold", contribution: "Equipment and materials" },
    { name: "Innovation Labs", tier: "Gold", contribution: "Workshop space" },
    { name: "Robotics Supply Co", tier: "Silver", contribution: "Component discounts" },
    { name: "Software Systems Inc", tier: "Silver", contribution: "Software licenses" },
    { name: "Manufacturing Partners", tier: "Bronze", contribution: "Fabrication support" },
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
            Our Sponsors
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            We're grateful for the support of our sponsors who make our projects possible. Their contributions help us push the boundaries of robotics innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {sponsor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-center">{sponsor.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-primary font-semibold mb-2">{sponsor.tier} Sponsor</p>
                  <p className="text-muted-foreground text-sm">{sponsor.contribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Become a Sponsor</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in supporting our team? Contact us to learn about sponsorship opportunities and how your organization can help shape the future of robotics.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SponsorsPage;
