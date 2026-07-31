import { Reveal, SectionTitle } from "./common";
import commercial from "@/assets/svc-commercial.jpg";
import wash from "@/assets/svc-wash.jpg";
import iron from "@/assets/svc-iron.jpg";
import team from "@/assets/gal-team.jpg";
import customer from "@/assets/gal-customer.jpg";
import delivery from "@/assets/svc-delivery.jpg";

const shots = [
  { img: commercial, alt: "Industrial laundry machines", span: "h-full sm:col-span-2 sm:row-span-2" },
  { img: wash, alt: "Freshly folded towels", span: "h-full" },
  { img: iron, alt: "Steam ironing a white shirt", span: "h-full" },
  { img: customer, alt: "Happy customer receiving laundry", span: "h-full" },
  { img: team, alt: "Professional laundry team", span: "h-full" },
  { img: delivery, alt: "Blue branded delivery vehicle", span: "h-full sm:col-span-2" },
];

export function Gallery() {
  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="Gallery"
          title="Inside Laundry Today"
          subtitle="Our facility, our team and our fleet — built for consistency at scale."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal key={s.alt} delay={(i % 4) * 0.06} className={s.span}>
              <div className="group h-full overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
