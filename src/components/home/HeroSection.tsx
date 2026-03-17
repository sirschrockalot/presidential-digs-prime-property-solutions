import { motion } from "framer-motion";
import LeadForm from "../LeadForm";

const HeroSection = () => (
  <section className="relative bg-secondary py-16 md:py-28 overflow-hidden">
    <div className="container-narrow px-6 grid md:grid-cols-12 gap-10 md:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-7"
      >
        <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
          Trusted Nationwide
        </span>
        <h1 className="text-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
          The most certain way to{" "}
          <span className="italic">sell your home.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
          No repairs. No agents. No uncertainty. We provide a professional cash exit for homeowners who value speed and simplicity.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {["Close in 7 days", "Zero fees", "As-is condition"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-5"
      >
        <LeadForm variant="hero" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
