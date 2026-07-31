import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Reveal, SectionTitle } from "./common";

const cards = [
  { icon: Phone, label: "Call us", value: "+1 (555) 240-8890", href: "tel:+15552408890" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with support", href: "https://wa.me/15552408890" },
  { icon: Mail, label: "Email", value: "hello@laundrytoday.com", href: "mailto:hello@laundrytoday.com" },
  { icon: MapPin, label: "Location", value: "18 Riverside Ave, Downtown", href: "#map" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="Contact"
          title="Book a pickup in under a minute"
          subtitle="Call, message or send us your details and we'll confirm your slot right away."
        />

        <Reveal y={40}>
          <div className="mt-12 overflow-hidden rounded-[36px] bg-white shadow-lift">
            <div className="grid lg:grid-cols-2">
              <div className="p-7 sm:p-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  {cards.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="lift flex items-start gap-3 rounded-3xl bg-secondary p-5"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl brand-gradient text-primary-foreground">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold tracking-wide text-muted-foreground uppercase">
                          {c.label}
                        </span>
                        <span className="block truncate text-sm font-bold text-foreground">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-3xl border-2 border-primary/15 p-5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="text-sm">
                    <div className="font-bold">Business hours</div>
                    <p className="mt-1 text-muted-foreground">Mon – Sat: 7:00 – 21:00</p>
                    <p className="text-muted-foreground">Sunday: 9:00 – 17:00</p>
                  </div>
                </div>

                <form
                  className="mt-6 grid gap-3 sm:grid-cols-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary"
                    placeholder="Your name"
                    aria-label="Your name"
                  />
                  <input
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary"
                    placeholder="Phone number"
                    aria-label="Phone number"
                  />
                  <textarea
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary sm:col-span-2"
                    rows={3}
                    placeholder="Pickup address and preferred time"
                    aria-label="Pickup details"
                  />
                  <button
                    type="submit"
                    className="accent-gradient rounded-full px-7 py-3.5 text-sm font-bold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:col-span-2"
                  >
                    Request Pickup
                  </button>
                </form>
              </div>

              <div id="map" className="min-h-[320px] lg:min-h-full">
                <iframe
                  title="Laundry Today location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.16%2C51.49%2C-0.10%2C51.52&layer=mapnik"
                  className="h-full min-h-[320px] w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
