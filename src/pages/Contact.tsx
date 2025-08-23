import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Building } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white relative overflow-hidden py-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/lovable-uploads/68d930a1-df1c-4722-aaa7-52714a54a2ea.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Have a question, partnership opportunity, or want to learn more about Vision? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollReveal>
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="transition-all duration-300 focus:scale-105"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className="transition-all duration-300 focus:scale-105"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company or organization"
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your inquiry, partnership opportunity, or how we can help you..."
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-elegant">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal delay={200}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      Whether you're interested in partnerships, have questions about our services, or want to explore collaboration opportunities, we're here to help.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                            <Building className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Business Inquiries</h3>
                            <p className="text-muted-foreground">
                              Partnerships, collaborations, and business opportunities
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                            <MessageSquare className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Community</h3>
                            <p className="text-muted-foreground mb-3">
                              Join our Discord community for real-time discussions
                            </p>
                            <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:scale-105 hover:bg-primary/10">
                              <a 
                                href="https://go.rbctelevision.org/discord" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                Join Discord
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                            <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Media Inquiries</h3>
                            <p className="text-muted-foreground">
                              Press releases, media kits, and interview requests
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg hover:bg-muted/70 transition-all duration-300">
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <div className="space-y-2">
                      <a 
                        href="https://rbctelevision.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                      >
                        → RBC Television
                      </a>
                      <a 
                        href="https://www.youtube.com/@RBCTelevisionRoblox" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                      >
                        → YouTube Channel
                      </a>
                      <a 
                        href="https://x.com/rbc_television" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                      >
                        → Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;