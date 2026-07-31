import { Bubbles, Reveal, SectionTitle } from "./common";
import { Cog, Leaf, Wallet, Truck, Zap, Shirt } from "lucide-react";

const items = [
  { icon: Cog, title: "Professional Equipment", copy: "Commercial washers and presses calibrated for every fabric type." },
  { icon: Leaf, title: "Eco-Friendly Detergents", copy: "Biodegradable, dermatologist-safe products for sensitive skin." },
  { icon: Wallet, title: "Affordable Pricing", copy: "Clear per-kilo and per-item rates. No surprises at checkout." },
  { icon: Truck, title: "Pickup & Delivery", copy: "Free two-way collection in a time slot that suits you." },
  { icon: Zap, title: "Express Cleaning", copy: "Same-day service available for urgent orders before 10am." },
  { icon: Shirt, title: "Fabric Safe", copy: "Silk, wool and delicates handled by trained specialists." },
];

export function WhyUs() {
  return (
    <section className="brand-gradient relative overflow-hidden py-20 sm:py-28">
      <Bubbles count={16} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="Why Choose Us"
          invert
          title="Care that goes further than clean"
          subtitle="Six reasons thousands of households and businesses trust Laundry Today every week."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="lift h-full rounded-3xl bg-white p-7 shadow-soft">
                <div className="grid h-13 w-13 place-items-center rounded-2xl bg-secondary p-3 text-primary">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
