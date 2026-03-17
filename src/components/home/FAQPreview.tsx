import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How do you determine your offer price?", a: "We evaluate comparable recent sales, property condition, location, and current market data to present a fair, competitive offer. There's no obligation to accept." },
  { q: "Do I need to make any repairs before selling?", a: "No. We purchase properties in any condition — structural issues, cosmetic damage, outdated systems. You don't need to spend a single dollar." },
  { q: "How fast can you actually close?", a: "We can close in as few as 7 days. Most transactions complete within 10–14 days. You choose the timeline that works best for your situation." },
  { q: "Are there any fees or commissions?", a: "None. We pay all standard closing costs. The offer you accept is the amount you receive. Fees paid by seller: $0.00." },
];

const FAQPreview = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">Common Questions</span>
            <h2 className="text-display text-3xl md:text-5xl text-foreground">Frequently Asked Questions</h2>
          </div>
        </AnimatedSection>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-sm text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-10">
            <Link to="/faq" className="text-sm font-semibold text-accent hover:underline underline-offset-4">
              View All Questions →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQPreview;
