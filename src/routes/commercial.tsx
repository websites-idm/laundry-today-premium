import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hotel, Utensils, HeartPulse, Building2, School, Landmark, ArrowRight, ShieldCheck, Scale, Clock } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/common";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Laundry Contracts | Laundry Today" },
      {
        name: "description",
        content:
          "High-capacity contract laundry and dry cleaning services for hotels, hospitals, restaurants, gyms, spas, hostels, and corporate uniforms in Navi Mumbai.",
      },
      { property: "og:title", content: "Commercial Laundry Contracts | Laundry Today" },
      { property: "og:description", content: "Bulk cleaning solutions and contract rates for business partners." },
    ],
  }),
  component: CommercialPage,
});

const industries = [
  { icon: Hotel, name: "Hotels", desc: "Pristine sheets, duvet covers, pillowcases, bathrobes, and towels cleaned and flatwork ironed." },
  { icon: Utensils, name: "Restaurants", desc: "Stain extraction from tablecloths, napkins, aprons, chef uniforms, and kitchen towels." },
  { icon: HeartPulse, name: "Hospitals & Clinics", desc: "Hospital-grade sanitization for medical scrubs, patient gowns, bed linens, and curtains." },
  { icon: Building2, name: "Corporate Offices", desc: "Standard uniform cleaning programs for front-office receptionists, security, and staff members." },
  { icon: School, name: "Schools & Hostels", desc: "Bulk laundry service contracts for university student hostels and school boardings." },
  { icon: Landmark, name: "Gyms & Spas", desc: "Quick-dry collection programs for sweat-soiled fitness towels, robes, and uniforms." },
];

const pillars = [
  { icon: Clock, title: "Next-Day Turnaround", desc: "Never run out of linen. Reliable 24-hour collection-to-return schedules." },
  { icon: ShieldCheck, title: "Sanitized Care", desc: "Thermo-chemical sanitization cycles kill 99.9% of bacteria and viruses." },
];

function CommercialPage() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("Hotels");
  const [type, setType] = useState("Bedding & Linens");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !name || !phone) return;

    // Compile message for WhatsApp redirection
    const text = `Hello Laundry Today! I would like to request a commercial laundry quote:
- *Company*: ${company}
- *Contact Person*: ${name}
- *Phone*: ${phone}
- *Industry*: ${industry}
- *Linen Category*: ${type}
- *Special Instructions*: ${message || "None"}`;

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
              B2B Solutions
            </span>
          </Reveal>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Commercial Laundry Services
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            High-volume linen washing, flatwork pressing, and corporate uniform cleaning programs. Outsource your laundry and focus on business operations.
          </p>
        </div>
      </section>

      {/* 2. Key Pillars */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.1} y={30}>
                <div className="glass-card h-full rounded-[32px] bg-secondary p-8 border border-primary/5 shadow-soft hover:shadow-lift transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-primary shadow-soft shrink-0">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold text-primary-deep">{p.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry Verticals Served */}
      <section className="py-20 bg-secondary rounded-[40px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="Who We Help"
            title="Laundry Programs Customized by Industry"
            subtitle="Spas, restaurants, hotels, or gyms—we deliver customized wash configurations for every fabric type."
          />
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, idx) => (
              <Reveal key={ind.name} delay={idx * 0.05} y={40}>
                <div className="glass-card flex gap-4 p-6 rounded-[28px] bg-white border border-primary/5 shadow-soft hover:shadow-lift transition-all h-full">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary shrink-0">
                    <ind.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-primary-deep">{ind.name}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{ind.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Business Inquiry Quote Request Form */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-[36px] bg-secondary p-8 sm:p-12 border border-primary/5 shadow-soft">
            <div className="text-center max-w-2xl mx-auto">
              <SectionTitle ribbon="Get a Quote" title="Commercial Contract Inquiry" />
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Provide your commercial volume requirements below. Our corporate relations coordinator will compile customized contract rates and reach out.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xs font-bold text-primary-deep uppercase tracking-wider">Company / Business Name *</label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent"
                    placeholder="e.g. Grand Vista Hotel"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-primary-deep uppercase tracking-wider">Contact Person Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent"
                    placeholder="e.g. Sunil Kumar"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-bold text-primary-deep uppercase tracking-wider">Phone / WhatsApp Number *</label>
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

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="industry" className="text-xs font-bold text-primary-deep uppercase tracking-wider">Industry Type</label>
                  <select
                    id="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent cursor-pointer"
                  >
                    <option>Hotels</option>
                    <option>Restaurants</option>
                    <option>Hospitals & Clinics</option>
                    <option>Corporate Offices</option>
                    <option>Schools & Hostels</option>
                    <option>Gyms & Spas</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="type" className="text-xs font-bold text-primary-deep uppercase tracking-wider">Laundry Category</label>
                  <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent cursor-pointer"
                  >
                    <option>Bedding & Linens</option>
                    <option>Towels & Robes</option>
                    <option>Staff / Office Uniforms</option>
                    <option>Kitchen / Restaurant Linens</option>
                    <option>Dry Cleaning (Spa Gowns, etc.)</option>
                    <option>Schools & Hostels</option>
                    <option>Gyms & Spas</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-primary-deep uppercase tracking-wider">Special Contract Requests / Notes</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="rounded-2xl border-2 border-primary/10 bg-white px-5 py-3.5 text-sm font-semibold outline-none focus:border-accent resize-none"
                  placeholder="Provide frequency of pickup, custom folding request, or invoicing specifications..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  suppressHydrationWarning
                  className="accent-gradient w-full rounded-2xl py-4 text-xs font-black uppercase tracking-wider text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5 border-none cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry to WhatsApp</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
