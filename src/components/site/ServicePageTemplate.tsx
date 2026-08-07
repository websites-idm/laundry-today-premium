import { useState } from "react";
import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Reveal, SectionTitle } from "./common";
import { openBooking } from "./BookingPopup";
import { servicesData } from "./servicesData";
import { Pricing } from "./Pricing";
import { Reviews } from "./Reviews";

export function ServicePageTemplate({ serviceId }: { serviceId: string }) {
  const service = servicesData.find((s) => s.id === serviceId);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-black text-primary-deep">Service Not Found</h1>
        <p className="mt-2 text-sm text-muted-foreground">The requested service could not be located.</p>
        <Link to="/services" className="mt-6 rounded-full bg-primary px-6 py-3 text-xs font-bold text-white shadow-soft">
          Back to Services
        </Link>
      </div>
    );
  }

  // Get related services (excluding current one)
  const relatedServices = servicesData.filter((s) => s.id !== serviceId).slice(0, 3);

  return (
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-deep to-primary-light text-white rounded-b-[40px] shadow-lift">
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left side text info */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] uppercase backdrop-blur-md">
                  Premium Care
                </span>
              </Reveal>
              <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
                {service.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => openBooking()}
                  suppressHydrationWarning
                  className="accent-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold text-accent-foreground shadow-lift hover:-translate-y-0.5 transition-all cursor-pointer border-0"
                >
                  Book Pickup Now
                </button>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-white/15 border border-white/20 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/25"
                >
                  View Rate Card
                </Link>
              </div>
            </div>

            {/* Right side banner image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 rounded-[40px] bg-white/10 blur-xl" />
              <img
                src={service.img}
                alt={`${service.title} laundry services`}
                className="relative rounded-[32px] shadow-lift w-full object-cover h-[350px] sm:h-[400px] border border-white/10"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. About Service */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Context cards */}
            <Reveal x={-40}>
              <div>
                <SectionTitle ribbon="Overview" title={`Understand Our ${service.title} Service`} />
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  We use special settings and parameters customized for this category. Fabrics are cleaned using temperature controls, specialized detergents, and finishing presses suited to the thread type.
                </p>
                <div className="mt-8 p-6 rounded-3xl bg-secondary border border-primary/5">
                  <h4 className="text-sm font-black text-primary uppercase tracking-wider">Who It's For</h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{service.whoFor}</p>
                </div>
              </div>
            </Reveal>

            {/* Benefits cards */}
            <Reveal x={40} delay={0.15}>
              <div className="space-y-6">
                <h3 className="text-xl font-extrabold text-primary-deep">Why Choose This Service?</h3>
                <div className="grid gap-4">
                  {service.benefits.map((b, idx) => {
                    const LucideIcon = (Icons as any)[b.iconName] || Icons.Sparkles;
                    return (
                      <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-secondary border border-primary/5 hover:bg-white hover:shadow-soft transition-all duration-300">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-soft shrink-0">
                          <LucideIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-primary-deep">{b.title}</h4>
                          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 3. What's Included */}
      <section className="py-20 bg-secondary rounded-[40px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="Fabric Care Stages"
            title="What's Included in the Service Package"
            subtitle="We ensure strict quality control checklist items are applied to your items at every stage."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((inc, idx) => (
              <Reveal key={idx} delay={idx * 0.05} y={30}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-soft border border-primary/5 hover:border-primary/10 transition-colors">
                  <div className="text-xs font-black text-accent uppercase tracking-wider">Stage {idx + 1}</div>
                  <h4 className="mt-2 text-base font-extrabold text-primary-deep">{inc.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{inc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cleaning Process Timeline */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="Operations Pipeline"
            title="The Step-by-Step Care Journey"
            subtitle="Track your garments step-by-step from pickup confirmation to home delivery."
          />
          <div className="mt-16 relative">
            {/* Timeline track line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-secondary -translate-x-1/2 hidden sm:block" />
            
            <div className="space-y-12">
              {service.process.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col sm:flex-row items-start ${idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
                  {/* Timeline point */}
                  <div className="absolute left-4 sm:left-1/2 top-1.5 h-6 w-6 rounded-full border-4 border-white bg-primary shadow-soft -translate-x-1/2 z-10" />
                  
                  {/* Timeline Card */}
                  <Reveal x={idx % 2 === 0 ? -30 : 30} className={`w-full sm:w-[calc(50%-32px)] pl-12 sm:pl-0 ${idx % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                    <div className="rounded-2xl bg-secondary p-5 border border-primary/5 hover:bg-white hover:shadow-soft transition-all duration-300">
                      <div className="text-xs font-black text-primary uppercase tracking-widest">Step {idx + 1}</div>
                      <h4 className="mt-1.5 text-base font-extrabold text-primary-deep">{step}</h4>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing Catalog (Filter Embedded) */}
      <section className="py-20 bg-secondary rounded-[40px] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="Estimated Service Rates"
            title="Transparency in Pricing"
            subtitle={`Explore rates and estimate charges. Select items to add directly to your booking cart.`}
          />
          {/* Reusing parameterized Pricing component */}
          <div className="mt-8">
            <Pricing
              defaultCategory={service.pricingCategoryId}
              filterQuery={service.pricingFilter}
              hideTitle={true}
            />
          </div>
        </div>
      </section>

      {/* 6. Service-Specific FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionTitle ribbon="Garment Questions" title="Frequently Asked Questions" />
            <div className="mt-12 space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <Reveal key={idx} delay={idx * 0.05} y={20}>
                    <div className="glass-card rounded-[24px] border border-primary/5 bg-white shadow-soft transition-all">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        suppressHydrationWarning
                        className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-primary-deep border-none bg-transparent cursor-pointer"
                      >
                        <span className="text-sm font-extrabold">{faq.q}</span>
                        <div className={`grid h-8 w-8 place-items-center rounded-full bg-secondary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                          <Icons.ChevronDown className="h-4 w-4 text-primary" />
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 border-t border-border" : "max-h-0"}`}>
                        <p className="px-6 py-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. Testimonials */}
      <Reviews />

      {/* 8. Related Services */}
      <section className="py-20 bg-secondary rounded-t-[40px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="Cross-Linking"
            title="Explore Related Garment Care Services"
            subtitle="Explore our other specialty treatment processes for fabrics and household items."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 0.05} y={30}>
                <div className="h-full rounded-3xl bg-white p-6 shadow-soft hover:shadow-lift transition-all border border-primary/5 flex flex-col justify-between group">
                  <div>
                    <div className="relative h-44 overflow-hidden rounded-2xl">
                      <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-300" />
                    </div>
                    <h4 className="mt-4 text-base font-extrabold text-primary-deep">{s.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.tagline}</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/services/${s.id}`}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-black text-primary hover:text-primary-deep"
                    >
                      <span>Explore Service</span>
                      <Icons.ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Standout CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-black sm:text-4xl tracking-tight">Need {service.title} pickup today?</h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            Schedule your pickup order, and let our specialists take care of your laundry. Delivery back in 24 hours.
          </p>
          <div className="mt-8">
            <button
              onClick={() => openBooking()}
              suppressHydrationWarning
              className="accent-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-accent-foreground shadow-lift hover:-translate-y-0.5 transition-transform cursor-pointer border-0"
            >
              Book Pickup Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
