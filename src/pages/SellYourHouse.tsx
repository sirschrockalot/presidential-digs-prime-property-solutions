import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";
import AnimatedSection from "../components/AnimatedSection";
import FinalCTA from "../components/home/FinalCTA";
import { Check, X } from "lucide-react";
import { Seo } from "../components/Seo";

const comparisons = [
  { feature: "Commission Fees", agent: "5–6% of sale price", us: "$0" },
  { feature: "Closing Costs", agent: "Paid by seller", us: "Paid by us" },
  { feature: "Repairs Required", agent: "Yes, often $5K–$30K+", us: "None, ever" },
  { feature: "Showings & Staging", agent: "Dozens of strangers", us: "Zero showings" },
  { feature: "Time to Close", agent: "60–120+ days", us: "7–14 days" },
  { feature: "Certainty of Sale", agent: "Buyers can back out", us: "Guaranteed close" },
];

const SellYourHouse = () => (
  <>
    <Seo
      title="Sell Your House Fast | Presidential Digs"
      description="Skip repairs, showings, and months of uncertainty. Get a fair cash offer for your house and close on your schedule with Presidential Digs."
      canonicalPath="/sell-your-house"
    />
    <Header />
    <main>
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Sell Your House Fast</span>
                <h1 className="text-display text-3xl md:text-5xl text-foreground mb-6">
                  Skip the hassle. <span className="italic">Get a fair offer today.</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether your property needs major repairs, you're facing foreclosure, or you simply want a fast, certain sale — we provide a professional cash exit with zero fees and zero stress.
                </p>
                <div className="space-y-3">
                  {["No listing, no showings, no waiting", "Close on your schedule — as fast as 7 days", "We buy in any condition, any situation", "Zero fees, commissions, or closing costs"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-success shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <LeadForm variant="hero" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-display text-3xl md:text-4xl text-foreground">Traditional Sale vs. Presidential Digs</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="border border-border rounded-sm overflow-hidden">
              <div className="grid grid-cols-3 px-6 py-3 bg-secondary text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span></span>
                <span>With an Agent</span>
                <span>With Us</span>
              </div>
              {comparisons.map((c) => (
                <div key={c.feature} className="grid grid-cols-3 px-6 py-4 border-t border-border items-center">
                  <span className="text-sm font-medium text-foreground">{c.feature}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-destructive" /> {c.agent}
                  </span>
                  <span className="text-sm text-foreground font-medium flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-success" /> {c.us}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default SellYourHouse;
