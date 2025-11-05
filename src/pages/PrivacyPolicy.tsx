import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, including name, email address, 
                  profile information, and portfolio content when you create an account or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>
                  Your information is used to provide, maintain, and improve our services, 
                  match you with opportunities, and communicate with you about our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                <p>
                  We share your portfolio and profile information with agencies and brands 
                  when you apply for opportunities. We do not sell your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data. 
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information 
                  at any time through your account settings or by contacting us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p>
                  For questions about this Privacy Policy, contact us at privacy@gsmodeling.com
                </p>
              </section>

              <p className="text-sm mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;