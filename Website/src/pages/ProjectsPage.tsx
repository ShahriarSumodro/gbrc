import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Flame, Plane, Zap, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ProjectsPage = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const projects = [
    {
      icon: Wrench,
      title: "Combat Robots",
      description: "Our combat robotics team designs and fabricates robots that compete in various weight classes. We focus on weapon systems, armor design, and strategic combat tactics to create competitive machines that can withstand intense battles.",
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563191597-d23aa2f8da2f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&h=600&fit=crop"
      ],
    },
    {
      icon: Flame,
      title: "Autonomous Systems",
      description: "Working on cutting-edge autonomous navigation systems using computer vision, LIDAR, and machine learning to create robots that can navigate complex environments independently and make intelligent decisions in real-time.",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
      ],
    },
    {
      icon: Plane,
      title: "Aerial Drones",
      description: "From racing drones to research platforms, we develop custom aerial systems for various applications including aerial photography, surveying, and autonomous delivery. Our drones feature custom flight controllers and advanced stabilization systems.",
      images: [
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092583537-20d51876f3ef?w=800&h=600&fit=crop"
      ],
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Developing IoT-enabled automation systems that solve real-world problems, from smart home solutions to industrial automation prototypes. We integrate sensors, actuators, and intelligent control systems to create efficient automated solutions.",
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop"
      ],
    },
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const navigateImage = (itemIndex: number, direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    const item = projects[itemIndex];
    const currentIndex = currentImageIndex[itemIndex] || 0;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % item.images.length;
    } else {
      newIndex = currentIndex === 0 ? item.images.length - 1 : currentIndex - 1;
    }
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [itemIndex]: newIndex
    }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <a href="/" className="inline-block mb-8">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </a>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Explore the innovative robotics projects we're working on. Each project represents our commitment to pushing the boundaries of what's possible in robotics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const currentIndex = currentImageIndex[index] || 0;
              const hasMultipleImages = project.images.length > 1;
              
              return (
                <div 
                  key={index} 
                  className="h-[400px]"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                    onClick={() => toggleFlip(index)}
                  >
                    {/* Front Side - Image with Carousel */}
                    <Card 
                      className="absolute w-full h-full border-border bg-card hover:border-primary transition-colors duration-300 overflow-hidden"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img 
                          src={project.images[currentIndex]}
                          alt={`${project.title} - Image ${currentIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                        
                        {/* Title at top */}
                        <div className="absolute top-4 left-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                          <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                        </div>

                        {/* Navigation arrows - only show if multiple images */}
                        {hasMultipleImages && (
                          <>
                            <button
                              onClick={(e) => navigateImage(index, 'prev', e)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-primary p-2 rounded-full transition-colors z-10"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={(e) => navigateImage(index, 'next', e)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-primary p-2 rounded-full transition-colors z-10"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </>
                        )}

                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {project.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-2 h-2 rounded-full border border-foreground transition-all ${
                                imgIndex === currentIndex ? 'bg-foreground' : 'bg-transparent'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </Card>

                    {/* Back Side - Description */}
                    <Card 
                      className="absolute w-full h-full bg-card border-primary overflow-hidden p-8 flex flex-col justify-center"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <h3 className="text-3xl font-bold text-primary mb-6 text-center">
                        {project.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed text-left">
                        {project.description}
                      </p>
                      <div className="mt-6 text-center text-muted-foreground text-sm">
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default ProjectsPage;
