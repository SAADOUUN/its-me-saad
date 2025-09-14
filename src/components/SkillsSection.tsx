import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Security Tools",
      skills: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP", "Nessus", "Kali Linux"]
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Windows", "macOS", "FreeBSD", "VMware", "Docker"]
    },
    {
      category: "Programming",
      skills: ["Python", "Bash", "PowerShell", "C++", "JavaScript", "SQL"]
    },
    {
      category: "Frameworks",
      skills: ["NIST", "ISO 27001", "OWASP", "MITRE ATT&CK", "SANS"]
    },
    {
      category: "Cloud Security",
      skills: ["AWS Security", "Azure Security", "GCP", "Kubernetes", "Terraform"]
    },
    {
      category: "Certifications",
      skills: ["CEH", "CISSP", "CompTIA Security+", "OSCP", "CISM"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              TECHNICAL SKILLS
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across security tools, frameworks, and technologies 
            essential for modern cybersecurity operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Command Line Demo */}
        <div className="mt-16">
          <Card className="bg-black/80 border-primary/30 overflow-hidden">
            <div className="bg-muted/20 px-4 py-2 border-b border-border/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
                <span className="ml-2 text-sm text-muted-foreground">terminal</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-cyber-green">user@cyberlab</span>
                  <span className="text-foreground">:</span>
                  <span className="text-cyber-blue">~</span>
                  <span className="text-foreground">$ nmap -sS -A target.example.com</span>
                </div>
                <div className="text-muted-foreground">
                  Starting Nmap 7.94 ( https://nmap.org )<br />
                  Nmap scan report for target.example.com<br />
                  <span className="text-cyber-green">PORT     STATE SERVICE VERSION</span><br />
                  <span className="text-foreground">22/tcp   open  ssh     OpenSSH 8.9</span><br />
                  <span className="text-foreground">80/tcp   open  http    Apache 2.4.52</span><br />
                  <span className="text-cyber-blue">443/tcp  open  https   Apache 2.4.52</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;