import { motion } from "framer-motion";
import LeadForm from "../LeadForm";

// TODO_PRODUCTION_STATS - replace these with verified, up-to-date company metrics
const stats = [
  { value: "500+", label: "Homes Purchased" },
  { value: "8.4", label: "Avg. Days to Close" },
  { value: "$0", label: "Seller Fees" },
];

const HeroSection = () => (
  <section className="relative bg-primary overflow-hidden">
    {/* Subtle texture overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
      backgroundSize: '24px 24px',
    }} />
    
    <div className="container-narrow px-5 md:px-6 pt-12 pb-16 md:pt-20 md:pb-28 relative">
      <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 pt-2 md:pt-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/10 rounded-sm mb-6 md:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {/* TODO_PRODUCTION_COMPANY_TAGLINE - confirm tagline and founding year */}
            <span className="text-primary-foreground/70 text-xs font-semibold tracking-[0.15em] uppercase">Trusted Nationwide · Est. 2018</span>
          </motion.div>

          <h1 className="text-display text-[2.25rem] md:text-6xl lg:text-[4.5rem] text-primary-foreground mb-5 md:mb-7">
            A dignified exit{" "}
            <br className="hidden md:block" />
            from your{" "}
            <span className="italic text-accent">property.</span>
          </h1>
          
          <p className="text-base md:text-lg text-primary-foreground/60 max-w-lg mb-8 md:mb-12 leading-relaxed">
            No repairs. No agents. No uncertainty. We provide a professional cash exit for homeowners who value speed, simplicity, and certainty.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 md:gap-12 border-t border-primary-foreground/10 pt-6 md:pt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="block font-mono text-2xl md:text-3xl font-bold text-primary-foreground tabular-nums tracking-tight">{stat.value}</span>
                <span className="text-primary-foreground/40 text-xs font-medium mt-1 block">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <LeadForm variant="hero" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
