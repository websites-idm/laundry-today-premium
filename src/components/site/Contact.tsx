import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal, SectionTitle } from "./common";

const cards = [
  { icon: Phone, label: "Call us", value: "07702608040", href: "tel:07702608040" },
  { imageSrc: "/whatsapp.png", label: "WhatsApp", value: "Chat with support", href: "https://wa.me/917702608040" },
  { icon: Mail, label: "Email", value: "hello@laundrytoday.com", href: "mailto:hello@laundrytoday.com" },
  { icon: MapPin, label: "Location", value: "Kopar Khairane, Navi Mumbai", href: "#map" },
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number");
      return;
    }
    if (!address.trim()) {
      setError("Please enter your address and preferred time");
      return;
    }

    setError("");
    const message = `Hi Laundry Today, I would like to request a pickup!\n\n👤 Name: ${name.trim()}\n📞 Phone: ${phone.trim()}\n🏠 Pickup Details: ${address.trim()}`;
    const whatsappUrl = `https://wa.me/917702608040?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

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
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl brand-gradient text-primary-foreground p-2">
                        {"imageSrc" in c ? (
                          <img src={c.imageSrc} alt={c.label} className="h-full w-full object-contain" />
                        ) : (
                          "icon" in c && <c.icon className="h-5 w-5" />
                        )}
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

                <div className="mt-4 flex items-start gap-3 rounded-3xl border-2 border-primary/15 p-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="text-sm">
                    <div className="font-bold">Our Address</div>
                    <p className="mt-1 text-muted-foreground leading-relaxed">
                      Shop no 7, Shiv parwati appartment, Bonkode, Sector 12, Kopar Khairane, Navi Mumbai, Maharashtra 400709
                    </p>
                  </div>
                </div>

                <form
                  className="mt-6 grid gap-3 sm:grid-cols-2"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary"
                    placeholder="Your name"
                    aria-label="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary"
                    placeholder="Phone number"
                    aria-label="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <textarea
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary sm:col-span-2"
                    rows={3}
                    placeholder="Pickup address and preferred time"
                    aria-label="Pickup details"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {error && (
                    <p className="text-xs font-bold text-red-500 sm:col-span-2">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="accent-gradient rounded-full px-7 py-3.5 text-sm font-bold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:col-span-2 cursor-pointer"
                  >
                    Request Pickup
                  </button>
                </form>
              </div>

              <div id="map" className="min-h-[320px] lg:min-h-full">
                <iframe
                  title="Laundry Today location"
                  src="https://maps.google.com/maps?q=Shop%20no%207%2C%20Shiv%20parwati%20appartment%2C%20Bonkode%2C%20Sector%2012%2C%20Kopar%20Khairane%2C%20Navi%20Mumbai%2C%20Maharashtra%20400709&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
