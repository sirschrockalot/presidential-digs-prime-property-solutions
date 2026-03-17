import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import { MapPin } from "lucide-react";

const states = [
  { name: "Texas", slug: "texas", cities: ["Houston", "Dallas", "Austin", "San Antonio"] },
  { name: "Georgia", slug: "georgia", cities: ["Atlanta", "Savannah", "Augusta"] },
  { name: "Arizona", slug: "arizona", cities: ["Phoenix", "Tucson", "Mesa"] },
  { name: "North Carolina", slug: "north-carolina", cities: ["Charlotte", "Raleigh", "Greensboro"] },
  { name: "Florida", slug: "florida", cities: ["Tampa", "Orlando", "Jacksonville"] },
  { name: "Tennessee", slug: "tennessee", cities: ["Nashville", "Memphis", "Knoxville"] },
];

const ServiceAreas = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">Where We Operate</span>
          <h2 className="text-display text-3xl md:text-5xl text-foreground">Service Areas</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We buy houses across the country. Our local specialists understand your market.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {states.map((state, i) => (
          <AnimatedSection key={state.slug} delay={i * 0.06}>
            <Link
              to={`/locations/${state.slug}`}
              className="block p-6 bg-card rounded-sm gold-border-hover card-lift group"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-accent" />
                <h3 className="font-semibold text-foreground">{state.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{state.cities.join(" · ")}</p>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreas;
