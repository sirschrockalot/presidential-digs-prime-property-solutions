import { Shield, Zap, Heart, Building2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const reasons = [
  { icon: Zap, title: "Speed & Certainty", desc: "Average closing time of 8.4 days. No financing contingencies or buyer fall-through." },
  { icon: Shield, title: "Transparent Process", desc: "No hidden fees, no last-minute renegotiations. The offer you receive is the offer you get." },
  { icon: Heart, title: "Empathetic Approach", desc: "We understand you're going through a transition. Our team treats every seller with dignity and respect." },
  { icon: Building2, title: "Local Expertise", desc: "We operate in multiple markets with specialists who understand your local real estate dynamics." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">The Difference</span>
          <h2 className="text-display text-3xl md:text-5xl text-foreground">Why Sellers Choose Presidential Digs</h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.08}>
            <div className="flex items-start gap-5 p-6 bg-card rounded-sm gold-border-hover">
              <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                <r.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
