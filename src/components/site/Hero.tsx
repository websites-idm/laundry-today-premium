import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Truck, Timer, Sparkles, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Bubbles, ButtonLink, Reveal } from "./common";
import { openBooking } from "./BookingPopup";

const features = [
  { icon: Truck, title: "FREE Pickup", copy: "Doorstep collection at no extra cost." },
  { icon: Timer, title: "Fast Delivery", copy: "Back in 24 hours, fresh and folded." },
  { icon: Sparkles, title: "Premium Quality", copy: "Fabric-safe care by trained experts." },
  { icon: ShieldCheck, title: "100% Satisfaction", copy: "Not happy? We re-clean for free." },
];

const words = ["Laundry &", "Dry Cleaning", "Delivered To", "Your Door"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section id="home" className="relative overflow-hidden bg-secondary pt-24 pb-16 sm:pt-28 lg:pt-32">
      <Bubbles count={14} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[28px] shadow-lift sm:rounded-[40px]"
        >
          <motion.img
            src={hero}
            alt="Laundry Today delivery rider handing fresh laundry to a happy customer"
            width={1600}
            height={1088}
            style={{ y }}
            className="h-[520px] w-full scale-110 object-cover sm:h-[600px] lg:h-[680px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.42_0.13_248/0.88)] via-[oklch(0.5_0.14_246/0.6)] to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-16">
            <div className="max-w-xl">
              <Reveal>
                <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md">
                  Rated 4.9 by 12,000+ customers
                </span>
              </Reveal>

              <h1 className="mt-5 text-[2.1rem] leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                {words.map((w, i) => (
                  <motion.span
                    key={w}
                    className="block overflow-hidden"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {w}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="mt-5 text-lg font-bold text-white sm:text-xl"
              >
                FREE Pickup &amp; Delivery
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <ButtonLink onClick={() => openBooking()}>Book Pickup</ButtonLink>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="lift group h-full rounded-3xl bg-white p-6 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:accent-gradient group-hover:text-accent-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
