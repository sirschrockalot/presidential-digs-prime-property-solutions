import { Link } from "react-router-dom";
import { Home, Gavel, UserX, Wrench, Building, Key } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const situations = [
  { icon: Home, title: "Inherited Property", slug: "inherited-property", desc: "Navigate probate and sell an inherited home with zero hassle." },
  { icon: Gavel, title: "Foreclosure", slug: "foreclosure", desc: "Act fast to protect your equity before the bank does." },
  { icon: UserX, title: "Bad Tenants", slug: "bad-tenants", desc: "Walk away from tenant headaches. We buy occupied properties." },
  { icon: Wrench, title: "Needs Repairs", slug: "needs-repairs", desc: "Skip the contractor. We purchase in any condition." },
  { icon: Building, title: "Vacant Home", slug: "vacant-home", desc: "Stop paying carrying costs on an empty property." },
  { icon: Key, title: "Probate", slug: "probate", desc: "Simplify the estate process with a guaranteed cash sale." },
];

const SituationsGrid = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="label-tag">Specializations</span>
          <h2 className="text-display text-3xl md:text-[3.25rem] text-foreground mb-4">
            Whatever your situation.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We've helped hundreds of homeowners in complex situations find a simple, dignified exit.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {situations.map((s, i) => (
          <AnimatedSection key={s.slug} delay={i * 0.06}>
            <Link
              to={`/situations/${s.slug}`}
              className="block p-6 md:p-7 bg-card rounded-sm gold-border-hover card-lift group"
            >
              <div className="w-9 h-9 rounded-sm bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-500">
                <s.icon className="w-4.5 h-4.5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-[15px]">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SituationsGrid;
