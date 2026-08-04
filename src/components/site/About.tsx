import about from "@/assets/about.jpg";
import { ButtonLink, Counter, Reveal, Ribbon } from "./common";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Trained specialists and hospital-grade hygiene standards",
  "Every order tracked, timestamped and quality-checked",
  "Transparent per-kilo pricing with no hidden charges",
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Ribbon>About Laundry Today</Ribbon>
          <h2 className="mt-6 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            A modern laundry company built around your schedule
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Laundry Today is a technology-enabled laundry and dry cleaning service. We collect from
            your door, clean in our own facility using professional equipment and eco-friendly
            detergents, then return everything pressed, folded and ready to wear — usually within 24
            hours.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            No queues, no waiting, no weekend lost to the washing machine. Just fresh clothes,
            delivered.
          </p>

          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground/85 sm:text-base">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 grid grid-cols-3 gap-2 sm:gap-4 rounded-3xl bg-secondary p-4 sm:p-6">
            <Counter to={12000} suffix="+" label="Orders" />
            <Counter to={24} suffix="h" label="Turnaround" />
            <Counter to={98} suffix="%" label="On time" />
          </div>

          <div className="mt-8">
            <ButtonLink href="#services" variant="blue">
              Explore Services
            </ButtonLink>
          </div>
        </div>

        <Reveal y={40}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[44px] bg-secondary" aria-hidden="true" />
            <img
              src={about}
              alt="Laundry Today team folding fresh white shirts in a modern facility"
              loading="lazy"
              width={1200}
              height={1008}
              className="relative h-[420px] w-full rounded-[36px] object-cover shadow-lift sm:h-[520px]"
            />
            <div className="glass-card floaty absolute -bottom-6 left-6 rounded-3xl px-6 py-4">
              <div className="text-2xl font-extrabold text-primary-deep">4.9★</div>
              <div className="text-xs font-semibold text-muted-foreground">Average rating</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
