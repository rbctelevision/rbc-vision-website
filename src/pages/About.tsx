import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Target, Lightbulb } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const About = () => {
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
              About Vision
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              We are a forward-thinking media and technology company dedicated to creating exceptional entertainment experiences and building the future of digital media.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ScrollReveal>
                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To revolutionize the media landscape by delivering innovative content and technology solutions that connect, entertain, and inspire audiences worldwide.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Lightbulb className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading force in next-generation media, where creativity meets technology to shape the future of entertainment and communication.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Building2 className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                    <p className="text-muted-foreground">
                      Innovation, integrity, and community drive everything we do. We believe in creating meaningful connections through quality content and cutting-edge technology.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-xl text-muted-foreground">
                  Building the future of media, one innovation at a time
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Vision was founded with a simple yet ambitious goal: to transform how people consume and interact with media content. As the parent company of RBC Television and Channel 4, we've established ourselves as a pioneering force in the broadcasting industry.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began with a passion for storytelling and a deep understanding of emerging technologies. We recognized that the future of media would be built on innovation, community engagement, and seamless user experiences across multiple platforms.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Today, Vision continues to push boundaries, exploring new frontiers in digital broadcasting, interactive content, and community-driven media experiences. Our subsidiaries serve diverse audiences while maintaining our core commitment to quality, innovation, and authentic connection.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <Button size="lg" asChild className="group transition-all duration-300 hover:scale-105 hover:shadow-elegant">
                  <Link to="/contact">
                    Partner With Us
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Companies</h2>
                <p className="text-xl text-muted-foreground">
                  Discover our family of innovative media brands
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={150}>
                <Card className="shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">RBC Television</h3>
                    <p className="text-muted-foreground mb-6">
                      Our flagship broadcasting network, delivering premium content and interactive experiences to audiences worldwide. RBC Television represents the cutting edge of modern broadcasting technology and community engagement.
                    </p>
                    <Button variant="outline" asChild className="group-hover:bg-primary/10 transition-colors duration-300">
                      <a 
                        href="https://rbctelevision.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Visit RBC Television
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">Channel 4</h3>
                    <p className="text-muted-foreground mb-6">
                      Our innovative content creation and distribution platform, focused on delivering fresh, engaging programming that resonates with diverse audiences and builds lasting communities.
                    </p>
                    <Button variant="outline" disabled>
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;