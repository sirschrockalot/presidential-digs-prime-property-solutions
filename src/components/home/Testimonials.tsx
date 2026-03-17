import AnimatedSection from "../AnimatedSection";
import { MapPin, Clock } from "lucide-react";

const acquisitions = [
  { city: "Austin, TX", days: 6, type: "Inherited Property" },
  { city: "Phoenix, AZ", days: 9, type: "Foreclosure Prevention" },
  { city: "Atlanta, GA", days: 4, type: "Vacant Home" },
  { city: "Charlotte, NC", days: 7, type: "Needed Repairs" },
  { city: "Dallas, TX", days: 5, type: "Bad Tenants" },
];

const testimonials = [
  { quote: "They treated us with respect during the hardest time of our lives. The process was seamless and fair.", name: "Maria S.", location: "Houston, TX" },
  { quote: "After two failed listings with agents, Presidential Digs closed in 8 days. No repairs, no showings. Just done.", name: "James W.", location: "Atlanta, GA" },
];

const Testimonials = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">Track Record</span>
          <h2 className="text-display text-3xl md:text-5xl text-foreground">Recent Acquisitions</h2>
        </div>
      </AnimatedSection>

      {/* Acquisitions table */}
      <AnimatedSection>
        <div className="bg-card border border-border rounded-sm overflow-hidden mb-14">
          <div className="grid grid-cols-3 px-6 py-3 border-b border-border text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span>Location</span>
            <span>Situation</span>
            <span className="text-right">Days to Close</span>
          </div>
          {acquisitions.map((a) => (
            <div key={a.city} className="grid grid-cols-3 px-6 py-4 border-b border-border last:border-0 items-center">
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" /> {a.city}
              </span>
              <span className="text-sm text-muted-foreground">{a.type}</span>
              <span className="text-right flex items-center gap-1.5 justify-end text-sm">
                <Clock className="w-3.5 h-3.5 text-success" />
                <span className="font-mono font-semibold tabular-nums text-foreground">{a.days}</span>
                <span className="text-muted-foreground">days</span>
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="p-8 bg-card rounded-sm border border-border">
              <p className="text-foreground leading-relaxed mb-6 italic text-display text-lg">"{t.quote}"</p>
              <div>
                <span className="font-semibold text-sm text-foreground">{t.name}</span>
                <span className="text-sm text-muted-foreground ml-2">— {t.location}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
