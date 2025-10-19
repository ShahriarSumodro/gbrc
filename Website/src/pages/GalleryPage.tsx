import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: ["Competition", "Workshop", "Build", "Event"][i % 4],
  }));

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
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Explore our journey through images. From intense competitions to late-night build sessions, these moments capture our passion for robotics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="aspect-video rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    {item.id}
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">{item.title}</p>
                  <p className="text-xs text-primary font-semibold mt-1">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
