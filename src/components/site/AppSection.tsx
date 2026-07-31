import { Bell, CreditCard, Gift, MapPin, CalendarClock, Apple, Play } from "lucide-react";
import phone from "@/assets/app-phone.jpg";
import { Bubbles, Reveal } from "./common";

const features = [
  { icon: MapPin, label: "Track Laundry" },
  { icon: CalendarClock, label: "Book Pickup" },
  { icon: CreditCard, label: "Payments" },
  { icon: Bell, label: "Notifications" },
  { icon: Gift, label: "Loyalty Rewards" },
];

export function AppSection() {
  return (
    <section className="brand-gradient relative overflow-hidden py-20 sm:py-28">
      <Bubbles count={14} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div>
            <span className="accent-gradient inline-flex rounded-full px-6 py-2.5 text-xs font-extrabold tracking-[0.22em] text-accent-foreground uppercase sm:text-sm">
              The App
            </span>
            <h2 className="mt-6 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Your laundry, managed from your pocket
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Book a slot in seconds, watch your order move through every stage and pay however you
              like — all from the Laundry Today app.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="glass-card flex items-center gap-2.5 rounded-2xl px-4 py-3"
                >
                  <f.icon className="h-4.5 w-4.5 text-primary-deep" />
                  <span className="text-sm font-bold text-primary-deep">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-primary-deep shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Apple className="h-6 w-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-semibold tracking-wide uppercase opacity-70">
                    Download on the
                  </span>
                  <span className="block text-sm font-extrabold">App Store</span>
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-primary-deep shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Play className="h-6 w-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-semibold tracking-wide uppercase opacity-70">
                    Get it on
                  </span>
                  <span className="block text-sm font-extrabold">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} y={40}>
          <img
            src={phone}
            alt="Laundry Today mobile app showing live order tracking"
            loading="lazy"
            width={1008}
            height={1200}
            className="floaty mx-auto w-full max-w-sm rounded-[36px] shadow-lift"
          />
        </Reveal>
      </div>
    </section>
  );
}
