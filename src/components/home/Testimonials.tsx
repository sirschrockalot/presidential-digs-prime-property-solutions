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
  { quote: "They treated us with respect during the hardest time of our lives. The process was seamless and fair.", name: "Maria S.", location: "Houston, TX", situation: "Inherited Property" },
  { quote: "After two failed listings with agents, Presidential Digs closed in 8 days. No repairs, no showings. Just done.", name: "James W.", location: "Atlanta, GA", situation: "Needed Repairs" },
  { quote: "We were facing foreclosure with 3 weeks left. They closed in 6 days and saved our credit. Genuinely grateful.", name: "Robert & Lisa K.", location: "Phoenix, AZ", situation: "Foreclosure" },
];

const Testimonials = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        {/* Left: Testimonials */}
        <div className="md:col-span-7">
          <AnimatedSection>
            <span className="label-tag">Seller Experiences</span>
            <h2 className="text-display text-3xl md:text-[3.25rem] text-foreground mb-10 md:mb-12">
              In their words.
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="p-6 md:p-8 bg-card rounded-sm border border-border">
                  <p className="text-foreground leading-relaxed mb-5 text-display text-lg md:text-xl italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-sm text-foreground">{t.name}</span>
                      <span className="text-sm text-muted-foreground ml-1.5">— {t.location}</span>
                    </div>
                    <span className="text-[11px] font-medium text-accent bg-accent/10 px-2 py-1 rounded-sm">{t.situation}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Right: Acquisitions */}
        <div className="md:col-span-5">
          <AnimatedSection>
            <span className="label-tag">Track Record</span>
            <h3 className="text-display text-xl md:text-2xl text-foreground mb-6">Recent Closings</h3>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-card border border-border rounded-sm overflow-hidden">
              {acquisitions.map((a, i) => (
                <div key={a.city} className={`flex items-center justify-between px-5 py-4 ${i < acquisitions.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground/50" />
                    <div>
                      <span className="text-sm font-medium text-foreground block">{a.city}</span>
                      <span className="text-[11px] text-muted-foreground">{a.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-success" />
                    <span className="font-mono font-bold text-sm tabular-nums text-foreground">{a.days}</span>
                    <span className="text-[11px] text-muted-foreground">days</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
