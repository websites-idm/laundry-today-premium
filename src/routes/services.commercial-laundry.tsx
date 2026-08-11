import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { SectionTitle, Reveal } from "@/components/site/common";
import { Bed, Bath, User, ChefHat, Sparkles, School, Dumbbell } from "lucide-react";

export const Route = createFileRoute("/services/commercial-laundry")({
  head: () => ({
    meta: [
      { title: "Commercial Laundry Service | Laundry Today" },
      { name: "description", content: "High-capacity contract washing and ironing for hotels, spas, gyms and hospitals." }
    ]
  }),
  component: CommercialLaundryPage
});

const commercialCategories = [
  { name: "Bedding & Linens", icon: Bed },
  { name: "Towels & Robes", icon: Bath },
  { name: "Staff / Office Uniforms", icon: User },
  { name: "Kitchen / Restaurant Linens", icon: ChefHat },
  { name: "Dry Cleaning (Spa Gowns, etc.)", icon: Sparkles },
  { name: "Schools & Hostels", icon: School },
  { name: "Gyms & Spas", icon: Dumbbell },
];

function CommercialLaundryPage() {
  return (
    <>
      <ServicePageTemplate serviceId="commercial-laundry" />
      {/* Custom Commercial Categories Section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="Our Expertise"
            title="Commercial Laundry Categories"
            subtitle="We specialize in bulk laundering for a wide variety of commercial sectors."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {commercialCategories.map((cat, idx) => (
              <Reveal key={cat.name} delay={idx * 0.05} y={20}>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-primary/5 hover:border-primary/20 hover:shadow-soft transition-all h-full">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary shadow-sm shrink-0">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-primary-deep">{cat.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
