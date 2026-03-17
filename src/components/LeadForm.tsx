import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitLead } from "@/lib/lead-api";
import { trackLeadSubmitted } from "@/lib/analytics";

const leadSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  address: z.string().min(5, "Please enter the full property address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().max(1000).optional(),
  smsConsent: z.literal(true, { errorMap: () => ({ message: "You must agree to receive SMS messages." }) }),
});

type LeadFormValues = z.infer<typeof leadSchema>;

interface LeadFormProps {
  variant?: "hero" | "inline" | "full";
  className?: string;
  source?: string;
  page?: string;
}

const LeadForm = ({ variant = "hero", className = "", source, page }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const inferredPage = useMemo(
    () => page || (typeof window !== "undefined" ? window.location.pathname : undefined),
    [page],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: LeadFormValues) => {
    setSubmitError(null);
    try {
      await submitLead({
        name: values.name,
        phone: values.phone,
        email: values.email,
        address: values.address,
        message: values.message,
        source,
        page: inferredPage,
      });
      trackLeadSubmitted({
        source,
        page: inferredPage,
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError("Something went wrong while submitting your request.");
      }
    }
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
      <form onSubmit={handleSubmit(onSubmit)} className={`space-y-3 ${isFull ? "grid md:grid-cols-2 gap-3 space-y-0" : ""}`}>
        {submitError && (
          <div className={`text-[11px] text-destructive bg-destructive/5 border border-destructive/30 rounded-sm px-3 py-2 ${isFull ? "md:col-span-2" : ""}`}>
            {submitError}
          </div>
        )}
        <input
          type="text"
          placeholder="Full Name"
          className={`input-premium ${isFull ? "" : ""}`}
          {...register("name")}
        />
        {errors.name && !isFull && (
          <p className="text-[11px] text-destructive mt-0.5">{errors.name.message}</p>
        )}
        <input
          type="text"
          placeholder="Property Address"
          className={`input-premium ${isFull ? "md:col-span-2" : ""}`}
          {...register("address")}
        />
        {errors.address && !isFull && (
          <p className="text-[11px] text-destructive mt-0.5">{errors.address.message}</p>
        )}
        <input
          type="tel"
          placeholder="Phone Number"
          className="input-premium"
          {...register("phone")}
        />
        {errors.phone && !isFull && (
          <p className="text-[11px] text-destructive mt-0.5">{errors.phone.message}</p>
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="input-premium"
          {...register("email")}
        />
        {errors.email && !isFull && (
          <p className="text-[11px] text-destructive mt-0.5">{errors.email.message}</p>
        )}
        {isFull && (
          <textarea
            placeholder="Anything else we should know?"
            className="input-premium md:col-span-2 min-h-[80px] resize-none"
            {...register("message")}
          />
        )}
        <button
          type="submit"
          className={`btn-accent w-full h-13 ${isFull ? "md:col-span-2" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Get My Fair Offer →"}
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
