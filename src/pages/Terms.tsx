const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-sm text-muted-foreground mb-8">
              Last updated: January 1, 2025
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Vision's services, websites, and applications, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service apply to all users of the Vision network, including RBC Television and Channel 4.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access and use Vision's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on Vision's services</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2>3. Content Guidelines</h2>
            <p>
              Vision is committed to providing a safe and respectful environment for all users. When interacting with our services or community platforms, users must:
            </p>
            <ul>
              <li>Respect other community members and their opinions</li>
              <li>Refrain from posting harmful, offensive, or inappropriate content</li>
              <li>Not engage in spam, harassment, or malicious activities</li>
              <li>Follow all applicable laws and regulations</li>
            </ul>

            <h2>4. Privacy and Data</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your information.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content, features, and functionality on Vision's services are owned by Vision, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2>6. Disclaimer</h2>
            <p>
              The materials on Vision's services are provided on an 'as is' basis. Vision makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>7. Limitations</h2>
            <p>
              In no event shall Vision or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Vision's services, even if Vision or a Vision authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>8. Accuracy of Materials</h2>
            <p>
              The materials appearing on Vision's services could include technical, typographical, or photographic errors. Vision does not warrant that any of the materials on its services are accurate, complete, or current. Vision may make changes to the materials contained on its services at any time without notice.
            </p>

            <h2>9. Modifications</h2>
            <p>
              Vision may revise these terms of service at any time without notice. By using our services, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us through our Contact page or join our Discord community for assistance.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-12">
              <h3 className="font-semibold mb-2">Questions about our Terms?</h3>
              <p className="text-muted-foreground">
                If you have any questions or concerns about these terms, please don't hesitate to reach out to us. We're here to help ensure you have a positive experience with Vision's services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;