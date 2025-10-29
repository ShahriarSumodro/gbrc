import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Wrench, Flame, Plane, Zap, Trophy, TrophyIcon, CircuitBoard, Cpu, Workflow } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const projects = [
    {
      icon: Trophy,
      title: "Competitive Robots",
      description: "Engineer high-performance robots to excel in various tech challenges.",
      details: "Build and refine robots designed to perform, compete, and push the limits of engineering creativity. These projects enhance teamwork, problem-solving, and technical innovation.",
    },
    {
      icon: Flame,
      title: "Autonomous Systems",
      description: "Develop self-navigating robots with advanced sensors and AI algorithms.",
      details: "Working on cutting-edge autonomous navigation systems using computer vision, LIDAR, and machine learning to create robots that can navigate complex environments independently and make intelligent decisions in real-time.",
    },
    {
      icon: Workflow,
      title: "Practical Applications",
      description: "Design functional robots that solve real-world problems and serve communities.",
      details: "Create functional robots that bring technology into everyday life through real-world solutions. Members learn to turn ideas into impactful engineering outcomes.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Build intelligent automation solutions for real-world problems.",
      details: "Developing IoT-enabled automation systems that solve real-world problems, from smart home solutions to industrial automation prototypes. We integrate sensors, actuators, and intelligent control systems to create efficient automated solutions.",
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Our Focus
          </h2>
          <p className="text-xl text-muted-foreground">
            Projects we're working on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card 
                    className="border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer hover:scale-105"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    <DialogDescription className="text-base pt-4">
                      {project.details}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
