import { createFileRoute } from "@tanstack/react-router";
import { Shield, Sparkles, Heart, Users, CheckCircle2 } from "lucide-react";
import { Reveal, SectionTitle, Counter } from "@/components/site/common";
import { WhyUs } from "@/components/site/WhyUs";
import { Reviews } from "@/components/site/Reviews";
import { openBooking } from "@/components/site/BookingPopup";
import aboutImg from "@/assets/about.jpg";
import teamImg from "@/assets/gal-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Laundry Today" },
      {
        name: "description",
        content:
          "Discover the story of Laundry Today. Learn about our mission, vision, expert laundry cleaning team, and why thousands of customers trust us.",
      },
      { property: "og:title", content: "About Us | Laundry Today" },
      { property: "og:description", content: "Our story, mission, and why customers trust us." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    desc: "Every item goes through multiple check stages to ensure perfect wash quality and crisp pressing.",
  },
  {
    icon: Sparkles,
    title: "Fabric Safe Solvents",
    desc: "We wash with safe, non-toxic liquid soaps to maintain the integrity of delicate fibers.",
  },
  {
    icon: Heart,
    title: "Customer First Focus",
    desc: "Free pickup and 24-hour turnaround built entirely around your schedule.",
  },
];

const team = [
  {
    name: "Mohammed Abdullah",
    role: "Founder",
    bio: "Over 10 years of operations management experience. Committed to standardizing premium dry cleaning.",
    image: "/founder.jpeg"
  },
  {
    name: "Vivek Chaurasiya",
    role: "CEO",
    bio: "Driving the strategic vision and expansion of Laundry Today's technology-driven operations.",
    image: "/ceo.jpeg"
  },
  {
    name: "Mahesh Kumar Nirmal",
    role: "Head of Fabric Care",
    bio: "Certified garments washing specialist. Expert in stain pre-spotting and delicate silk restoration.",
    image: "/fabric.jpeg"
  
  },
  {
    name: "Laundry Today Team",
    role: "Logistics Coordinator",
    bio: "Manages our delivery riders and route schedules to ensure next-day home delivery guarantees.",
    image: "/logo1.jpeg"
  },
];

function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white rounded-b-[40px] shadow-lift">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center z-10 sm:px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] uppercase backdrop-blur-md">
              Our Journey
            </span>
          </Reveal>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Redefining Laundry Services
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Technology-enabled washing, dry cleaning, and press-perfect steam ironing delivered straight to your doorstep.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal x={-40}>
              <div>
                <SectionTitle ribbon="Our Story" title="Washing Away the Hassle Since Day One" />
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Laundry Today was founded with a simple goal: to give people their weekends back. We realized how much time families and busy professionals lose sorting garments, loading washing machines, and spending hours ironing.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We engineered a modern, app-integrated cleaning process that combines state-of-the-art industrial washing drums, eco-safe cleaning solvents, and professional steam press vacuums to deliver premium garment care.
                </p>
                <ul className="mt-8 space-y-3">
                  {["Calibrated digital weighing scales", "Dedicated separate machines for every customer", "Safe, skin-friendly detergents and softeners"].map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-semibold text-foreground/80">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal x={40} delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[44px] bg-secondary" aria-hidden="true" />
                <img
                  src={aboutImg}
                  alt="Laundry Today dry cleaning folding experts"
                  loading="lazy"
                  className="relative rounded-[32px] shadow-lift w-full object-cover h-[450px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-secondary rounded-[40px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal y={30}>
              <div className="glass-card h-full rounded-[32px] bg-white p-8 shadow-soft border border-primary/5 flex items-start gap-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-accent shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-primary-deep">Our Mission</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    To deliver reliable, high-quality fabric care directly to our customers. We strive to automate laundry chores through seamless digital scheduling, reliable pickups, and eco-conscious washing cycles, allowing you to focus on what matters most.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal y={30} delay={0.15}>
              <div className="glass-card h-full rounded-[32px] bg-white p-8 shadow-soft border border-primary/5 flex items-start gap-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-primary-deep">Our Vision</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    To be the leading technology-driven garment care brand in the region. We aim to revolutionize traditional laundry processes by establishing smart cleaning centers, eco-friendly solvents, and a green delivery fleet, setting new standards for efficiency.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Reused Component) */}
      <WhyUs />

      {/* 5. Company Statistics (Reused Common Elements) */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 rounded-3xl bg-secondary p-8 shadow-soft">
            <Counter to={12000} suffix="+" label="Orders" />
            <Counter to={24} suffix="h" label="Turnaround" />
            <Counter to={99} suffix="%" label="On time" />
          </div>
        </div>
      </section>

      {/* 6. Meet Our Team */}
      <section className="py-20 sm:py-28 bg-secondary rounded-[40px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle ribbon="Our Team" title="Fabric Care Experts Behind Your Order" />
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-white p-6 shadow-soft hover:shadow-lift transition-all border border-primary/5 flex flex-col justify-start text-center">
                  {t.image ? (
                    <div className="mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border-4 border-secondary/50 shadow-sm">
                      <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/50 border-4 border-white shadow-sm">
                      <Users className="h-8 w-8 text-primary/40" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-primary-deep">{t.name}</h3>
                    <div className="text-xs font-semibold text-accent uppercase tracking-wider mt-1">{t.role}</div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Team image showcase */}
          <div className="mt-12">
            <img
              src={teamImg}
              alt="Laundry Today team in facility"
              loading="lazy"
              className="rounded-[32px] w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover object-center shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* 7. Customer Reviews (Reused Component) */}
      <Reviews />

      {/* 8. Call To Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white text-center rounded-t-[40px]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-black sm:text-4xl tracking-tight">Ready to Try Premium Laundry Care?</h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            Schedule a pickup under a minute, let our experts care for your fabrics, and get fresh, folded clothes delivered in 24 hours.
          </p>
          <div className="mt-8">
            <button
              onClick={() => openBooking()}
              suppressHydrationWarning
              className="accent-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5 cursor-pointer border-0"
            >
              Book Pickup Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
