import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Monitor, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import visionLogo from "@/assets/vision-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={visionLogo} 
              alt="Vision Logo" 
              className="h-20 w-auto mx-auto mb-8"
            />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Pioneering the Future of <span className="text-blue-400">Media</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Vision is a leading media and technology company, home to innovative brands like RBC Television and Channel 4, shaping tomorrow's entertainment landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <Link to="/about" className="inline-flex items-center">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We create, innovate, and deliver exceptional media experiences across multiple platforms and channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Broadcasting Excellence</h3>
                <p className="text-muted-foreground">
                  State-of-the-art television broadcasting through RBC Television, reaching audiences worldwide with quality content.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technology and creative solutions that push the boundaries of modern media and entertainment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
                <p className="text-muted-foreground">
                  Building strong communities and fostering connections through engaging content and interactive experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Vision?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover opportunities, partnerships, and ways to be part of our growing media ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://go.rbctelevision.org/discord" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Join Discord Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;