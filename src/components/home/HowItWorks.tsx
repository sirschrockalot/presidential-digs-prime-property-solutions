import AnimatedSection from "../AnimatedSection";

const steps = [
  { num: "01", title: "Request", desc: "Share your property address and basic details. It takes 60 seconds." },
  { num: "02", title: "Review", desc: "We analyze comparable sales and present a fair, transparent cash offer within 24 hours." },
  { num: "03", title: "Close", desc: "Choose your closing date. We handle all paperwork, pay closing costs, and you walk away with cash." },
];

const HowItWorks = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="label-tag">Process</span>
          <h2 className="text-display text-3xl md:text-[3.25rem] text-foreground">
            Three steps to certainty.
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-0 md:gap-0">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.1}>
            <div className={`relative p-8 md:p-10 ${i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""}`}>
              <span className="font-mono text-[3.5rem] md:text-[4.5rem] font-bold text-border/80 block leading-none mb-4 tabular-nums select-none">{step.num}</span>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
