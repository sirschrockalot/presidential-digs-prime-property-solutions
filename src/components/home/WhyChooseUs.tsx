import { Shield, Zap, Heart, Building2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const reasons = [
  { icon: Zap, title: "Speed & Certainty", desc: "Average closing time of 8.4 days. No financing contingencies." },
  { icon: Shield, title: "Transparent Process", desc: "No hidden fees, no renegotiations. The offer you accept is the amount you receive." },
  { icon: Heart, title: "Empathetic Approach", desc: "We treat every seller with dignity. Your situation is understood, not exploited." },
  { icon: Building2, title: "Local Expertise", desc: "Specialists in every market who understand your local real estate dynamics." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <AnimatedSection className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <span className="label-tag">The Difference</span>
            <h2 className="text-display text-3xl md:text-[3.25rem] text-foreground mb-4">
              Why sellers choose us.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We've built our reputation on doing what we say. Every time.
            </p>
          </div>
        </AnimatedSection>

        <div className="md:col-span-8 space-y-4">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.08}>
              <div className="flex items-start gap-5 p-6 md:p-8 bg-card rounded-sm gold-border-hover group">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-500">
                  <r.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
