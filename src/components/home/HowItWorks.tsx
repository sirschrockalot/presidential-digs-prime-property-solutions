import { Send, FileSearch, Banknote } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const steps = [
  { num: "01", icon: Send, title: "Request", desc: "Share your property address. It takes 60 seconds and there's zero obligation." },
  { num: "02", icon: FileSearch, title: "Review", desc: "We analyze your property and present a fair, transparent cash offer within 24 hours." },
  { num: "03", icon: Banknote, title: "Close", desc: "Choose your closing date. We handle the paperwork, pay all closing costs, and you walk away with cash." },
];

const HowItWorks = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">Simple Process</span>
          <h2 className="text-display text-3xl md:text-5xl text-foreground">How It Works</h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.1}>
            <div className="gold-border-hover card-lift p-8 rounded-sm bg-card">
              <span className="font-mono text-3xl font-bold text-accent/30 block mb-4 tabular-nums">{step.num}</span>
              <step.icon className="w-6 h-6 text-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
