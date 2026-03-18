import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Seo } from "@/components/Seo";
import BreadcrumbNav, { breadcrumbJsonLd } from "@/components/BreadcrumbNav";
import PageHero from "@/components/PageHero";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Terms of Service" },
];

const TermsOfService = () => (
  <>
    <Seo
      title="Terms of Service | Presidential Digs"
      description="Read the terms and conditions governing your use of the Presidential Digs website and services."
      canonicalPath="/terms"
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    />
    <Header />
    <main className="bg-background min-h-screen">
      <PageHero className="bg-secondary !py-12 md:!py-16">
        <BreadcrumbNav items={breadcrumbs} />
        <h1 className="text-display text-3xl md:text-4xl mb-3">Terms of Service</h1>
        <p className="text-muted-foreground text-sm">Last updated: March 17, 2026</p>
      </PageHero>

      <div className="container-narrow px-5 md:px-6 py-12 md:py-16">
        <div className="prose prose-neutral max-w-none space-y-8 text-[15px] leading-relaxed text-foreground/80">
          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">1. Acceptance of Terms</h2>
            <p>By accessing or using the Presidential Digs website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site or services.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">2. Services Description</h2>
            <p>Presidential Digs provides cash offers to purchase residential properties. Our website allows homeowners to submit property information and receive a no-obligation cash offer. We are not real estate agents or brokers and do not list homes on the open market.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">3. No Obligation</h2>
            <p>Submitting your information through our website does not obligate you to sell your property. All cash offers are non-binding until a formal purchase agreement is signed by both parties.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">4. SMS/Text Messaging Consent</h2>
            <p>By submitting your phone number through any form on our website, you expressly consent to receive SMS/text messages from Presidential Digs regarding your inquiry, including follow-ups, offer details, and scheduling. This consent is not a condition of any purchase or service.</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Message frequency varies based on your inquiry.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply <strong>STOP</strong> at any time to opt out of SMS communications.</li>
              <li>Reply <strong>HELP</strong> for support or contact us at <a href="mailto:deals@presidentialdigs.com" className="text-accent hover:underline">deals@presidentialdigs.com</a>.</li>
              <li>Your opt-in data and consent will not be sold to or shared with third parties for marketing purposes.</li>
            </ul>
            <p className="mt-3">For full details on data handling, see our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">5. User Representations</h2>
            <p>By using our services, you represent that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>You are at least 18 years of age.</li>
              <li>The information you provide is accurate and truthful.</li>
              <li>You have the legal authority to sell the property in question, or are authorized to act on behalf of the owner.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">6. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, and design — is the property of Presidential Digs and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">7. Limitation of Liability</h2>
            <p>Presidential Digs provides this website and its services "as is" without warranties of any kind. We are not liable for any damages arising from your use of the site, including but not limited to direct, indirect, incidental, or consequential damages.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">8. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Wisconsin, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Updated terms will be posted on this page with a revised effective date. Continued use of the site constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">10. Contact</h2>
            <p>Presidential Digs<br />Email: <a href="mailto:deals@presidentialdigs.com" className="text-accent hover:underline">deals@presidentialdigs.com</a><br />Phone: <a href="tel:+14144095086" className="text-accent hover:underline">414 409 5086</a></p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TermsOfService;
