import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, ChevronDown } from "lucide-react";
import { Reveal, SectionTitle } from "./common";

const serviceOptions = [
  "Wash & Fold",
  "Wash & Iron",
  "Dry Cleaning",
  "Steam Ironing",
  "Shoe Cleaning",
  "Curtain Cleaning",
  "Carpet Cleaning",
  "Blanket Cleaning",
  "Sofa Cleaning",
  "Commercial Laundry",
  "Express Laundry",
];

const timeSlots = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "01:00 PM - 03:00 PM",
  "03:00 PM - 05:00 PM",
  "05:00 PM - 07:00 PM",
  "07:00 PM - 09:00 PM",
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Select a Service");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Select a Time Slot");
  const [notes, setNotes] = useState("");
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
    if (!service || service === "Select a Service") {
      setError("Please select a service");
      return;
    }
    if (!date) {
      setError("Please choose a pickup date");
      return;
    }
    if (!time || time === "Select a Time Slot") {
      setError("Please select a time slot");
      return;
    }
    if (!address.trim()) {
      setError("Please enter your address with landmark");
      return;
    }

    setError("");
    const message = `Hi Laundry Today, I would like to request a pickup!\n\n👤 Name: ${name.trim()}\n📞 Number: ${phone.trim()}\n🧺 Service: ${service}\n🏠 Address: ${address.trim()}\n📅 Date: ${date}\n⏰ Time: ${time}\n📝 Items: ${notes.trim() || "None"}`;
    const whatsappUrl = `https://wa.me/917702608040?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const cards = [
    { icon: Phone, label: "Book on Call", value: "+91 7702608040", href: "tel:+917702608040" },
    { imageSrc: "/whatsapp.png", label: "Book on WhatsApp", value: "+91 7702608040", href: "https://wa.me/917702608040" },
    { icon: Mail, label: "Email", value: "LAUNDRYTODAY01@gmail.com", href: "mailto:LAUNDRYTODAY01@gmail.com" },
    { icon: MapPin, label: "SERVICE AREA", value: "All Areas in Navi Mumbai", href: "https://maps.app.goo.gl/TGh4eUPNZAJqPbSu5" },
  ];

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
              <div className="p-7 sm:p-10 flex flex-col justify-between h-full">
                
                {/* 4 contact cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {cards.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="lift flex items-start gap-3 rounded-3xl bg-secondary p-5 decoration-none"
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
                        <span className="block truncate text-sm font-bold text-foreground mt-0.5">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
 
                {/* Business Hours */}
                <div className="mt-6 flex items-start gap-3 rounded-3xl border-2 border-primary/15 p-5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="text-sm">
                    <div className="font-bold text-foreground">Business Hours</div>
                    <p className="mt-1 text-muted-foreground font-semibold">Monday – Sunday</p>
                    <p className="text-muted-foreground font-semibold">9:00 AM – 9:00 PM</p>
                  </div>
                </div>

                {/* Laundry Address */}
                <div className="mt-4 flex items-start gap-3 rounded-3xl border-2 border-primary/15 p-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="text-sm">
                    <div className="font-bold text-foreground">Laundry Address</div>
                    <p className="mt-1 text-muted-foreground leading-relaxed font-semibold">
                      Laundry Today<br />
                      Shop No. 7<br />
                      Shiv Parvati Apartment<br />
                      Bonkode<br />
                      Sector 12<br />
                      Kopar Khairane<br />
                      Navi Mumbai – 400709
                    </p>
                  </div>
                </div>

                {/* Redesigned Form (Image Match) */}
                <form
                  className="mt-6 flex flex-col gap-4"
                  onSubmit={handleSubmit}
                >
                  {/* Name */}
                  <div className="relative flex items-center">
                    <input
                      className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold placeholder:text-muted-foreground/60 text-foreground"
                      placeholder="Your Name"
                      aria-label="Your Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Number */}
                  <div className="relative flex items-center">
                    <input
                      className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold placeholder:text-muted-foreground/60 text-foreground"
                      placeholder="Your Number"
                      aria-label="Your Number"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Service */}
                  <div className="relative flex items-center">
                    <select
                      className="rounded-2xl border-2 border-border bg-white pl-5 pr-11 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold text-foreground cursor-pointer appearance-none"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      aria-label="Select a Service"
                    >
                      <option value="Select a Service">Select a Service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 pointer-events-none text-red-500">
                      <ChevronDown className="h-4.5 w-4.5 stroke-[3px]" />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="relative flex items-center">
                    <Calendar className="absolute left-4 h-4.5 w-4.5 text-muted-foreground pointer-events-none" />
                    <input
                      className="rounded-2xl border-2 border-border bg-white pl-11 pr-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold text-foreground cursor-pointer"
                      type="text"
                      placeholder="Choose Pickup Date"
                      value={date}
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                      onChange={(e) => setDate(e.target.value)}
                      aria-label="Choose Pickup Date"
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Time Slot */}
                  <div className="relative flex items-center">
                    <select
                      className="rounded-2xl border-2 border-border bg-white pl-5 pr-11 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold text-foreground cursor-pointer appearance-none"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      aria-label="Select a Time Slot"
                    >
                      <option value="Select a Time Slot">Select a Time Slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 pointer-events-none text-red-500">
                      <ChevronDown className="h-4.5 w-4.5 stroke-[3px]" />
                    </div>
                  </div>

                  {/* Address */}
                  <textarea
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold placeholder:text-muted-foreground/60 text-foreground resize-none"
                    rows={2}
                    placeholder="Address with Landmark"
                    aria-label="Address with Landmark"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    suppressHydrationWarning
                  />

                  {/* Items list */}
                  <textarea
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold placeholder:text-muted-foreground/60 text-foreground resize-none"
                    rows={4}
                    placeholder="Please share what all items you have for a laundry...?"
                    aria-label="Share laundry items"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    suppressHydrationWarning
                  />

                  {error && (
                    <p className="text-xs font-bold text-red-500">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full w-full py-4 text-sm font-bold transition-transform duration-300 hover:-translate-y-0.5 active:scale-98 cursor-pointer border-none shadow-lift"
                  >
                    Book Laundry Now!
                  </button>
                </form>
              </div>

              {/* Maps embed */}
              <div id="map" className="relative min-h-[350px] lg:min-h-full flex flex-col justify-between">
                <iframe
                  title="Laundry Today location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1982761899173!2d73.0064789!3d19.1099684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c17bde4f5cd3%3A0x14eca57f61fca9f1!2sLAUNDRY%20TODAY!5e0!3m2!1sen!2sin!4v1723024843000!5m2!1sen!2sin"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
                
                {/* Float link button to open exact maps location */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href="https://maps.app.goo.gl/TGh4eUPNZAJqPbSu5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-gradient inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-xs font-extrabold text-accent-foreground shadow-lift decoration-none hover:scale-102 transition-transform"
                  >
                    <span>Open in Maps</span>
                    <MapPin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
