import { Link } from "react-router-dom";
import { Home, Gavel, UserX, Wrench, Building, Key, HeartCrack, Plane, Receipt, ArrowDownCircle, BriefcaseBusiness, UserMinus, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import FinalCTA from "../components/home/FinalCTA";
import { Seo } from "../components/Seo";

const situations = [
  { icon: Home, title: "Inherited Property", slug: "inherited-property", desc: "Navigate probate and sell an inherited home with zero hassle." },
  { icon: Gavel, title: "Foreclosure", slug: "foreclosure", desc: "Act fast to protect your equity before the bank does." },
  { icon: UserX, title: "Bad Tenants", slug: "bad-tenants", desc: "Walk away from tenant headaches. We buy occupied properties." },
  { icon: Wrench, title: "Needs Repairs", slug: "needs-repairs", desc: "Skip the contractor. We purchase in any condition." },
  { icon: Building, title: "Vacant Home", slug: "vacant-home", desc: "Stop paying carrying costs on an empty property." },
  { icon: Key, title: "Probate", slug: "probate", desc: "Simplify the estate process with a guaranteed cash sale." },
  { icon: HeartCrack, title: "Divorce", slug: "divorce", desc: "Sell quickly and split assets fairly during a difficult time." },
  { icon: Plane, title: "Relocating", slug: "relocating", desc: "Moving for work or life? Get a fast cash offer before you go." },
  { icon: Receipt, title: "Behind on Taxes", slug: "behind-on-taxes", desc: "Resolve tax liens and back taxes with a clean cash sale." },
  { icon: ArrowDownCircle, title: "Downsizing", slug: "downsizing", desc: "Simplify your life and unlock your home equity fast." },
  { icon: BriefcaseBusiness, title: "Tired Landlord", slug: "tired-landlord", desc: "Done being a landlord? We'll buy your rental property as-is." },
  { icon: UserMinus, title: "Sell Without a Realtor", slug: "sell-without-realtor", desc: "Skip the commissions, showings, and months of waiting." },
];

const baseUrl = import.meta.env.VITE_SITE_URL || "";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Situations", item: `${baseUrl}/situations` },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Situations We Handle",
  description: "All property situations Presidential Digs handles with fast cash offers.",
  numberOfItems: situations.length,
  itemListElement: situations.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `${baseUrl}/situations/${s.slug}`,
  })),
};

const SituationsIndex = () => (
  <>
    <Seo
      title="Situations We Handle | Presidential Digs"
      description="Whatever your situation — foreclosure, divorce, inherited property, bad tenants, or more — we provide a fast, fair cash offer so you can move forward."
      canonicalPath="/situations"
      jsonLd={[breadcrumbJsonLd, itemListJsonLd]}
    />
    <Header />
    <main>
      {/* Hero */}
      <section className="relative section-padding bg-secondary overflow-hidden">
        {/* Subtle radial dot texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container-narrow relative">
          {/* Breadcrumb */}
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                </li>
                <li><ChevronRight className="w-3 h-3" /></li>
                <li className="text-foreground font-medium" aria-current="page">Situations</li>
              </ol>
            </nav>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-2xl mb-14 md:mb-16">
              <span className="label-tag">Specializations</span>
              <h1 className="text-display text-3xl md:text-5xl text-foreground mb-4">
                Whatever your situation, <span className="italic text-accent">we can help.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                We've helped hundreds of homeowners in complex situations find a simple, dignified path forward. Select your situation below to learn how we can help.
              </p>
            </div>
          </AnimatedSection>

          {/* Divider accent line */}
          <div className="h-px w-16 bg-accent/40 mb-10 md:mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {situations.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.04}>
                <Link
                  to={`/situations/${s.slug}`}
                  className="group flex flex-col justify-between p-6 md:p-7 bg-card rounded-sm gold-border-hover card-lift"
                >
                  <div>
                    <div className="w-9 h-9 rounded-sm bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-500">
                      <s.icon className="w-4.5 h-4.5 text-accent" />
                    </div>
                    <h2 className="font-semibold text-foreground mb-2 text-[15px]">{s.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-4 text-accent text-xs font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-500">
                    Learn more <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
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

export default SituationsIndex;
