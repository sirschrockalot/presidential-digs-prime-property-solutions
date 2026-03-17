import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import FinalCTA from "../components/home/FinalCTA";
import { Send, FileSearch, Banknote, Handshake } from "lucide-react";
import { Seo } from "../components/Seo";

// TODO_PRODUCTION_PROCESS - verify these timelines and privacy commitments against your actual operational process and compliance standards
const steps = [
  { num: "01", icon: Send, title: "Submit Your Property", desc: "Fill out our simple form with your property address and basic details. It takes less than 60 seconds and carries zero obligation.", detail: "We never share your information outside of our team or trusted partners without your consent." },
  { num: "02", icon: FileSearch, title: "Receive Your Offer", desc: "Our team reviews comparable sales data, property condition, and local market dynamics to formulate a fair, transparent cash offer.", detail: "You'll typically receive your offer within 24 hours of submission." },
  { num: "03", icon: Handshake, title: "Review & Accept", desc: "Review your offer at your own pace. Ask questions, request clarifications. There's no pressure and no expiration date on our offers.", detail: "We encourage you to compare our offer with other options." },
  { num: "04", icon: Banknote, title: "Close & Get Paid", desc: "Choose your closing date. We handle all paperwork, pay closing costs, and deposit cash directly into your account.", detail: "Average closing time: 8.4 days. You choose the timeline." },
];

const HowItWorksPage = () => (
  <>
    <Seo
      title="How It Works | Presidential Digs Home Selling Process"
      description="See how the Presidential Digs cash offer process works from first contact to closing. Transparent steps, clear timelines, and no hidden fees."
      canonicalPath="/how-it-works"
    />
    <Header />
    <main>
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Our Process</span>
            <h1 className="text-display text-3xl md:text-5xl text-foreground mb-4">How It Works</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A straightforward, dignified process designed to give you certainty and control over your home sale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="relative pl-16 pb-12 last:pb-0">
                  {i < steps.length - 1 && (
                    <div className="absolute left-[1.25rem] top-12 bottom-0 w-px bg-border" />
                  )}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-sm bg-primary flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-mono text-xs text-accent font-semibold tracking-wider block mb-2">{step.num}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">{step.desc}</p>
                  <p className="text-sm text-accent italic">{step.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default HowItWorksPage;
