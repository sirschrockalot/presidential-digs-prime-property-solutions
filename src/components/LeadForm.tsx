import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Lock } from "lucide-react";

interface LeadFormProps {
  variant?: "hero" | "inline" | "full";
  className?: string;
}

const LeadForm = ({ variant = "hero", className = "" }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
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
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`bg-card p-8 md:p-10 rounded-sm text-center ${variant === "hero" ? "shadow-[var(--shadow-xl)] border border-border" : ""} ${className}`}
      >
        <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-7 h-7 text-success" />
        </div>
        <h3 className="text-display text-2xl text-foreground mb-2">Request Received</h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
          We'll reach out within 24 hours with your no-obligation cash offer.
        </p>
        <div className="mt-8 pt-6 border-t border-border">
          <h4 className="font-semibold text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">What Happens Next</h4>
          <div className="space-y-3 text-left">
            {["We review your property details", "A specialist contacts you within 24 hours", "Receive your fair cash offer — no obligation"].map((step, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="font-mono font-bold text-accent text-xs mt-0.5 w-5 shrink-0">0{i + 1}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  const isFull = variant === "full";

  return (
    <div className={`bg-card rounded-sm ${variant === "hero" ? "p-6 md:p-8 shadow-[var(--shadow-xl)] border border-border" : ""} ${className}`}>
      {variant === "hero" && (
        <div className="mb-6">
          <h3 className="text-display text-xl md:text-2xl text-foreground mb-1.5">Get Your Cash Offer</h3>
          <p className="text-sm text-muted-foreground">Takes 60 seconds. Zero obligation.</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className={`space-y-3 ${isFull ? "grid md:grid-cols-2 gap-3 space-y-0" : ""}`}>
        <input
          type="text"
          required
          placeholder="Property Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className={`input-premium ${isFull ? "md:col-span-2" : ""}`}
        />
        <input
          type="tel"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="input-premium"
        />
        <input
          type="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input-premium"
        />
        <button
          type="submit"
          className={`btn-accent w-full h-13 ${isFull ? "md:col-span-2" : ""}`}
        >
          Get My Fair Offer →
        </button>
      </form>
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <Lock className="w-3 h-3 text-muted-foreground/50" />
        <span className="text-[11px] text-muted-foreground/70">Your information is secure and never shared.</span>
      </div>
    </div>
  );
};

export default LeadForm;
