import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Seo } from "@/components/Seo";
import BreadcrumbNav, { breadcrumbJsonLd } from "@/components/BreadcrumbNav";
import PageHero from "@/components/PageHero";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "SMS Policy" },
];

const SMSPolicy = () => (
  <>
    <Seo
      title="SMS Policy | Presidential Digs"
      description="Learn about Presidential Digs' SMS messaging practices, opt-in, opt-out, and your rights."
      canonicalPath="/sms-policy"
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    />
    <Header />
    <main className="bg-background min-h-screen">
      <PageHero className="bg-secondary !py-12 md:!py-16">
        <BreadcrumbNav items={breadcrumbs} />
        <h1 className="text-display text-3xl md:text-4xl mb-3">SMS Policy</h1>
        <p className="text-muted-foreground text-sm">Last updated: March 17, 2026</p>
      </PageHero>

      <div className="container-narrow px-5 md:px-6 py-12 md:py-16">
        <div className="prose prose-neutral max-w-none space-y-8 text-[15px] leading-relaxed text-foreground/80">
          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">Program Description</h2>
            <p>Presidential Digs uses SMS/text messaging to communicate with homeowners who have submitted an inquiry through our website. Messages may include follow-ups regarding your property, cash offer details, appointment scheduling, and related communications.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">Opt-In</h2>
            <p>By submitting a form on our website that includes your phone number, you are opting in to receive SMS messages from Presidential Digs. Your consent is voluntary and is <strong>not a condition of any purchase or service</strong>.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">Message Frequency</h2>
            <p>Message frequency varies depending on the nature and status of your inquiry. You may receive multiple messages related to your property submission.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">Message & Data Rates</h2>
            <p>Standard message and data rates may apply depending on your mobile carrier and plan. Presidential Digs is not responsible for any charges incurred.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">Opt-Out</h2>
            <p>You may opt out of SMS communications at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from Presidential Digs unless you re-opt-in.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">Help</h2>
            <p>For help or questions about our SMS program, reply <strong>HELP</strong> to any message, or contact us:</p>
            <ul className="list-none space-y-1 mt-3">
              <li>Email: <a href="mailto:deals@presidentialdigs.com" className="text-accent hover:underline">deals@presidentialdigs.com</a></li>
              <li>Phone: <a href="tel:+14144095086" className="text-accent hover:underline">414 409 5086</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">Data Sharing</h2>
            <p>We will <strong>not sell, rent, or share your phone number or opt-in consent</strong> with any third parties for their own marketing purposes. Your information may be shared with service providers who assist in delivering messages on our behalf, subject to our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="text-display text-xl mb-3 text-foreground">Supported Carriers</h2>
            <p>Our SMS program is supported on all major U.S. carriers including AT&T, Verizon, T-Mobile, Sprint, and others. Carriers are not liable for delayed or undelivered messages.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default SMSPolicy;
