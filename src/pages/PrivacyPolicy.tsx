import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Seo } from "@/components/Seo";

const PrivacyPolicy = () => (
  <>
    <Seo
      title="Privacy Policy | Presidential Digs"
      description="Learn how Presidential Digs collects, uses, and protects your personal information."
      canonicalPath="/privacy"
    />
    <Header />
    <main className="bg-background min-h-screen">
      <div className="container-narrow px-5 md:px-6 py-16 md:py-24">
        <h1 className="text-display text-3xl md:text-4xl mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-12">Last updated: March 17, 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-[15px] leading-relaxed text-foreground/80">
          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">1. Information We Collect</h2>
            <p>When you interact with Presidential Digs, we may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Personal Information:</strong> Name, email address, phone number, property address, and any other details you provide through our forms or communications.</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on site, and referring URLs.</li>
              <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to improve your experience and analyze site traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide cash offers on your property.</li>
              <li>To communicate with you via phone, email, or SMS regarding your property and our services.</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">3. SMS/Text Messaging</h2>
            <p>By providing your phone number and opting in, you consent to receive SMS/text messages from Presidential Digs related to your property inquiry. Message frequency varies. Message and data rates may apply. You may opt out at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance.</p>
            <p className="mt-2">We do not sell, rent, or share your phone number or opt-in data with third parties for their marketing purposes. SMS consent is not a condition of purchase.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">4. Information Sharing</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Service providers who assist with our operations (e.g., CRM, analytics, title companies).</li>
              <li>Legal authorities when required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">5. Data Security</h2>
            <p>We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of electronic transmission or storage is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us at <a href="mailto:deals@presidentialdigs.com" className="text-accent hover:underline">deals@presidentialdigs.com</a> to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">8. Contact Us</h2>
            <p>Presidential Digs<br />Email: <a href="mailto:deals@presidentialdigs.com" className="text-accent hover:underline">deals@presidentialdigs.com</a><br />Phone: <a href="tel:+14144095086" className="text-accent hover:underline">414 409 5086</a></p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
