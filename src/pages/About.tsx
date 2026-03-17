import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import FinalCTA from "../components/home/FinalCTA";
import { Heart, Star, Lightbulb, Sparkles, HandHeart, Users } from "lucide-react";
import { Seo } from "../components/Seo";

const values = [
  { icon: Heart, title: "Family First", desc: "Treat every customer like they are part of our family." },
  { icon: Star, title: "Extraordinary Quality", desc: "Deliver extraordinary quality and design at every price point." },
  { icon: Lightbulb, title: "Creative Solutions", desc: "Provide creative solutions to our customers' problems." },
  { icon: Sparkles, title: "The WOW Factor", desc: "Provide the \"WOW\" factor to all customers." },
  { icon: HandHeart, title: "Community", desc: "Give back to our community and support the veteran community." },
];

const team = [
  {
    name: "Nicole Schrock",
    role: "CEO & Head Designer",
    bio: "I have lived in Waukesha my whole life. I have always had a knack for design and decorating. I love spending time with my family and especially my 3 boys.",
    initials: "NS",
  },
  {
    name: "Joel Schrock",
    role: "President",
    bio: "While I grew up in Nevada, I have lived in Waukesha for the last 20 years. I have always had a passion for real estate and look for every chance I get to spread an entrepreneurial spirit to my children.",
    initials: "JS",
  },
];

const About = () => (
  <>
    <Seo
      title="About Presidential Digs | Family-Owned Home Buyers"
      description="Meet the Schrock family behind Presidential Digs. Learn about our mission to help homeowners with creative, compassionate real estate solutions."
      canonicalPath="/about"
    />
    <Header />
    <main>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="label-tag mb-4 block">About Us</span>
              <h1 className="text-display text-3xl md:text-5xl text-foreground mb-6">
                A family business <span className="italic">built on passion.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Presidential Digs is a family-run business whose mission is to make and keep happy customers with every interaction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-display text-2xl md:text-4xl text-foreground mb-6">Our Story</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  My wife and I spent the last decade working in corporate America — building careers, raising our three children, and doing what we thought was expected of us. Then a sudden death in our family gave us the clarity we needed to follow our passions.
                </p>
                <p>
                  Life is too short to not explore your passions. With the full support of our three children, we embarked on a journey that has allowed us to meet incredible people and help our customers achieve happiness through creative real estate solutions.
                </p>
                <p>
                  What started as a leap of faith has grown into a company we're truly proud of — one where every customer is treated like family and every project is an opportunity to make a real difference in someone's life.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-display text-2xl md:text-4xl text-foreground">Our Values</h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="p-7 bg-secondary rounded-sm h-full">
                  <v.icon className="w-7 h-7 text-accent mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="label-tag mb-4 block">Meet the Team</span>
              <h2 className="text-display text-2xl md:text-4xl text-foreground">The People Behind Presidential Digs</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.12}>
                <div className="bg-card rounded-sm p-8 border border-border h-full">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5">
                    <span className="text-primary-foreground font-mono font-bold text-lg tracking-tight">{member.initials}</span>
                  </div>
                  <h3 className="text-display text-xl text-foreground mb-1">{member.name}</h3>
                  <span className="text-accent text-xs font-semibold tracking-[0.1em] uppercase block mb-4">{member.role}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card">
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
