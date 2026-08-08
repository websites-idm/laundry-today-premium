import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Calendar, ChevronDown } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/common";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Laundry Today" },
      {
        name: "description",
        content:
          "Get in touch with Laundry Today. Contact support via phone, WhatsApp, email, or visit our operations center in Kopar Khairane, Navi Mumbai.",
      },
      { property: "og:title", content: "Contact Us | Laundry Today" },
      { property: "og:description", content: "Phone numbers, WhatsApp chats, business hours, and location maps." },
    ],
  }),
  component: ContactPage,
});

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

function ContactPage() {
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
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      {/* 1. Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white rounded-b-[40px] shadow-lift">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center z-10 sm:px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] uppercase backdrop-blur-md">
              Support Center
            </span>
          </Reveal>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have questions about dry cleaning, contract invoicing, or active pickup slots? Send us a message or chat directly.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Form */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal x={-30}>
                <h3 className="text-2xl font-black text-primary-deep">Contact Information</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Call or WhatsApp us for instant booking, or visit our facility located at the heart of Navi Mumbai.
                </p>
              </Reveal>

              <div className="space-y-4 mt-8">
                {cards.map((c, idx) => (
                  <Reveal key={c.label} x={-30} delay={idx * 0.05}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex gap-4 p-5 rounded-2xl bg-secondary border border-primary/5 decoration-none hover:bg-slate-100 transition-colors"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-soft shrink-0">
                        {"imageSrc" in c ? (
                          <img src={c.imageSrc} alt={c.label} className="h-5 w-5 object-contain" />
                        ) : (
                          <c.icon className="h-5 w-5" />
                        )}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-primary-deep">{c.label}</h4>
                        <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-semibold">{c.value}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}

                {/* Business Hours */}
                <Reveal x={-30} delay={0.2}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-secondary border border-primary/5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-soft shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary-deep mb-2">Business Hours</h4>
                      <div className="space-y-1">
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Monday: 9:00 AM – 9:00 PM</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Tuesday: 9:00 AM – 9:00 PM</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Wednesday: 9:00 AM – 9:00 PM</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Thursday: 9:00 AM – 9:00 PM</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Friday: 9:00 AM – 9:00 PM</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Saturday: 9:00 AM – 9:00 PM</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Sunday: 9:00 AM – 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Laundry Address */}
                <Reveal x={-30} delay={0.25}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-secondary border border-primary/5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-soft shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary-deep">Laundry Address</h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed font-semibold">
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
                </Reveal>
              </div>
            </div>

            {/* Redesigned Form (Image Match) */}
            <div className="lg:col-span-7">
              <Reveal x={30} delay={0.1}>
                <div className="glass-card rounded-[32px] bg-secondary p-8 border border-primary/5 shadow-soft">
                  <h3 className="text-2xl font-black text-primary-deep">Book Doorstep Pickup</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Select your service and timeslot. Submitting this form redirects to WhatsApp with your details.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                    {/* Name */}
                    <div className="relative flex items-center">
                      <input
                        className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold placeholder:text-muted-foreground/60 text-foreground"
                        placeholder="Your Name"
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
                        suppressHydrationWarning
                      />
                    </div>

                    {/* Time Slot */}
                    <div className="relative flex items-center">
                      <select
                        className="rounded-2xl border-2 border-border bg-white pl-5 pr-11 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold text-foreground cursor-pointer appearance-none"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
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
                      className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full w-full py-4 text-sm font-bold transition-transform duration-300 hover:-translate-y-0.5 active:scale-98 cursor-pointer border-none shadow-lift"
                    >
                      Book Laundry Now!
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Google Map Iframe */}
      <section className="py-20 bg-secondary rounded-t-[40px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="Find Us"
            title="Our Operational Center Location"
            subtitle="Visit our washing and packaging store located in Kopar Khairane, Navi Mumbai."
          />
          <Reveal y={40} className="mt-12">
            <div className="relative rounded-[32px] overflow-hidden shadow-lift border border-primary/5 h-[400px]">
              <iframe
                title="Laundry Today Office Store Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1982761899173!2d73.0064789!3d19.1099684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c17bde4f5cd3%3A0x14eca57f61fca9f1!2sLAUNDRY%20TODAY!5e0!3m2!1sen!2sin!4v1723024843000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
          </Reveal>
        </div>
      </section>
    </div>
  );
}
