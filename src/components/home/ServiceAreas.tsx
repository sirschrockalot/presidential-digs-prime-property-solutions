import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import { MapPin } from "lucide-react";

// BUSINESS_APPROVAL_REQUIRED: keep this list in sync with your actual active markets.
const states = [
  { name: "Wisconsin", slug: "wisconsin", cities: ["Milwaukee", "Madison", "Green Bay"] },
  { name: "Georgia", slug: "georgia", cities: ["Atlanta", "Savannah", "Augusta"] },
  { name: "Tennessee", slug: "tennessee", cities: ["Nashville", "Memphis", "Knoxville"] },
  { name: "Ohio", slug: "ohio", cities: ["Columbus", "Cleveland", "Cincinnati"] },
  { name: "North Carolina", slug: "north-carolina", cities: ["Charlotte", "Raleigh", "Greensboro"] },
  { name: "Florida", slug: "florida", cities: ["Tampa", "Orlando", "Jacksonville"] },
];

const ServiceAreas = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12 gap-4">
          <div>
            <span className="label-tag">Coverage</span>
            <h2 className="text-display text-3xl md:text-[3.25rem] text-foreground">
              Where we operate.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Local specialists in every market who understand your real estate dynamics.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {states.map((state, i) => (
          <AnimatedSection key={state.slug} delay={i * 0.05}>
            <Link
              to={`/locations/${state.slug}`}
              className="flex items-center justify-between p-5 bg-card rounded-sm gold-border-hover group"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <div>
                  <h3 className="font-semibold text-foreground text-[15px]">{state.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{state.cities.join(" · ")}</p>
                </div>
              </div>
              <span className="text-muted-foreground/30 group-hover:text-accent transition-colors duration-300 text-lg">→</span>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreas;
