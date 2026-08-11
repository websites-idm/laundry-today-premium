import { Star } from "lucide-react";
import { SectionTitle } from "./common";

const reviews = [
  {
    name: "Nazmeen",
    role: "Google Review",
    text: "I Gave my grandmother silk and cotton saree for dry cleaning and roll press. Excellent service... Thankyou 👌🏻👌🏻👌🏻",
    initials: "N",
  },
  {
    name: "vedant lokhande",
    role: "Google Review",
    text: "Best experience i hade. This shop is a must visit. If u have any stains on your favourite clothes don't worry they will take care.",
    initials: "VL",
  },
  {
    name: "Kaju",
    role: "Google Review",
    text: "Excellent laundry service! I gave my clothes for wash & iron and dry cleaning, and the results were outstanding. Every garment was cleaned perfectly, smelled fresh, and was neatly pressed.",
    initials: "K",
  },
  {
    name: "JGD.MOUNTEN VIEW uttrakhandi",
    role: "Google Review",
    text: "I regularly give my restaurant clothes for dry cleaning imagin how oil stains and masala spread on clothes they do very excellent work in reasonable price and they give free pickup and delivery in Koparkhairane",
    initials: "JM",
  },
  {
    name: "Dr Sufi",
    role: "Google Review",
    text: "I gave my appron for dry clean at laundry today which was full of blue ink spread on my appron please check below after dry clean now it's looking new thankyou",
    initials: "DS",
  },
  {
    name: "Aashiq Singh",
    role: "Google Review",
    text: "They charge very reasonable lehanga per piece 399 and wash and iron they charge 159 per kg i recommend this laundry they provide good service",
    initials: "AS",
  },
  {
    name: "Mr. Tabrej",
    role: "Google Review",
    text: "We have used to wash my shoes got as new i liked the service please go and visit the service is too good",
    initials: "MT",
  },
  {
    name: "Soham Varal",
    role: "Google Review",
    text: "Absolutely perfect work and on time delivery 😁 FULLY SATISFIED",
    initials: "SV",
  },
  {
    name: "Danish Shaikh",
    role: "Google Review",
    text: "The workers in the laundry are also good, they clean them very well.",
    initials: "DS",
  },
  {
    name: "Ankita Chaurasiya",
    role: "Google Review",
    text: "I have very good experience with this laundry management. They are very polite and professional they have free pickup and delivery service.",
    initials: "AC",
  },
];

export function Reviews() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="Reviews"
          title="Loved by 12,000+ customers"
          subtitle="Verified Google reviews from households and businesses across the city."
        />

        <div className="mt-12">
          {/* Infinite Marquee Container */}
          <div className="group relative flex overflow-hidden w-full pb-4 [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max animate-marquee hover:![animation-play-state:paused]">
              
              {/* First Set */}
              <div className="flex gap-5 px-2.5">
                {reviews.map((r, i) => (
                  <article
                    key={`${r.name}-${i}`}
                    className="w-[300px] sm:w-[380px] lg:w-[420px] shrink-0 rounded-[32px] border border-primary/15 bg-white p-7 shadow-soft"
                  >
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4.5 w-4.5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
                      “{r.text}”
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full brand-gradient text-sm font-extrabold text-primary-foreground">
                        {r.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-bold">{r.name}</div>
                        <div className="truncate text-xs text-muted-foreground">{r.role}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Second Set (Duplicate for seamless infinite scroll) */}
              <div className="flex gap-5 px-2.5" aria-hidden="true">
                {reviews.map((r, i) => (
                  <article
                    key={`dup-${r.name}-${i}`}
                    className="w-[300px] sm:w-[380px] lg:w-[420px] shrink-0 rounded-[32px] border border-primary/15 bg-white p-7 shadow-soft"
                  >
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4.5 w-4.5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
                      “{r.text}”
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full brand-gradient text-sm font-extrabold text-primary-foreground">
                        {r.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-bold">{r.name}</div>
                        <div className="truncate text-xs text-muted-foreground">{r.role}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
