import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionTitle } from "./common";

const faqs = [
  {
    q: "How does free pickup and delivery work?",
    a: "Choose a one-hour slot when you book. Our rider arrives with a sealed Laundry Today bag, scans your order and returns it to the same address once cleaned. Both trips are always free.",
  },
  {
    q: "How fast is the turnaround?",
    a: "Standard orders are back within 24 hours. Express same-day service is available for orders collected before 10am, and bulky items such as duvets take 48 hours.",
  },
  {
    q: "What if an item is damaged or lost?",
    a: "Every item is barcoded and photographed at intake. In the rare event of damage or loss, our care guarantee covers the item up to its replacement value.",
  },
  {
    q: "Which detergents do you use?",
    a: "Biodegradable, dermatologist-tested detergents by default. Fragrance-free and hypoallergenic options can be selected at checkout at no extra cost.",
  },
  {
    q: "Do you serve businesses?",
    a: "Yes. Hotels, gyms, salons and restaurants run on our Business plan with scheduled daily collection, contract rates and monthly invoicing.",
  },
  {
    q: "How do I pay?",
    a: "Card, Apple Pay, Google Pay or bank transfer in the app. Business accounts are invoiced monthly.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle ribbon="FAQ" title="Questions, answered" />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-3xl border-2 transition-colors duration-300 ${
                  isOpen ? "border-primary/30 bg-white shadow-soft" : "border-transparent bg-secondary"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  suppressHydrationWarning
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 text-base font-bold sm:text-lg">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
