import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Shield } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your digital infrastructure? Let's discuss how we can strengthen 
            your cybersecurity posture together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Email</h3>
                </div>
                <p className="text-muted-foreground">cybersec.expert@email.com</p>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Response Time</h3>
                </div>
                <p className="text-muted-foreground">Within 24 hours for security consultations</p>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Security</h3>
                </div>
                <p className="text-muted-foreground">All communications are encrypted and confidential</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                    <Input 
                      placeholder="Company name" 
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@company.com" 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Project Type</label>
                  <select className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md focus:border-primary transition-colors duration-300 text-foreground">
                    <option value="">Select project type</option>
                    <option value="security-audit">Security Audit</option>
                    <option value="penetration-testing">Penetration Testing</option>
                    <option value="incident-response">Incident Response</option>
                    <option value="consultation">Security Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Describe your security requirements and project details..."
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-cyber hover:shadow-neon transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Secure Message
                </Button>
              </form>
            </div>
          </Card>
        </div>

        {/* Security Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Shield className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary">End-to-end encrypted communications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;