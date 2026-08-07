import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, MapPin, User, Phone, Mail, FileText, ClipboardList, CheckCircle2 } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/common";

export const Route = createFileRoute("/book-pickup")({
  head: () => ({
    meta: [
      { title: "Book a Doorstep Pickup | Laundry Today" },
      {
        name: "description",
        content:
          "Schedule a free doorstep laundry pickup online. Choose your service, select a convenient date/time slot, and track your order.",
      },
      { property: "og:title", content: "Book a Doorstep Pickup | Laundry Today" },
      { property: "og:description", content: "Schedule your pickup slot in under a minute." },
    ],
  }),
  component: BookPickupPage,
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

function BookPickupPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("Wash & Fold");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00 AM - 11:00 AM");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address || !date) return;

    // Compile message content for WhatsApp redirection
    const text = `Hello Laundry Today! I would like to schedule a doorstep pickup:
- *Customer Name*: ${name}
- *Phone*: ${phone}
- *Email*: ${email || "N/A"}
- *Address*: ${address}
- *Service*: ${service}
- *Pickup Date*: ${date}
- *Timeslot*: ${time}
- *Instructions*: ${notes || "None"}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917702608040?text=${encodedText}`, "_blank");
  };

  return (
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      {/* 1. Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white rounded-b-[40px] shadow-lift">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center z-10 sm:px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] uppercase backdrop-blur-md">
              Scheduling
            </span>
          </Reveal>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Book Doorstep Pickup
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Choose your service type and convenient timeslot below. Our rider will arrive with digital weight scales and separate laundry collection bags.
          </p>
        </div>
      </section>

      {/* 2. Booking form & Live receipt summary */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column Form */}
            <div className="lg:col-span-7">
              <Reveal x={-30}>
                <div className="glass-card rounded-[32px] bg-secondary p-8 border border-primary/5 shadow-soft">
                  <h3 className="text-2xl font-black text-primary-deep">Order Details</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Please fill in your coordinates and schedule preference.</p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-primary-deep uppercase tracking-wider flex items-center gap-1.5">
                        <User className="h-4 w-4 text-primary" /> Customer Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent"
                        placeholder="e.g. Aravind Swamy"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-primary-deep uppercase tracking-wider flex items-center gap-1.5">
                          <Phone className="h-4 w-4 text-primary" /> Phone / WhatsApp *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent"
                          placeholder="e.g. 9876543210"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-primary-deep uppercase tracking-wider flex items-center gap-1.5">
                          <Mail className="h-4 w-4 text-primary" /> Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent"
                          placeholder="e.g. aravind@outlook.com"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="address" className="text-xs font-bold text-primary-deep uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-primary" /> Pickup & Delivery Address *
                      </label>
                      <textarea
                        id="address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows={3}
                        className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent resize-none"
                        placeholder="Flat no, Building name, Sector, Landmark, Navi Mumbai..."
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-xs font-bold text-primary-deep uppercase tracking-wider flex items-center gap-1.5">
                        <ClipboardList className="h-4 w-4 text-primary" /> Service Required
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date & Time slots */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="date" className="text-xs font-bold text-primary-deep uppercase tracking-wider flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-primary" /> Select Pickup Date *
                        </label>
                        <input
                          id="date"
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent cursor-pointer"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="time" className="text-xs font-bold text-primary-deep uppercase tracking-wider flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-primary" /> Select Timeslot
                        </label>
                        <select
                          id="time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent cursor-pointer"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="notes" className="text-xs font-bold text-primary-deep uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="h-4 w-4 text-primary" /> Special Handling Instructions
                      </label>
                      <textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent resize-none"
                        placeholder="e.g. Separate red shirt, hang shirts, dry clean curtain hooks..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="accent-gradient w-full rounded-2xl py-4 text-xs font-black uppercase tracking-wider text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5 border-none cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Confirm and Dispatch Rider</span>
                        <CheckCircle2 className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>

            {/* Right Column Receipt Summary */}
            <div className="lg:col-span-5 lg:sticky lg:top-[96px]">
              <Reveal x={30} delay={0.15}>
                <div className="glass-card rounded-[32px] bg-primary-deep text-white p-8 border border-white/10 shadow-lift relative overflow-hidden">
                  {/* Decorative background circle */}
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/5" />
                  
                  <h3 className="text-xl font-black tracking-tight border-b border-white/10 pb-4">Booking Summary</h3>
                  
                  <div className="mt-6 space-y-5">
                    {/* Customer Info */}
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/50">Client Name</div>
                      <div className="text-sm font-bold mt-1 text-white/90">{name || "Not entered"}</div>
                    </div>

                    {/* Contact Number */}
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/50">WhatsApp Number</div>
                      <div className="text-sm font-bold mt-1 text-white/90">{phone || "Not entered"}</div>
                    </div>

                    {/* Selected Service */}
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/50">Service Selected</div>
                      <div className="text-sm font-bold mt-1 text-accent">{service}</div>
                    </div>

                    {/* Schedule timeslot */}
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/50">Scheduled Date & Time</div>
                      <div className="text-sm font-bold mt-1 text-white/90 flex items-center gap-2">
                        <Calendar className="h-4 w-4 shrink-0 text-white/70" />
                        <span>{date || "Date not selected"}</span>
                        {date && <span className="text-white/40">|</span>}
                        {date && <span>{time}</span>}
                      </div>
                    </div>

                    {/* Address coordinate */}
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/50">Delivery Address</div>
                      <div className="text-xs leading-relaxed mt-1 text-white/70 line-clamp-3">{address || "Address details not specified"}</div>
                    </div>
                  </div>

                  {/* Summary notes disclaimer */}
                  <div className="mt-8 pt-6 border-t border-white/10 text-[10px] leading-relaxed text-white/40 font-semibold">
                    <span className="text-accent">Please Note: </span>
                    Estimated weights and final laundry items are verified at our main processing center. No transport charge is added for bills exceeding ₹399.
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
