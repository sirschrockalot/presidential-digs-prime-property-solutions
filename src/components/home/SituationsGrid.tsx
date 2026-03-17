import { Link } from "react-router-dom";
import { Home, Gavel, UserX, Wrench, Building, Key } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const situations = [
  { icon: Home, title: "Inherited Property", slug: "inherited-property", desc: "Navigating probate while managing an inherited home you don't need." },
  { icon: Gavel, title: "Foreclosure", slug: "foreclosure", desc: "Facing foreclosure and need to act quickly to protect your equity." },
  { icon: UserX, title: "Bad Tenants", slug: "bad-tenants", desc: "Dealing with problem tenants and ready to walk away from the stress." },
  { icon: Wrench, title: "Needs Repairs", slug: "needs-repairs", desc: "Can't afford or don't want to invest in costly repairs before selling." },
  { icon: Building, title: "Vacant Home", slug: "vacant-home", desc: "Carrying costs on a property that's sitting empty and unproductive." },
  { icon: Key, title: "Probate", slug: "probate", desc: "Simplify the probate process with a guaranteed cash sale." },
];

const SituationsGrid = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">We Specialize In</span>
          <h2 className="text-display text-3xl md:text-5xl text-foreground">Whatever Your Situation</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every property and every seller has a unique story. We've helped hundreds of homeowners in complex situations find a simple, dignified exit.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {situations.map((s, i) => (
          <AnimatedSection key={s.slug} delay={i * 0.06}>
            <Link
              to={`/situations/${s.slug}`}
              className="block p-6 bg-card rounded-sm gold-border-hover card-lift group"
            >
              <s.icon className="w-6 h-6 text-accent mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="text-xs font-semibold text-accent mt-4 block uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </span>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SituationsGrid;
