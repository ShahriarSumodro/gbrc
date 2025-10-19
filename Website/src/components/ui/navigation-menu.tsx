import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  // ... rest stays the same, but remove the logo import and use this instead:
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">RT</span>
            </div>
            <span className="text-2xl font-bold text-foreground tracking-wider">RoboTech</span>
          </Link>
