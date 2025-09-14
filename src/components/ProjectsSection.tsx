import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Network, Search } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Network Vulnerability Scanner",
      description: "Automated security assessment tool for identifying network vulnerabilities and misconfigurations across enterprise environments.",
      tech: ["Python", "Nmap", "SQLite", "Flask"],
      icon: Network,
      type: "Security Tool",
      status: "Production"
    },
    {
      title: "Incident Response Dashboard",
      description: "Real-time monitoring and alerting system for security incidents with automated threat classification and response workflows.",
      tech: ["React", "Node.js", "MongoDB", "SIEM"],
      icon: Shield,
      type: "Monitoring",
      status: "Active"
    },
    {
      title: "Forensic Analysis Toolkit",
      description: "Digital forensics suite for analyzing system artifacts, memory dumps, and network traffic during security investigations.",
      tech: ["C++", "Python", "Volatility", "Wireshark"],
      icon: Search,
      type: "Forensics",
      status: "Research"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Security solutions and tools developed to address real-world cybersecurity challenges 
            and enhance organizational security posture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-cyber group overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <project.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-accent/20 transition-colors duration-300" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className="border-primary/50 text-primary"
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-muted/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/50 hover:border-primary hover:shadow-cyber transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-cyber hover:shadow-neon transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-cyber opacity-10 rounded-lg" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "150+", label: "Security Assessments" },
            { number: "98%", label: "Threat Detection Rate" },
            { number: "24/7", label: "Monitoring Coverage" },
            { number: "0", label: "Security Breaches" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;