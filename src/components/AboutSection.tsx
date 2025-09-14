import { Card } from "@/components/ui/card";
import { Shield, Network, Search, AlertTriangle } from "lucide-react";

const AboutSection = () => {
  const specializations = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Implementing robust security protocols and monitoring systems to protect against cyber threats."
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description: "Conducting thorough security assessments to identify vulnerabilities before malicious actors do."
    },
    {
      icon: Network,
      title: "Digital Forensics",
      description: "Investigating security incidents and analyzing digital evidence to understand attack vectors."
    },
    {
      icon: AlertTriangle,
      title: "Threat Analysis",
      description: "Monitoring emerging threats and developing proactive defense strategies."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              ABOUT
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated cybersecurity professional with expertise in protecting digital assets, 
            analyzing threats, and implementing comprehensive security solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-cyber group"
            >
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <spec.icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-accent/20 transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {spec.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Professional <span className="text-primary">Expertise</span>
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in cybersecurity, I specialize in identifying vulnerabilities, 
                implementing security measures, and ensuring compliance with industry standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical expertise with strategic thinking to create comprehensive 
                security solutions that protect against evolving cyber threats.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { skill: "Network Security", level: 95 },
              { skill: "Penetration Testing", level: 90 },
              { skill: "Digital Forensics", level: 85 },
              { skill: "Incident Response", level: 88 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-primary">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-neon transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;