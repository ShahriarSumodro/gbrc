import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Flame, Plane, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = [
    {
      icon: Wrench,
      title: "Combat Robots",
      description: "Design and build competitive fighting robots for tournaments and competitions.",
      details: "Our combat robotics team designs and fabricates robots that compete in various weight classes. We focus on weapon systems, armor design, and strategic combat tactics.",
    },
    {
      icon: Flame,
      title: "Autonomous Systems",
      description: "Develop self-navigating robots with advanced sensors and AI algorithms.",
      details: "Working on cutting-edge autonomous navigation systems using computer vision, LIDAR, and machine learning to create robots that can navigate complex environments.",
    },
    {
      icon: Plane,
      title: "Aerial Drones",
      description: "Create innovative drone systems for various applications and research.",
      details: "From racing drones to research platforms, we develop custom aerial systems for various applications including aerial photography, surveying, and autonomous delivery.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Build intelligent automation solutions for real-world problems.",
      details: "Developing IoT-enabled automation systems that solve real-world problems, from smart home solutions to industrial automation prototypes.",
    },
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
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Explore the innovative robotics projects we're working on. Each project represents our commitment to pushing the boundaries of what's possible in robotics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="border-border bg-card hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed">{project.details}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
