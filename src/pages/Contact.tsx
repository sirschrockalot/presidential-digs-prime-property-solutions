import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";
import AnimatedSection from "../components/AnimatedSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Seo } from "../components/Seo";

const Contact = () => (
  <>
    <Seo
      title="Contact Presidential Digs | Talk to a Home Buying Specialist"
      description="Contact Presidential Digs to discuss your property, request a cash offer, or get answers about selling your house quickly."
      canonicalPath="/contact"
    />
    <Header />
    <main>
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Get in Touch</span>
                <h1 className="text-display text-3xl md:text-5xl text-foreground mb-6">
                  Let's discuss your property.
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  Whether you're ready to sell or just exploring your options, we're here to provide honest, no-pressure guidance.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Phone, label: "Phone", value: "414 409 5086", href: "tel:+14144095086" },
                    { icon: Mail, label: "Email", value: "deals@presidentialdigs.com", href: "mailto:deals@presidentialdigs.com" },
                    // TODO:CONTENT - confirm how you want to describe your primary office / footprint
                    // TODO_PRODUCTION_OFFICE_COPY - confirm how you want to describe your primary office / footprint
                    { icon: MapPin, label: "Office", value: "Serving motivated home sellers across Wisconsin, Georgia, Tennessee, Ohio, North Carolina, and Florida" },
                    // TODO_PRODUCTION_HOURS - confirm your standard availability / call center hours
                    { icon: Clock, label: "Hours", value: "Mon–Fri 8am–7pm, Sat 9am–5pm" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-card flex items-center justify-center shrink-0 border border-border">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-foreground hover:text-accent transition-colors">{item.value}</a>
                        ) : (
                          <span className="text-sm text-foreground">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <LeadForm variant="hero" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
