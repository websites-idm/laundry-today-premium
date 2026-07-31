import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionTitle } from "./common";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    text: "The pickup was on time to the minute and my shirts came back better pressed than the dry cleaner down the road. I have not done a load of laundry in four months.",
    initials: "SM",
  },
  {
    name: "Daniel Okafor",
    role: "Restaurant Owner",
    text: "We moved all our table linen to Laundry Today's business plan. Daily collection, spotless results and one clean invoice at month end.",
    initials: "DO",
  },
  {
    name: "Priya Raman",
    role: "New Parent",
    text: "Being able to track the order in the app is such a relief with a newborn. Fabric-safe detergent made a real difference for sensitive skin.",
    initials: "PR",
  },
  {
    name: "James Whitfield",
    role: "Consultant",
    text: "Booked an express dry clean at 9am and had my suit back the same evening for a client dinner. Genuinely premium service.",
    initials: "JW",
  },
  {
    name: "Aisha Karim",
    role: "Student",
    text: "Affordable, reliable and the riders are always friendly. The loyalty rewards basically pay for every fifth bag.",
    initials: "AK",
  },
];

export function Reviews() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="Reviews"
          title="Loved by 12,000+ customers"
          subtitle="Verified Google reviews from households and businesses across the city."
        />

        <div className="mt-12">
          <div
            ref={scroller}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
          >
            {reviews.map((r) => (
              <article
                key={r.name}
                className="w-[85%] shrink-0 snap-center rounded-[32px] border border-primary/15 bg-white p-7 shadow-soft sm:w-[48%] lg:w-[32%]"
              >
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current" />
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

          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous reviews"
              className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary-deep transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next reviews"
              className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary-deep transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
