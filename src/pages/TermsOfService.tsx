import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
            
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using GSMODELING, you accept and agree to be bound by the 
                  terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                <p>
                  Permission is granted to use GSMODELING for personal and professional modeling 
                  purposes. This license shall automatically terminate if you violate any restrictions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account and password. 
                  You agree to provide accurate and complete information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Content Guidelines</h2>
                <p>
                  All content uploaded must be appropriate, legal, and not infringe on third-party 
                  rights. We reserve the right to remove content that violates these guidelines.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
                <p>
                  Payment terms for premium features and services are outlined in your subscription 
                  agreement. All fees are non-refundable unless otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p>
                  GSMODELING shall not be liable for any indirect, incidental, special, consequential 
                  or punitive damages resulting from your use of the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of the 
                  platform constitutes acceptance of modified terms.
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

export default TermsOfService;