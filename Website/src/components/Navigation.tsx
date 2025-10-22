import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import robotLogo from "@/assets/robot-logo.png";

const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership", path: "/membership" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={robotLogo} alt="Robotics Team Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-foreground tracking-wider">RoboTech</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-foreground/80 hover:text-foreground transition-colors text-sm font-medium ${
                  location.pathname === item.path ? "text-primary font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
