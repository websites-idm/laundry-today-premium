import { Check } from "lucide-react";
import { Reveal, SectionTitle } from "./common";

const plans = [
  {
    name: "Basic",
    price: "$19",
    unit: "/ 5kg bag",
    copy: "Perfect for singles and light weekly loads.",
    features: ["Wash, dry & fold", "48h turnaround", "Free pickup & delivery", "Eco detergent"],
  },
  {
    name: "Premium",
    price: "$39",
    unit: "/ 10kg bag",
    copy: "Our most popular plan for families and professionals.",
    features: [
      "Wash, dry, fold & press",
      "24h turnaround",
      "Free pickup & delivery",
      "Stain treatment included",
      "5 dry-clean items",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "Custom",
    unit: "/ contract",
    copy: "For hotels, gyms, salons and restaurants.",
    features: [
      "Dedicated account manager",
      "Daily scheduled collection",
      "Bulk linen & uniform care",
      "Monthly invoicing",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="Pricing"
          title="Simple plans, honest prices"
          subtitle="Every plan includes free two-way pickup and our satisfaction guarantee."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.09}>
              <div
                className={`lift relative flex h-full flex-col rounded-[32px] border-2 p-8 ${
                  p.highlight
                    ? "border-transparent brand-gradient text-primary-foreground shadow-lift lg:-translate-y-4"
                    : "border-primary/20 bg-white shadow-soft"
                }`}
              >
                {p.highlight && (
                  <span className="accent-gradient absolute -top-3 left-8 rounded-full px-4 py-1 text-[11px] font-extrabold tracking-[0.18em] text-accent-foreground uppercase">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl ${p.highlight ? "text-white" : ""}`}>{p.name}</h3>
                <p
                  className={`mt-1.5 text-sm ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}
                >
                  {p.copy}
                </p>
                <div className="mt-6 flex items-end gap-1.5">
                  <span
                    className={`text-4xl font-extrabold ${p.highlight ? "text-white" : "text-primary-deep"}`}
                  >
                    {p.price}
                  </span>
                  <span
                    className={`pb-1.5 text-sm ${p.highlight ? "text-white/75" : "text-muted-foreground"}`}
                  >
                    {p.unit}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${p.highlight ? "text-white" : "text-primary"}`}
                      />
                      <span
                        className={`text-sm ${p.highlight ? "text-white/90" : "text-foreground/85"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 rounded-full px-6 py-3.5 text-center text-sm font-bold transition-all duration-300 active:scale-[0.97] ${
                    p.highlight
                      ? "accent-gradient text-accent-foreground"
                      : "bg-secondary text-primary-deep hover:accent-gradient hover:text-accent-foreground"
                  }`}
                >
                  Book Pickup
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
