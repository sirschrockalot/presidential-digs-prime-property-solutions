import { ReactNode } from "react";

interface PageHeroProps {
  children: ReactNode;
  className?: string;
}

const PageHero = ({ children, className = "bg-secondary" }: PageHeroProps) => (
  <section className={`relative section-padding overflow-hidden ${className}`}>
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    <div className="container-narrow relative">
      {children}
    </div>
  </section>
);

export default PageHero;
