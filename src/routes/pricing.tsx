import { createFileRoute } from "@tanstack/react-router";
import { Check, Star, ShieldCheck, Zap } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/common";
import { Pricing } from "@/components/site/Pricing";
import { openBooking } from "@/components/site/BookingPopup";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing Plans & Rates | Laundry Today" },
      {
        name: "description",
        content:
          "Explore item-wise rates for residential laundry, dry cleaning, commercial contracts, and premium monthly memberships.",
      },
      { property: "og:title", content: "Pricing Plans & Rates | Laundry Today" },
      { property: "og:description", content: "Transparent pricing rates and monthly membership options." },
    ],
  }),
  component: PricingPage,
});

const memberships = [
  {
    name: "Pay As You Go",
    price: "₹0",
    period: "forever",
    desc: "Perfect for occasional users who want premium laundry on demand.",
    features: [
      "Access to full rate menu",
      "Free pickup & delivery above ₹399",
      "Standard 24-hour turnaround",
      "Pay securely at delivery",
    ],
    icon: Zap,
    popular: false,
  },
  {
    name: "Elite Care",
    price: "₹999",
    period: "month",
    desc: "Designed for individuals and couples seeking routine weekly cleaning.",
    features: [
      "Flat 10% discount on all dry cleaning",
      "2 free Express upgrades per month",
      "Zero minimum order value constraints",
      "Priority customer care channel",
    ],
    icon: Star,
    popular: true,
  },
  {
    name: "Premium Household",
    price: "₹2,499",
    period: "month",
    desc: "For busy households needing bulk weight wash and sheets sanitization.",
    features: [
      "Flat 20% discount on all service categories",
      "Unlimited Free Express priority turnaround",
      "Complimentary fabric conditioning & scenting",
      "Monthly heavy comforter wash voucher included",
    ],
    icon: ShieldCheck,
    popular: false,
  },
];

const faqs = [
  {
    q: "Is there a minimum order value for free delivery?",
    a: "Yes, standard pay-as-you-go pickups have a free delivery threshold of ₹399. For orders below this amount, a nominal service fee of ₹50 is applied.",
  },
  {
    q: "How does the pricing-by-weight calculation work?",
    a: "Laundry by weight (Wash & Fold or Wash & Iron) is weighed at our facility. Damp items are weighed after drying to ensure you only pay for clean, dry fabric weight.",
  },
  {
    q: "How do I claim membership discounts?",
    a: "Once you subscribe, your discounts are automatically linked to your registered phone number and applied to your invoice at checkout.",
  },
];

function PricingPage() {
  return (
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      {/* 1. Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white rounded-b-[40px] shadow-lift">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center z-10 sm:px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] uppercase backdrop-blur-md">
              Pricing Plans
            </span>
          </Reveal>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Simple, Transparent Rates
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            No hidden fees or fuel surcharges. Use our digital estimator to add items to your laundry bag and see costs instantly.
          </p>
        </div>
      </section>

      {/* 2. Interactive Pricing Calculator Section */}
      <Pricing hideTitle={false} />

      {/* 3. Membership plans section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="Save More"
            title="Premium Monthly Membership Tiers"
            subtitle="Subscribe to unlock flat category discounts, complimentary express turnarounds, and zero delivery minimums."
          />
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {memberships.map((plan, idx) => (
              <Reveal key={plan.name} delay={idx * 0.1} y={30}>
                <div
                  className={`h-full rounded-[32px] p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                    plan.popular
                      ? "border-accent bg-secondary/50 shadow-lift"
                      : "border-primary/5 bg-white shadow-soft hover:shadow-lift"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1 text-[10px] font-black uppercase tracking-widest text-accent-foreground shadow-soft">
                      Best Value
                    </span>
                  )}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-black text-primary-deep">{plan.name}</div>
                      <plan.icon className={`h-6 w-6 ${plan.popular ? "text-accent" : "text-primary"}`} />
                    </div>
                    
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl font-black tracking-tight text-primary-deep">{plan.price}</span>
                      <span className="text-sm text-muted-foreground font-semibold">/{plan.period}</span>
                    </div>
                    
                    <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {plan.desc}
                    </p>
                    
                    <ul className="mt-8 space-y-3.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                          <span className="text-xs sm:text-sm font-semibold text-foreground/80 leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <button
                      onClick={() => openBooking()}
                      className={`w-full rounded-2xl py-3.5 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border-none ${
                        plan.popular
                          ? "accent-gradient text-accent-foreground shadow-soft"
                          : "bg-secondary text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing FAQs */}
      <section className="py-20 bg-secondary rounded-[40px]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle ribbon="Billing Questions" title="Rates & Billing FAQs" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.05} y={20}>
                <div className="glass-card rounded-[24px] border border-primary/5 bg-white shadow-soft p-6">
                  <h4 className="text-sm sm:text-base font-extrabold text-primary-deep">{faq.q}</h4>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-black tracking-tight">Claim Your First Order Discount</h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            Get flat ₹100 off on your first order. Book online and let our experts handle the rest.
          </p>
          <div className="mt-8">
            <button
              onClick={() => openBooking()}
              className="accent-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-accent-foreground shadow-lift hover:-translate-y-0.5 transition-transform cursor-pointer border-0"
            >
              Claim Offer Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
