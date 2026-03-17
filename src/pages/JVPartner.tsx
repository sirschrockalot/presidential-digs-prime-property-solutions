import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Seo } from "@/components/Seo";
import AnimatedSection from "@/components/AnimatedSection";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Upload, Handshake, DollarSign, ShieldCheck } from "lucide-react";

const dealTypes = [
  "Wholesale",
  "Fix & Flip",
  "Buy & Hold",
  "Creative Finance",
  "Subject-To",
  "Other",
] as const;

const jvSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  propertyAddress: z.string().min(5, "Please enter the property address."),
  askingPrice: z.string().min(1, "Please enter the asking price."),
  arv: z.string().optional(),
  rehabEstimate: z.string().optional(),
  dealType: z.string().min(1, "Please select a deal type."),
  notes: z.string().max(2000).optional(),
});

type JVFormValues = z.infer<typeof jvSchema>;

const benefits = [
  { icon: Handshake, title: "True Partnership", desc: "We split profits fairly and bring resources to close deals fast." },
  { icon: DollarSign, title: "Funding Available", desc: "We can fund deals — bring us your contracts and we'll handle the capital." },
  { icon: ShieldCheck, title: "Confidential", desc: "All submissions are private. We never share your deal details." },
];

const JVPartner = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JVFormValues>({
    resolver: zodResolver(jvSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyAddress: "",
      askingPrice: "",
      arv: "",
      rehabEstimate: "",
      dealType: "",
      notes: "",
    },
  });

  const onSubmit = async (values: JVFormValues) => {
    // TODO: wire up to backend / email notification
    console.log("JV submission:", values, "File:", fileName);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <>
        <Seo title="Deal Submitted | Presidential Digs" description="Your JV deal has been submitted." canonicalPath="/jv" />
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center px-5">
          <AnimatedSection>
            <div className="bg-card p-10 rounded-sm border border-border shadow-[var(--shadow-xl)] text-center max-w-md mx-auto">
              <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-7 h-7 text-success" />
              </div>
              <h2 className="text-display text-2xl text-foreground mb-2">Deal Received</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We'll review your deal and get back to you within 24–48 hours. Thank you for partnering with Presidential Digs.
              </p>
            </div>
          </AnimatedSection>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Seo
        title="Submit a JV Deal | Presidential Digs"
        description="Have a deal? Partner with Presidential Digs on your next joint venture. Submit your deal details for review."
        canonicalPath="/jv"
      />
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-narrow px-5 md:px-6">
            <AnimatedSection>
              <div className="max-w-2xl">
                <span className="label-tag mb-4 block text-primary-foreground/60">Investor Partners</span>
                <h1 className="text-display text-3xl md:text-5xl text-primary-foreground mb-5">
                  Let's close <span className="italic">together.</span>
                </h1>
                <p className="text-base md:text-lg text-primary-foreground/60 leading-relaxed max-w-lg">
                  Have a deal under contract? We partner with investors on joint ventures — bringing capital, expertise, and speed to get deals across the finish line.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container-narrow px-5 md:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <AnimatedSection key={b.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                      <b.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{b.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-14 md:py-20">
          <div className="container-narrow px-5 md:px-6 max-w-2xl mx-auto">
            <AnimatedSection>
              <h2 className="text-display text-2xl md:text-3xl text-foreground mb-2">Submit Your Deal</h2>
              <p className="text-sm text-muted-foreground mb-10">All fields marked with * are required. Your information stays confidential.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Contact Info */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <input type="text" placeholder="Full Name *" className="input-premium w-full" {...register("name")} />
                      {errors.name && <p className="text-[11px] text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input type="email" placeholder="Email *" className="input-premium w-full" {...register("email")} />
                      {errors.email && <p className="text-[11px] text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <input type="tel" placeholder="Phone Number *" className="input-premium w-full" {...register("phone")} />
                      {errors.phone && <p className="text-[11px] text-destructive mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Deal Details */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Deal Details</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="md:col-span-2">
                      <input type="text" placeholder="Property Address *" className="input-premium w-full" {...register("propertyAddress")} />
                      {errors.propertyAddress && <p className="text-[11px] text-destructive mt-1">{errors.propertyAddress.message}</p>}
                    </div>
                    <div>
                      <input type="text" placeholder="Asking Price *" className="input-premium w-full" {...register("askingPrice")} />
                      {errors.askingPrice && <p className="text-[11px] text-destructive mt-1">{errors.askingPrice.message}</p>}
                    </div>
                    <div>
                      <input type="text" placeholder="ARV (After Repair Value)" className="input-premium w-full" {...register("arv")} />
                    </div>
                    <div>
                      <input type="text" placeholder="Rehab Estimate" className="input-premium w-full" {...register("rehabEstimate")} />
                    </div>
                    <div>
                      <select className="input-premium w-full" {...register("dealType")} defaultValue="">
                        <option value="" disabled>Deal Type *</option>
                        {dealTypes.map((dt) => (
                          <option key={dt} value={dt}>{dt}</option>
                        ))}
                      </select>
                      {errors.dealType && <p className="text-[11px] text-destructive mt-1">{errors.dealType.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Contract Upload */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Purchase Contract</h3>
                  <label className="flex items-center gap-3 border border-dashed border-border rounded-sm px-4 py-5 cursor-pointer hover:border-accent/50 transition-colors bg-secondary/50">
                    <Upload className="w-5 h-5 text-muted-foreground shrink-0" />
                    <div className="flex-1 min-w-0">
                      {fileName ? (
                        <span className="text-sm text-foreground truncate block">{fileName}</span>
                      ) : (
                        <>
                          <span className="text-sm text-foreground block">Upload contract (PDF, DOC, JPG)</span>
                          <span className="text-[11px] text-muted-foreground">Max 10MB</span>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                    />
                  </label>
                </div>

                {/* Notes */}
                <div>
                  <textarea
                    placeholder="Additional notes about the deal..."
                    className="input-premium w-full min-h-[100px] resize-none"
                    {...register("notes")}
                  />
                </div>

                <button type="submit" className="btn-accent w-full h-13" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Deal for Review →"}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default JVPartner;
