import { Reveal, SectionTitle } from "./common";
import wash from "@/assets/svc-wash.jpg";
import dry from "@/assets/svc-dry.jpg";
import iron from "@/assets/svc-iron.jpg";
import shoe from "@/assets/svc-shoe.jpg";
import curtain from "@/assets/svc-curtain.jpg";
import blanket from "@/assets/svc-blanket.jpg";
import commercial from "@/assets/svc-commercial.jpg";
import delivery from "@/assets/svc-delivery.jpg";

const services = [
  { img: wash, title: "Wash & Fold", copy: "Everyday laundry washed, dried and neatly folded.", price: "from $2.40 / kg" },
  { img: dry, title: "Dry Cleaning", copy: "Suits, dresses and delicates treated with care.", price: "from $6.90 / item" },
  { img: iron, title: "Steam Ironing", copy: "Crisp, press-perfect finish on shirts and trousers.", price: "from $1.50 / item" },
  { img: shoe, title: "Shoe Cleaning", copy: "Sneakers and leather restored and deodorised.", price: "from $14 / pair" },
  { img: curtain, title: "Curtain Cleaning", copy: "Take-down, deep clean and re-hang available.", price: "from $9 / panel" },
  { img: blanket, title: "Blankets & Duvets", copy: "Bulky bedding washed in oversized machines.", price: "from $16 / piece" },
  { img: commercial, title: "Commercial Laundry", copy: "Hotels, gyms and restaurants on contract rates.", price: "custom quote" },
  { img: delivery, title: "Pickup & Delivery", copy: "Free two-way collection across the city.", price: "always free" },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="Our Services"
          title="Everything your wardrobe needs, in one place"
          subtitle="Pick a service, choose a pickup slot and we handle the rest."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.07}>
              <article className="lift group h-full overflow-hidden rounded-3xl border-2 border-primary/15 bg-white shadow-soft">
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1000}
                    height={1000}
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  <p className="mt-3 text-sm font-bold text-accent">{s.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
