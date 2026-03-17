import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import FinalCTA from "../components/home/FinalCTA";
import { Target, Heart, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "Every offer is backed by data, market analysis, and local expertise. We don't guess — we calculate." },
  { icon: Heart, title: "Empathy", desc: "We understand that selling a home during a transition is emotional. We treat every conversation with care and respect." },
  { icon: Shield, title: "Integrity", desc: "No hidden fees, no bait-and-switch, no last-minute renegotiations. Our word is our contract." },
];

const About = () => (
  <>
    <Header />
    <main>
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">About Us</span>
              <h1 className="text-display text-3xl md:text-5xl text-foreground mb-6">
                Built on trust. <span className="italic">Driven by certainty.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Presidential Digs was founded with a simple conviction: homeowners in difficult transitions deserve a dignified, professional option to sell their property — not a high-pressure pitch from a speculator.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-display text-2xl md:text-4xl text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started after witnessing too many homeowners get taken advantage of during some of the most stressful moments of their lives — navigating probate, facing foreclosure, or managing properties they couldn't afford to repair.
                </p>
                <p>
                  The real estate industry offered two extremes: the traditional agent process (slow, expensive, uncertain) or the "cash for houses" operator (aggressive, lowball, unreliable). We believed there was room for a third option — one that combined institutional-grade professionalism with genuine human compassion.
                </p>
                <p>
                  Today, we've helped hundreds of families across multiple states find simple, fair exits from complicated property situations. Our average closing time is 8.4 days. Our seller satisfaction rating speaks for itself.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-display text-2xl md:text-4xl text-foreground">Our Values</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="p-8 bg-secondary rounded-sm text-center">
                  <v.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { num: "500+", label: "Homes Purchased" },
                { num: "8.4", label: "Avg. Days to Close" },
                { num: "$0", label: "Fees to Seller" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-3xl md:text-4xl font-bold text-foreground font-mono tabular-nums">{stat.num}</span>
                  <span className="block text-sm text-muted-foreground mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default About;
