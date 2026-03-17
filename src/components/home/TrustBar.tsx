import AnimatedSection from "../AnimatedSection";

const items = [
  { value: "$0.00", label: "Fees Paid by Seller" },
  { value: "Any", label: "Property Condition" },
  { value: "7 Days", label: "Fastest Closing" },
  { value: "A+", label: "BBB Rating" },
];

const TrustBar = () => (
  <section className="bg-background border-b border-border">
    <div className="container-narrow px-5 md:px-6 py-8 md:py-10">
      <AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border">
          {items.map((item) => (
            <div key={item.label} className="md:px-8 first:md:pl-0 last:md:pr-0 text-center md:text-left">
              <span className="block font-mono text-lg md:text-xl font-bold text-foreground tabular-nums tracking-tight">{item.value}</span>
              <span className="text-xs text-muted-foreground font-medium mt-0.5 block">{item.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TrustBar;
