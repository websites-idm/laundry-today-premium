import { motion } from "motion/react";
import { Reveal, SectionTitle } from "./common";
import { CalendarCheck, PackageCheck, WashingMachine, ClipboardCheck, Truck } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book Pickup", copy: "Choose a 1-hour slot online or in the app." },
  { icon: PackageCheck, title: "We Collect", copy: "Our rider arrives with a sealed branded bag." },
  { icon: WashingMachine, title: "Professional Cleaning", copy: "Sorted, treated and cleaned by fabric type." },
  { icon: ClipboardCheck, title: "Quality Check", copy: "Every item inspected, pressed and packed." },
  { icon: Truck, title: "Fresh Delivery", copy: "Back at your door within 24 hours." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="How It Works"
          title="Five simple steps from pile to pressed"
          subtitle="No queues, no paperwork. Track every stage in real time."
        />

        <div className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-7 w-[3px] rounded-full bg-secondary sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            className="absolute top-0 left-7 w-[3px] origin-top rounded-full brand-gradient sm:left-1/2 sm:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            style={{ bottom: 0 }}
          />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-5 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:flex-row-reverse sm:pl-12 sm:text-right"
                  }`}
                >
                  <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl brand-gradient text-primary-foreground shadow-soft">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 rounded-3xl bg-white p-5 shadow-soft">
                    <span className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-1 text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
