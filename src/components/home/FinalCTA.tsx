import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="relative overflow-hidden">
    <div className="bg-primary">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />
      
      <div className="container-narrow px-5 md:px-6 py-20 md:py-28 relative">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <span className="label-tag text-accent">Ready to Move Forward?</span>
            <h2 className="text-display text-3xl md:text-[3.5rem] text-primary-foreground mb-5">
              Request a professional{" "}
              <span className="italic">valuation</span> today.
            </h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-10 text-sm leading-relaxed">
              No commitment. Receive a fair cash offer within 24 hours and close on your timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/sell-your-house"
                className="btn-accent inline-flex items-center justify-center gap-2 px-8 py-4"
              >
                Get My Fair Offer <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center border border-primary-foreground/15 text-primary-foreground/80 px-8 py-4 font-semibold text-[13px] rounded-sm hover:bg-primary-foreground/5 transition-colors duration-300"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default FinalCTA;
