import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/common";
import { openBooking } from "@/components/site/BookingPopup";
import { servicesData } from "@/components/site/servicesData";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Laundry Today" },
      {
        name: "description",
        content:
          "Explore our laundry, steam ironing, and dry cleaning services. From everyday wear to bridal sarees, leather boots, and office sheets.",
      },
      { property: "og:title", content: "Our Laundry Services | Laundry Today" },
      { property: "og:description", content: "All our residential and commercial cleaning services." },
    ],
  }),
  component: ServicesLandingPage,
});

function ServicesLandingPage() {
  return (
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      {/* 1. Header Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white rounded-b-[40px] shadow-lift">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center z-10 sm:px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] uppercase backdrop-blur-md">
              Service Menu
            </span>
          </Reveal>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Professional Garment & Home Care
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            From formal shirts to heavy carpets and duvet covers. We handle all your fabrics with dedicated separate machines and eco-safe wash formulas.
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="What We Offer"
            title="Washing, Ironing & Specialty Cleaning"
            subtitle="Click on any service card below to view process steps, prices, and detailed inclusions."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05} y={40}>
                <div className="glass-card flex flex-col justify-between overflow-hidden rounded-[32px] border border-primary/5 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift h-full group">
                  {/* Service Image banner */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-[10px] font-black tracking-widest text-white uppercase backdrop-blur-md">
                      <Sparkles className="h-3 w-3" />
                      laundry today
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="flex-grow p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold text-primary-deep leading-tight">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {s.tagline}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-2.5">
                      <Link
                        to={`/services/${s.id}`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-5 py-3 text-xs font-black text-primary transition-colors hover:bg-primary hover:text-white decoration-none text-center"
                      >
                        <span>View Details & Pricing</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <button
                        onClick={() => openBooking()}
                        suppressHydrationWarning
                        className="inline-flex items-center justify-center rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 px-5 py-3 text-xs font-bold text-foreground/80 transition-colors cursor-pointer"
                      >
                        Book Pickup
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="py-20 bg-secondary rounded-t-[40px] text-center relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-black text-primary-deep tracking-tight">Need a Customized Service?</h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Have bulky items, specialized stain removal jobs, or custom hotel and business linen contracts? Get in touch with our team.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="accent-gradient rounded-full px-8 py-4 text-sm font-extrabold text-accent-foreground shadow-lift hover:-translate-y-0.5 transition-transform decoration-none"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
