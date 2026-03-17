import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield } from "lucide-react";

interface LeadFormProps {
  variant?: "hero" | "inline" | "full";
  className?: string;
}

const LeadForm = ({ variant = "hero", className = "" }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-card p-8 rounded-sm text-center ${className}`}
      >
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Request Received</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We'll review your property and reach out within 24 hours with a no-obligation cash offer.
        </p>
        <div className="mt-6 p-4 bg-secondary rounded-sm">
          <h4 className="font-semibold text-sm mb-3 text-foreground">What Happens Next</h4>
          <div className="space-y-2 text-left">
            {["We review your property details", "A specialist contacts you within 24 hours", "Receive your fair cash offer — no obligation"].map((step, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="font-mono font-semibold text-accent mt-0.5">0{i + 1}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  const isCompact = variant === "hero";
  const isFull = variant === "full";

  return (
    <div className={`bg-card rounded-sm ${variant === "hero" ? "p-6 md:p-8 shadow-[var(--shadow-xl)] border border-border" : ""} ${className}`}>
      {variant === "hero" && (
        <h3 className="text-lg font-semibold text-foreground mb-5">Get Your Fair Cash Offer</h3>
      )}
      <form onSubmit={handleSubmit} className={`space-y-4 ${isFull ? "grid md:grid-cols-2 gap-4 space-y-0" : ""}`}>
        <input
          type="text"
          required
          placeholder="Property Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className={`w-full h-14 px-4 bg-background border border-input rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors ${isFull ? "md:col-span-2" : ""}`}
        />
        {(isFull || !isCompact) && (
          <input
            type="text"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full h-14 px-4 bg-background border border-input rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
        )}
        <input
          type="tel"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full h-14 px-4 bg-background border border-input rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
        <input
          type="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full h-14 px-4 bg-background border border-input rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
        <button
          type="submit"
          className={`w-full bg-primary text-primary-foreground h-14 font-bold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm text-sm ${isFull ? "md:col-span-2" : ""}`}
        >
          Get My Fair Offer
        </button>
      </form>
      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-4 italic">
        <Shield className="w-3.5 h-3.5" /> Privacy guaranteed. No obligations.
      </p>
    </div>
  );
};

export default LeadForm;
