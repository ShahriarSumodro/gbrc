import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

// Social link interface for custom icons and URLs
interface SocialLink {
  icon: string; // URL to icon image (can be Google Drive link)
  url: string;
  label: string; // For accessibility
}

// Team member interface for type safety
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string; // Google Drive link or any image URL
  socialLinks?: SocialLink[];
}

const TeamPage = () => {
  // Leadership and Project Leads
  const leadership: TeamMember[] = [
    {
      name: "Md. Shohel",
      role: "President",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Rahat Hossain Rony",
      role: "Vice President",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Rubaet Toha",
      role: "General Secretary",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Md. Ridoy Hossen",
      role: "Asst. General Secretary",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Habibur Rahman",
      role: "Tresurer",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Alimul Jisan",
      role: "Office Secretary",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Jahid Hasan Sany",
      role: "Organizing Secretary",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Mehrab Hossain",
      role: "Media Secretary",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
  ];

  // Executive Members
  const executives: TeamMember[] = [
    {
      name: "Sonjoy Paul",
      role: "Executive Member",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Md. Ahsan Habib",
      role: "Executive Member",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Oli Ullah Fahad",
      role: "Executive Member",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Md. Mehedi Hasan",
      role: "Executive Member",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Anika Anjum Mim",
      role: "Executive Member",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Md. Shahriar Sumodro",
      role: "Executive Member",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
    {
      name: "Zubaida Islam Zuhi",
      role: "Executive Member",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        }
      ]
    },
  ];


  // General Members
  const generalMembers: TeamMember[] = [
    /*
    {
      name: "Michael Brown",
      role: "Member",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "mailto:michael.brown@robotics.edu",
          label: "Email"
        }
      ]
    },
    {
      name: "Jennifer Lee",
      role: "Member",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "mailto:jennifer.lee@robotics.edu",
          label: "Email"
        }
      ]
    },
    {
      name: "Chris Taylor",
      role: "Member",
      imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "mailto:chris.taylor@robotics.edu",
          label: "Email"
        }
      ]
    },
    */
  ];


  // Alumni Mentors & Advisors
  const alumniAdvisors: TeamMember[] = [
    {
      name: "Md. Al-Amin Sarker",
      role: "Lecturer, Dept. of EEE",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "",
          label: "Email"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/globe.svg",
          url: "",
          label: "Website"
        }
      ]
    },
    {
      name: "Sumon Ahmed",
      role: "Lecturer, Dept. of EEE",
      imageUrl: "",
      socialLinks: [
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/linkedin.svg",
          url: "https://linkedin.com/in/amandawhite",
          label: "LinkedIn"
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/mail.svg",
          url: "mailto:amanda.white@alumni.edu",
          label: "Email"
        }
      ]
    },
  ];

  // Reusable component for rendering a team member card
  const TeamMemberCard = ({ member }: { member: TeamMember }) => {
    const [imgError, setImgError] = useState(false);
    
    return (
      <Card className="border-border bg-card hover:border-primary transition-all duration-300 w-64">
        <CardHeader className="flex flex-col items-center space-y-4 pb-4">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 bg-primary/5 flex items-center justify-center">
            {!imgError ? (
              <img 
                src={member.imageUrl} 
                alt={member.name}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <svg 
                className="w-20 h-20 text-primary/50" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            )}
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
            <p className="text-primary font-semibold">{member.role}</p>
          </div>
        </CardHeader>
        <CardContent className="flex justify-center gap-3 pb-6">
          {member.socialLinks?.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target={link.url.startsWith('mailto:') ? undefined : "_blank"}
              rel={link.url.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label={link.label}
            >
              <img 
                src={link.icon} 
                alt={link.label}
                className="w-5 h-5"
                style={{ filter: 'invert(47%) sepia(86%) saturate(1753%) hue-rotate(359deg) brightness(102%) contrast(95%)' }}
              />
            </a>
          ))}
        </CardContent>
      </Card>
    );
  };

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

          
          {/* General Members 
          <TeamSection title="General Members" members={generalMembers} />*/}

          {/* Alumni Mentors & Club Advisors */}
          <TeamSection title="Co-ordinator Panel" members={alumniAdvisors} />

          {/* Recruitment Section */}
          <div className="mt-24 mb-12 max-w-4xl mx-auto">
            <Card className="border-border bg-card/50 backdrop-blur">
              <CardContent className="pt-12 pb-12 px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Want to Join Our Team?
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed text-center mb-8">
                  We welcome anybody and everybody who are enthusiastic builders, coders, and designers. 
                  Whether you're a seasoned engineer or just starting out, there's a place for you on our team. 
                  Stop by our lab which is located in the Engineering Building, Room 201, or reach out to our leadership.
                </p>
                <div className="flex justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamPage;
