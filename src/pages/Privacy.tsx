import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <ScrollReveal>
              <div className="text-sm text-muted-foreground mb-8">
                Last updated: January 1, 2025
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>1. Information We Collect</h2>
              <p>
                Vision collects information to provide better services to all our users. We collect information in the following ways:
              </p>
              <ul>
                <li><strong>Information you give us:</strong> When you contact us, create an account, or interact with our services</li>
                <li><strong>Information we get from your use of our services:</strong> Usage data, device information, and log information</li>
                <li><strong>Cookies and similar technologies:</strong> To enhance your experience and analyze service usage</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>2. How We Use Information</h2>
              <p>
                We use the information we collect from all of our services to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to comments, questions, and requests and provide customer service</li>
                <li>Communicate about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>3. Information Sharing</h2>
              <p>
                We do not share personal information with companies, organizations, and individuals outside of Vision unless one of the following circumstances applies:
              </p>
              <ul>
                <li><strong>With your consent:</strong> We will share personal information when we have your consent</li>
                <li><strong>For legal reasons:</strong> We will share personal information if we believe access, use, preservation, or disclosure is reasonably necessary</li>
                <li><strong>With our subsidiaries:</strong> Information may be shared between Vision and our subsidiaries (RBC Television, Channel 4)</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>4. Data Security</h2>
              <p>
                We work hard to protect Vision and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. In particular:
              </p>
              <ul>
                <li>We encrypt many of our services using SSL/TLS</li>
                <li>We review our information collection, storage, and processing practices</li>
                <li>We restrict access to personal information to Vision employees who need to know that information</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>5. Cookies and Tracking</h2>
              <p>
                Vision uses cookies and similar tracking technologies to track activity on our services and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <h2>6. Third-Party Services</h2>
              <p>
                Our services may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h2>7. Children's Privacy</h2>
              <p>
                Our services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <h2>8. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We may also retain usage data for internal analysis purposes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <h2>9. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul>
                <li>The right to access your personal data</li>
                <li>The right to rectify or update your personal data</li>
                <li>The right to delete your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={550}>
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our Contact page or join our Discord community for assistance.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={650}>
              <div className="bg-muted/50 p-6 rounded-lg mt-12 hover:bg-muted/70 transition-all duration-300">
                <h3 className="font-semibold mb-2">Questions about Privacy?</h3>
                <p className="text-muted-foreground">
                  Your privacy matters to us. If you have questions about how we handle your data or want to exercise your privacy rights, please reach out to our team.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;