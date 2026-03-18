import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";
import AnimatedSection from "../components/AnimatedSection";
import FinalCTA from "../components/home/FinalCTA";
import { Home, Gavel, UserX, Wrench, Building, Key, HeartCrack, Plane, Receipt, ArrowDownCircle, BriefcaseBusiness, UserMinus, Check, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import BreadcrumbNav, { breadcrumbJsonLd } from "../components/BreadcrumbNav";
import PageHero from "../components/PageHero";

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
  "divorce": {
    icon: HeartCrack,
    title: "Divorce",
    headline: "Selling during a divorce doesn't have to add more stress.",
    description: "Dividing assets is one of the hardest parts of divorce. A fast, fair cash offer on your home lets both parties move forward without the uncertainty of a traditional listing.",
    challenges: [
      "Both parties need to agree on a sale price",
      "Lengthy listing process delays settlement",
      "Ongoing mortgage payments during proceedings",
      "Emotional difficulty of showings and open houses",
      "Market fluctuations can derail negotiations",
    ],
    solutions: [
      "Fair cash offer both parties can evaluate quickly",
      "Close in days, not months — accelerate your settlement",
      "No showings, no strangers walking through your home",
      "Guaranteed price removes market uncertainty",
      "We work with both attorneys to ensure a smooth close",
    ],
    faqs: [
      { q: "Do both spouses need to agree?", a: "Yes, but our transparent process and fair offer make it easier for both parties to reach agreement quickly." },
      { q: "Can you work with our attorneys?", a: "Absolutely. We coordinate with both legal teams to ensure the transaction aligns with your divorce agreement." },
      { q: "How fast can we close?", a: "We can close in as few as 7 days, helping you finalize the property division and move forward." },
    ],
  },
  "relocating": {
    icon: Plane,
    title: "Relocating",
    headline: "Moving for work or life? Sell your home before you go.",
    description: "Job transfers, military relocations, and life changes don't wait for the housing market. Get a guaranteed cash offer so you can focus on your next chapter.",
    challenges: [
      "Tight timeline to start a new job or assignment",
      "Managing a home sale from another city or state",
      "Carrying two mortgages during a traditional listing",
      "Risk of the home sitting on the market for months",
      "Coordinating showings when you've already moved",
    ],
    solutions: [
      "Cash offer within 24 hours of walkthrough",
      "Close on your schedule — even before your move date",
      "No need to be present for closing",
      "Eliminate the risk of paying two mortgages",
      "Skip staging, repairs, and open houses entirely",
    ],
    faqs: [
      { q: "Can I close remotely?", a: "Yes. We handle remote closings regularly with mobile notaries and secure document delivery." },
      { q: "What if I've already moved?", a: "No problem. We can do a virtual walkthrough and handle everything without you needing to return." },
      { q: "How quickly can you make an offer?", a: "We typically provide a cash offer within 24 hours of viewing the property." },
    ],
  },
  "behind-on-taxes": {
    icon: Receipt,
    title: "Behind on Taxes",
    headline: "Owe back taxes? A cash sale can clear the slate.",
    description: "Falling behind on property taxes can lead to liens, penalties, and even a tax sale. Selling your home for cash lets you settle your tax debt and protect your equity.",
    challenges: [
      "Accumulating penalties and interest",
      "Risk of tax lien or tax sale",
      "Difficulty selling with a tax lien on title",
      "Traditional buyers avoid properties with tax issues",
      "Stress of dealing with the county or IRS",
    ],
    solutions: [
      "We purchase homes with tax liens and back taxes",
      "Back taxes are settled at closing from proceeds",
      "Fast close stops penalties from growing",
      "No need to resolve liens before selling",
      "We handle title clearing and all paperwork",
    ],
    faqs: [
      { q: "Can I sell if I owe back taxes?", a: "Yes. Owed taxes are paid from the sale proceeds at closing. We handle the coordination with the taxing authority." },
      { q: "What if there's a tax lien on my property?", a: "We buy properties with tax liens regularly. The lien is satisfied through the closing process." },
      { q: "Will I still get money from the sale?", a: "In most cases, yes. After taxes and liens are satisfied, the remaining equity is yours." },
    ],
  },
  "downsizing": {
    icon: ArrowDownCircle,
    title: "Downsizing",
    headline: "Ready to simplify? Sell your home fast and move on.",
    description: "Whether you're retiring, becoming an empty nester, or just ready for less space, we make it easy to sell your current home quickly so you can start your next chapter.",
    challenges: [
      "Large home is expensive to maintain",
      "Traditional listing takes months of showings",
      "Need sale proceeds to fund your next home",
      "Decades of belongings to sort through",
      "Emotional attachment makes the process harder",
    ],
    solutions: [
      "Fast cash offer lets you plan your move with certainty",
      "Close on your timeline — no pressure to rush out",
      "Leave behind what you don't want — we handle cleanout",
      "No repairs or updates needed before selling",
      "Compassionate process that respects your history",
    ],
    faqs: [
      { q: "Do I need to empty the house first?", a: "No. Leave behind anything you don't want to take. We handle all cleanout after closing." },
      { q: "Can I stay until my new place is ready?", a: "We offer flexible closing dates and can work with your timeline to ensure a smooth transition." },
      { q: "Is a cash offer less than market value?", a: "Our offers are fair and transparent. You save on realtor commissions, repairs, and months of carrying costs." },
    ],
  },
  "tired-landlord": {
    icon: BriefcaseBusiness,
    title: "Tired Landlord",
    headline: "Done being a landlord? We'll take it from here.",
    description: "Rental property management is a full-time job. Between maintenance, tenants, and regulations, it's no wonder many landlords are ready to sell. We buy rental properties as-is.",
    challenges: [
      "Constant maintenance calls and repair costs",
      "Dealing with difficult or non-paying tenants",
      "Increasing regulations and compliance requirements",
      "Property management fees eating into returns",
      "Difficulty selling with tenants in place",
    ],
    solutions: [
      "We buy rental properties with tenants in place",
      "No need to renovate or make repairs",
      "Skip the eviction process — we handle it",
      "Fast cash close so you can reinvest or retire",
      "Fair offer based on the property, not its problems",
    ],
    faqs: [
      { q: "Do I need to evict tenants first?", a: "No. We purchase tenant-occupied properties and handle the tenant relationship after closing." },
      { q: "What if the property needs work?", a: "We buy in any condition. Deferred maintenance doesn't affect our ability to close." },
      { q: "Can I sell multiple rental properties?", a: "Absolutely. We can make offers on your entire portfolio and close on a schedule that works for you." },
    ],
  },
  "sell-without-realtor": {
    icon: UserMinus,
    title: "Sell Without a Realtor",
    headline: "Skip the commissions. Sell direct for cash.",
    description: "Realtor commissions, months of showings, and deal-killing contingencies aren't your only option. Sell directly to us and keep more money in your pocket.",
    challenges: [
      "6% realtor commissions eat into your equity",
      "Months of showings and open houses",
      "Buyer financing falls through at the last minute",
      "Inspection and appraisal contingencies kill deals",
      "Repairs demanded after inspection",
    ],
    solutions: [
      "Zero commissions — sell direct to us",
      "No showings, no open houses, no strangers in your home",
      "Cash offer means no financing contingencies",
      "No inspections that derail the sale",
      "Close in as few as 7 days",
    ],
    faqs: [
      { q: "How do you determine your offer price?", a: "We analyze comparable sales, property condition, and market data. Our process is fully transparent — we show our work." },
      { q: "Is it really free? No fees at all?", a: "Correct. No commissions, no closing costs, no hidden fees. The offer we make is the amount you receive." },
      { q: "What's the catch?", a: "There isn't one. We make our money by renovating and reselling. You get speed, certainty, and simplicity." },
    ],
  },
};

const SituationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = situationData[slug || ""] || situationData["inherited-property"];
  const effectiveSlug = slug || "inherited-property";
  const pageTitle = `${data.title} | Sell Your House Fast | Presidential Digs`;
  const description = data.description;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Situations", href: "/situations" },
    { label: data.title },
  ];

  return (
    <>
      <Seo
        title={pageTitle}
        description={description}
        canonicalPath={`/situations/${effectiveSlug}`}
        jsonLd={breadcrumbJsonLd(breadcrumbs)}
      />
      <Header />
      <main>
        <PageHero>
          <BreadcrumbNav items={breadcrumbs} />
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
        </PageHero>

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
