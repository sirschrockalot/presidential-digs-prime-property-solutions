import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";

const FinalCTA = () => (
  <section className="section-padding bg-primary">
    <div className="container-narrow text-center">
      <AnimatedSection>
        <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Ready to Move Forward?</span>
        <h2 className="text-display text-3xl md:text-5xl text-primary-foreground mb-6">
          Request a professional valuation today.
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
          No commitment, no pressure. Receive a fair cash offer within 24 hours and close on your timeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/sell-your-house"
            className="bg-accent text-accent-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-opacity"
          >
            Get My Fair Offer
          </Link>
          <a
            href="tel:+15551234567"
            className="border border-primary-foreground/20 text-primary-foreground px-8 py-4 font-semibold text-sm rounded-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Call (555) 123-4567
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTA;
