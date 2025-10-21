import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Team member interface for type safety
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
  email?: string;
  website?: string;
}

const TeamPage = () => {
  // Leadership and Project Leads
  const leadership: TeamMember[] = [
    {
      name: "Alex Chen",
      role: "Team Lead",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/alexchen",
      email: "alex.chen@robotics.edu",
    },
    {
      name: "Sarah Johnson",
      role: "Software Lead",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah.johnson@robotics.edu",
    },
    
    {
      name: "Marcus Rodriguez",
      role: "Electronics Lead",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      email: "marcus.rodriguez@robotics.edu",
    },
  ];

  // Executive Members
  const executives: TeamMember[] = [
    {
      name: "Emily Zhang",
      role: "Project Manager",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/emilyzhang",
      email: "emily.zhang@robotics.edu",
    },
    {
      name: "David Kim",
      role: "Mechanical Engineer",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/davidkim",
      email: "david.kim@robotics.edu",
    },
    {
      name: "Lisa Patel",
      role: "Software Engineer",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/lisapatel",
      email: "lisa.patel@robotics.edu",
    },
  ];

  // General Members
  const generalMembers: TeamMember[] = [
    {
      name: "Michael Brown",
      role: "Member",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      email: "michael.brown@robotics.edu",
    },
    {
      name: "Jennifer Lee",
      role: "Member",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      email: "jennifer.lee@robotics.edu",
    },
    {
      name: "Chris Taylor",
      role: "Member",
      imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      email: "chris.taylor@robotics.edu",
    },
  ];

  // Alumni Mentors & Advisors
  const alumniAdvisors: TeamMember[] = [
    {
      name: "Dr. Robert Smith",
      role: "Faculty Advisor",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "robert.smith@university.edu",
      website: "https://faculty.university.edu/rsmith",
    },
    {
      name: "Amanda White",
      role: "Alumni Mentor",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/amandawhite",
      email: "amanda.white@alumni.edu",
    },
  ];

  // Reusable component for rendering a team member card
  const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <Card className="border-border bg-card hover:border-primary transition-all duration-300 w-64">
      <CardHeader className="flex flex-col items-center space-y-4 pb-4">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20">
          <img 
            src={member.imageUrl} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
          <p className="text-primary font-semibold">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent className="flex justify-center gap-3 pb-6">
        {member.linkedin && (
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
        )}
        {member.email && (
          <a 
            href={`mailto:${member.email}`}
            className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <Mail className="w-5 h-5 text-primary" />
          </a>
        )}
        {member.website && (
          <a 
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <Globe className="w-5 h-5 text-primary" />
          </a>
        )}
      </CardContent>
    </Card>
  );

  // Reusable section component
  const TeamSection = ({ title, members }: { title: string; members: TeamMember[] }) => (
    <div className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );

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
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight text-center">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto text-center">
            Meet the talented individuals who make our robotics vision a reality. Our diverse team brings together expertise from multiple disciplines.
          </p>

          {/* Leadership and Project Leads */}
          <TeamSection title="Leadership & Project Leads" members={leadership} />

          {/* Executive Members */}
          <TeamSection title="Executive Members" members={executives} />

          {/* General Members */}
          <TeamSection title="General Members" members={generalMembers} />

          {/* Alumni Mentors & Club Advisors */}
          <TeamSection title="Alumni Mentors & Club Advisors" members={alumniAdvisors} />
        </div>
      </main>
    </div>
  );
};

export default TeamPage;
