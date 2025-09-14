import { Button } from "@/components/ui/button";
import { Shield, Terminal, Lock } from "lucide-react";
import heroBackground from "@/assets/cyber-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-cyber-scan opacity-60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="relative">
            <Shield className="w-20 h-20 text-primary animate-glow-pulse" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-cyber bg-clip-text text-transparent">
            CYBERSECURITY
          </span>
          <br />
          <span className="text-foreground">TECHNICIAN</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up max-w-2xl mx-auto">
          Securing digital infrastructures with cutting-edge expertise in 
          <span className="text-primary"> penetration testing</span>, 
          <span className="text-accent"> network security</span>, and 
          <span className="text-secondary"> threat analysis</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button size="lg" className="bg-gradient-cyber hover:shadow-neon transition-all duration-300">
            <Terminal className="w-5 h-5 mr-2" />
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary hover:shadow-cyber transition-all duration-300">
            <Lock className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Terminal className="w-6 h-6 text-cyber-blue opacity-60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-pulse delay-1000">
          <Lock className="w-8 h-8 text-cyber-green opacity-40" />
        </div>
        <div className="absolute top-1/3 right-20 animate-pulse delay-500">
          <Shield className="w-5 h-5 text-cyber-purple opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;