import { DollarSign, Clock, Home } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const items = [
  { icon: DollarSign, label: "No Commissions", desc: "Zero agent fees or hidden costs" },
  { icon: Home, label: "As-Is Purchase", desc: "No repairs or cleaning required" },
  { icon: Clock, label: "7-Day Closing", desc: "On your timeline, as fast as a week" },
];

const TrustBar = () => (
  <section className="border-y border-border bg-card">
    <div className="container-narrow px-6 py-10 md:py-12 grid md:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <AnimatedSection key={item.label} delay={i * 0.05}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground">{item.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default TrustBar;
