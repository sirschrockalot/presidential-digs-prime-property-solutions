import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";
import AnimatedSection from "../components/AnimatedSection";
import FinalCTA from "../components/home/FinalCTA";
import { Home, Gavel, UserX, Wrench, Building, Key, Check, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";

const situationData: Record<string, {
  icon: typeof Home;
  title: string;
  headline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  faqs: { q: string; a: string }[];
}> = {
  "inherited-property": {
    icon: Home,
    title: "Inherited Property",
    headline: "Selling an inherited home doesn't have to be complicated.",
    description: "Navigating probate, managing an estate, and deciding what to do with an inherited property can be overwhelming — especially during a period of grief. We provide a simple, dignified path forward.",
    challenges: [
      "Navigating the probate process",
      "Managing a property you don't live near",
      "Paying ongoing taxes, insurance, and maintenance",
      "Coordinating with multiple heirs",
      "Dealing with deferred maintenance or outdated conditions",
    ],
    solutions: [
      "We purchase properties in any condition — no repairs needed",
      "We work with your probate timeline and attorney",
      "Cash offer means no financing contingencies",
      "We handle all closing paperwork and costs",
      "Close on your schedule, not the market's",
    ],
    faqs: [
      { q: "What if probate hasn't been completed yet?", a: "We can work with your attorney to structure the sale within the probate process. We've handled hundreds of probate transactions." },
      { q: "What if there are multiple heirs?", a: "We can coordinate with all parties involved and ensure the process is transparent and equitable for everyone." },
      { q: "Do I need to clean out the property?", a: "No. Leave behind anything you don't want. We handle removal of personal property, furniture, and debris." },
    ],
  },
  "foreclosure": {
    icon: Gavel,
    title: "Foreclosure",
    headline: "Facing foreclosure? You have more options than you think.",
    description: "Foreclosure can feel like a dead end, but a fast cash sale can help you protect your equity, avoid credit damage, and move forward with dignity.",
    challenges: [
      "Tight timelines with bank deadlines",
      "Potential damage to your credit score",
      "Difficulty qualifying for traditional financing",
      "Emotional stress and uncertainty",
      "Risk of losing all equity in the property",
    ],
    solutions: [
      "We can close before your foreclosure date",
      "Protect your credit by selling before bank action",
      "Fair cash offer preserves your equity",
      "No need to list, stage, or show the property",
      "Confidential process from start to finish",
    ],
    faqs: [
      { q: "Can you close before my foreclosure date?", a: "In most cases, yes. We can close in as few as 7 days, often well before a scheduled auction date." },
      { q: "Will selling help my credit?", a: "Selling before foreclosure proceedings complete can significantly reduce the impact on your credit score compared to a bank-initiated foreclosure." },
      { q: "What if I owe more than the home is worth?", a: "We can discuss short sale options with your lender. We've navigated this process many times and can help facilitate the conversation." },
    ],
  },
  "bad-tenants": {
    icon: UserX,
    title: "Bad Tenants",
    headline: "Tired of dealing with problem tenants? We'll take the whole thing off your hands.",
    description: "Non-paying tenants, property damage, and eviction battles can drain your finances and your peace of mind. We buy tenant-occupied properties and handle the rest.",
    challenges: [
      "Non-payment of rent for months",
      "Property damage beyond normal wear",
      "Costly and time-consuming eviction process",
      "Ongoing maintenance and legal expenses",
      "Difficulty selling with tenants in place",
    ],
    solutions: [
      "We purchase tenant-occupied properties",
      "No need to complete the eviction first",
      "We assume all tenant-related issues at closing",
      "Fast cash close so you can move on",
      "Fair offer that accounts for the situation",
    ],
    faqs: [
      { q: "Do I need to evict the tenants first?", a: "No. We regularly purchase properties with tenants in place and handle the transition after closing." },
      { q: "What if there's significant damage?", a: "We buy in any condition. Tenant damage doesn't affect our ability to make you a fair offer." },
      { q: "Will the tenants know I'm selling?", a: "We handle the process discreetly and can work with your tenants professionally after closing." },
    ],
  },
  "needs-repairs": {
    icon: Wrench,
    title: "Needs Repairs",
    headline: "Your house needs work. Our offer doesn't require any.",
    description: "Major repairs can cost tens of thousands and take months to complete. Skip the contractor headaches and sell your property exactly as it stands.",
    challenges: [
      "Costly repairs that exceed your budget",
      "Finding reliable contractors",
      "Months of renovation timeline",
      "Uncertainty about ROI on repairs",
      "Traditional buyers want move-in ready homes",
    ],
    solutions: [
      "We buy in any condition — foundation, roof, mold, fire damage",
      "No inspections that kill the deal",
      "Fair offer that accounts for needed work",
      "Close fast and avoid holding costs",
      "Zero out-of-pocket expense for you",
    ],
    faqs: [
      { q: "How bad can the condition be?", a: "We've purchased homes with severe structural issues, fire damage, mold, missing systems, and more. There's no condition we haven't seen." },
      { q: "Do you still make fair offers on damaged homes?", a: "Yes. Our offers account for repair costs transparently. We show our work so you understand exactly how we arrived at the number." },
      { q: "What about code violations?", a: "We handle code violations, permits, and compliance issues. These don't prevent us from purchasing your property." },
    ],
  },
  "vacant-home": {
    icon: Building,
    title: "Vacant Home",
    headline: "Stop paying for a property that's just sitting there.",
    description: "Vacant properties cost money every month in taxes, insurance, maintenance, and risk. Convert your idle asset into cash and eliminate the ongoing burden.",
    challenges: [
      "Monthly carrying costs add up fast",
      "Risk of vandalism or squatters",
      "Insurance costs more for vacant properties",
      "Property deterioration over time",
      "Liability exposure as the owner",
    ],
    solutions: [
      "Immediate cash offer stops the financial bleeding",
      "We handle all due diligence and closing",
      "No need to travel to show the property",
      "Close remotely if needed",
      "Eliminate liability and ongoing costs",
    ],
    faqs: [
      { q: "Can we close remotely?", a: "Absolutely. We handle remote closings regularly through mobile notaries and secure document management." },
      { q: "What if the property has been vacant for years?", a: "No problem. We assess every property individually and make offers regardless of how long it's been vacant." },
      { q: "Are there any costs to me?", a: "None. We cover all closing costs, title fees, and any other expenses related to the transaction." },
    ],
  },
  "probate": {
    icon: Key,
    title: "Probate",
    headline: "Simplify probate with a guaranteed cash sale.",
    description: "The probate process is complex enough without worrying about listing, showing, and negotiating a home sale. We work within the probate timeline to provide a certain outcome.",
    challenges: [
      "Complex legal requirements and court approvals",
      "Extended timelines that delay distributions",
      "Managing property during probate proceedings",
      "Coordinating multiple parties and attorneys",
      "Market uncertainty during an already uncertain time",
    ],
    solutions: [
      "We understand probate requirements in every state we operate",
      "Cash offer provides certainty for the estate",
      "We work directly with your probate attorney",
      "Flexible closing aligned with court schedules",
      "Fair, documented offer for court approval",
    ],
    faqs: [
      { q: "Do you work with probate attorneys?", a: "Yes. We regularly coordinate with probate attorneys and can provide documentation formatted for court approval." },
      { q: "How does the timeline work with probate?", a: "We align our process with your probate schedule. Whether it's weeks or months, we work on the court's timeline." },
      { q: "What if the estate has debts or liens?", a: "We can work through title issues, liens, and estate debts as part of the closing process." },
    ],
  },
};

const SituationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = situationData[slug || ""] || situationData["inherited-property"];
  const effectiveSlug = slug || "inherited-property";
  const pageTitle = `${data.title} | Sell Your House Fast | Presidential Digs`;
  const description = data.description;

  return (
    <>
      <Seo
        title={pageTitle}
        description={description}
        canonicalPath={`/situations/${effectiveSlug}`}
      />
      <Header />
      <main>
        <section className="section-padding bg-secondary">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">{data.title}</span>
                  <h1 className="text-display text-3xl md:text-5xl text-foreground mb-6">{data.headline}</h1>
                  <p className="text-muted-foreground leading-relaxed">{data.description}</p>
                </div>
                <LeadForm variant="hero" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection>
                <h2 className="text-display text-2xl md:text-3xl text-foreground mb-6">The Challenge</h2>
                <div className="space-y-3">
                  {data.challenges.map((c) => (
                    <div key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      {c}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-display text-2xl md:text-3xl text-foreground mb-6">Our Solution</h2>
                <div className="space-y-3">
                  {data.solutions.map((s) => (
                    <div key={s} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      {s}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-narrow max-w-3xl">
            <AnimatedSection>
              <h2 className="text-display text-2xl md:text-3xl text-foreground mb-8 text-center">Common Questions</h2>
            </AnimatedSection>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-6 bg-card rounded-sm border border-border">
                    <h3 className="font-semibold text-sm text-foreground mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
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
};

export default SituationPage;
