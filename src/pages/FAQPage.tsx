import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import FinalCTA from "../components/home/FinalCTA";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Seo } from "../components/Seo";

const categories = [
  {
    name: "Process",
    questions: [
      { q: "How does the process work?", a: "Submit your property address, receive a fair cash offer within 24 hours, and choose your closing date. We handle all paperwork and closing costs." },
      { q: "How long does it take to get an offer?", a: "Most sellers receive an offer within 24 hours of submitting their property details." },
      { q: "Do I need to clean or prepare my house?", a: "No. We purchase properties exactly as they are. Leave behind anything you don't want — we'll take care of it." },
    ],
  },
  {
    name: "Pricing & Fees",
    questions: [
      { q: "How do you determine the offer price?", a: "We use comparable recent sales, property condition assessments, local market data, and repair cost estimates to formulate a fair offer." },
      { q: "Are there any fees or commissions?", a: "Zero. No agent commissions, no closing costs, no hidden fees. The offer you accept is the amount you receive." },
      { q: "Will I get market value for my home?", a: "Our offers reflect the convenience, speed, and certainty we provide. While offers may be below full retail value, you save on commissions (5–6%), repairs, holding costs, and months of uncertainty." },
    ],
  },
  {
    name: "Timeline",
    questions: [
      { q: "How fast can you close?", a: "As fast as 7 days. Most transactions close within 10–14 days. You choose the date that works for your situation." },
      { q: "Can I choose my closing date?", a: "Absolutely. We close on your timeline — whether that's next week or next month." },
      { q: "What if I need to stay in the home after closing?", a: "We can arrange leaseback agreements in certain situations. Just let us know your needs." },
    ],
  },
  {
    name: "Property Condition",
    questions: [
      { q: "Do you buy houses that need major repairs?", a: "Yes. Foundation issues, roof damage, fire damage, mold, outdated systems — we buy properties in any condition." },
      { q: "What about code violations or liens?", a: "We work with properties that have code violations, tax liens, and other title issues. Our team handles the resolution." },
    ],
  },
  {
    name: "Trust & Legitimacy",
    questions: [
      { q: "How do I know this is legitimate?", a: "We are a registered business with verifiable transaction history. We encourage you to check our reviews, ask for references, and consult your own attorney before signing anything." },
      { q: "Am I obligated to accept your offer?", a: "No. There is absolutely no obligation. If our offer doesn't work for you, simply decline — no pressure, no follow-up harassment." },
      { q: "Do you have references from past sellers?", a: "Yes. We're happy to connect you with previous sellers who can speak to their experience working with us." },
    ],
  },
];

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const toggle = (cat: string, idx: number) => {
    setOpenItems((prev) => ({ ...prev, [cat]: prev[cat] === idx ? null : idx }));
  };

  return (
    <>
      <Seo
        title="FAQ | Selling Your House to Presidential Digs"
        description="Get clear answers to the most common questions about selling your house for cash to Presidential Digs — process, pricing, timelines, and more."
        canonicalPath="/faq"
      />
      <Header />
      <main>
        <section className="section-padding bg-secondary">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">FAQ</span>
              <h1 className="text-display text-3xl md:text-5xl text-foreground mb-4">Frequently Asked Questions</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transparent answers to the questions sellers ask most.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-narrow max-w-3xl space-y-12">
            {categories.map((cat) => (
              <AnimatedSection key={cat.name}>
                <h2 className="text-display text-xl md:text-2xl text-foreground mb-4">{cat.name}</h2>
                <div className="space-y-2">
                  {cat.questions.map((faq, i) => (
                    <div key={i} className="border border-border rounded-sm overflow-hidden">
                      <button
                        onClick={() => toggle(cat.name, i)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/50 transition-colors"
                      >
                        <span className="font-medium text-sm text-foreground pr-4">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${openItems[cat.name] === i ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openItems[cat.name] === i && (
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
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
