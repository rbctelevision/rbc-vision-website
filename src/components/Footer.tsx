import { Link } from "react-router-dom";
import visionLogo from "@/assets/vision-logo.png";

const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Terms", path: "/terms" },
    { name: "Privacy", path: "/privacy" },
  ];

  const externalLinks = [
    { name: "RBC Television", url: "https://rbctelevision.org" },
    { name: "YouTube", url: "https://www.youtube.com/@RBCTelevisionRoblox" },
    { name: "Twitter", url: "https://x.com/rbc_television" },
    { name: "Web Radio", url: "https://go.rbctelevision.org/webradio" },
    { name: "Roblox", url: "https://go.rbctelevision.org/roblox" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <img src={visionLogo} alt="Vision Logo" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Vision is a leading media and technology company, home to RBC Television and Channel 4.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-semibold mb-4">Our Network</h4>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                Get in Touch
              </Link>
              <a
                href="https://go.rbctelevision.org/discord"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 – Vision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;