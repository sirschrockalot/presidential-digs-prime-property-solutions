import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";
import AnimatedSection from "../components/AnimatedSection";
import FinalCTA from "../components/home/FinalCTA";
import { MapPin, Check } from "lucide-react";
import { Seo } from "../components/Seo";
import BreadcrumbNav, { breadcrumbJsonLd } from "../components/BreadcrumbNav";
import PageHero from "../components/PageHero";

const locationData: Record<string, {
  name: string;
  type: "state" | "city";
  cities?: string[];
  state?: string;
}> = {
  "wisconsin": { name: "Wisconsin", type: "state", cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha"] },
  "georgia": { name: "Georgia", type: "state", cities: ["Atlanta", "Savannah", "Augusta", "Macon"] },
  "tennessee": { name: "Tennessee", type: "state", cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"] },
  "ohio": { name: "Ohio", type: "state", cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo"] },
  "north-carolina": { name: "North Carolina", type: "state", cities: ["Charlotte", "Raleigh", "Greensboro", "Durham"] },
  "florida": { name: "Florida", type: "state", cities: ["Tampa", "Orlando", "Jacksonville", "Miami"] },
};

const situations = [
  { label: "Inherited Property", slug: "inherited-property" },
  { label: "Foreclosure", slug: "foreclosure" },
  { label: "Bad Tenants", slug: "bad-tenants" },
  { label: "Needs Repairs", slug: "needs-repairs" },
  { label: "Vacant Home", slug: "vacant-home" },
  { label: "Probate", slug: "probate" },
];

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = locationData[slug || ""] || locationData["wisconsin"];
  const effectiveSlug = slug || "wisconsin";
  const pageTitle = `Sell Your House Fast in ${data.name} | Presidential Digs`;
  const description = `Get a fair cash offer for your home in ${data.name}. We buy houses as-is with no repairs, fees, or showings required.`;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: data.name },
  ];

  return (
    <>
      <Seo
        title={pageTitle}
        description={description}
        canonicalPath={`/locations/${effectiveSlug}`}
        jsonLd={breadcrumbJsonLd(breadcrumbs)}
      />
      <Header />
      <main>
        <PageHero>
          <BreadcrumbNav items={breadcrumbs} />
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-accent font-semibold tracking-widest uppercase text-xs">We Buy Houses in {data.name}</span>
                </div>
                <h1 className="text-display text-3xl md:text-5xl text-foreground mb-6">
                  Sell your {data.name} home fast. <span className="italic">For cash.</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our {data.name} specialists understand the local market and provide fair, competitive cash offers. No agents, no repairs, no fees — just a simple, dignified sale.
                </p>
                <div className="space-y-2">
                  {["Fair cash offer within 24 hours", "Close in as few as 7 days", "We pay all closing costs", "Buy in any condition"].map((b) => (
                    <div key={b} className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-success shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
              <LeadForm variant="hero" />
            </div>
          </AnimatedSection>
        </PageHero>

        {data.cities && (
          <section className="section-padding bg-card">
            <div className="container-narrow">
              <AnimatedSection>
                <h2 className="text-display text-2xl md:text-3xl text-foreground mb-8 text-center">Cities We Serve in {data.name}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.cities.map((city) => (
                    <div key={city} className="flex items-center gap-3 p-4 bg-secondary rounded-sm border border-border">
                      <MapPin className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-medium text-sm text-foreground">{city}, {data.name}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        <section className="section-padding bg-secondary">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-display text-2xl md:text-3xl text-foreground mb-8 text-center">Situations We Help With in {data.name}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {situations.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/situations/${s.slug}`}
                    className="p-4 bg-card rounded-sm gold-border-hover card-lift text-sm font-medium text-foreground text-center"
                  >
                    {s.label}
                  </Link>
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
};

export default LocationPage;
