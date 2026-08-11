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
    a: "Minimum order value is ₹399. Choose your preferred pickup time slot while booking. Our rider will arrive at your selected time to collect your laundry and deliver it back once professionally cleaned.",
  },
  {
    q: "How does the pricing-by-weight calculation work?",
    a: "Laundry by weight (Wash & Fold or Wash & Iron) is weighed at our facility. Damp items are weighed after drying to ensure you only pay for clean, dry fabric weight.",
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


    </div>
  );
}
