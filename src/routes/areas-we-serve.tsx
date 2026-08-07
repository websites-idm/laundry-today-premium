import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Search, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/common";
import { openBooking } from "@/components/site/BookingPopup";

export const Route = createFileRoute("/areas-we-serve")({
  head: () => ({
    meta: [
      { title: "Areas We Serve | Laundry Today" },
      {
        name: "description",
        content:
          "Check laundry pickup availability in Navi Mumbai. We serve Kopar Khairane, Vashi, Ghansoli, Sanpada, Airoli, Nerul, Belapur, Kharghar, and surrounding areas.",
      },
      { property: "og:title", content: "Areas We Serve | Laundry Today" },
      { property: "og:description", content: "Check home pickup availability and view our Navi Mumbai coverage map." },
    ],
  }),
  component: AreasWeServePage,
});

const activeAreas = [
  { name: "Kopar Khairane", sectors: "Sectors 1 to 20 (including Bonkode & Ghansoli border)", status: "Active - 24h Turnaround" },
  { name: "Ghansoli", sectors: "Sectors 1 to 30", status: "Active - 24h Turnaround" },
  { name: "Vashi", sectors: "Sectors 1 to 30", status: "Active - 24h Turnaround" },
  { name: "Sanpada", sectors: "Sectors 1 to 20", status: "Active - 24h Turnaround" },
  { name: "Airoli", sectors: "Sectors 1 to 28", status: "Active - 24h Turnaround" },
  { name: "Nerul", sectors: "Sectors 1 to 50", status: "Active - 24h Turnaround" },
  { name: "Belapur", sectors: "Sectors 1 to 30", status: "Active - 24h Turnaround" },
  { name: "Kharghar", sectors: "Sectors 1 to 45", status: "Active - 24h Turnaround" },
  { name: "Seawoods", sectors: "Sectors 1 to 50", status: "Active - 24h Turnaround" },
];

function AreasWeServePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedStatus, setCheckedStatus] = useState<{ checked: boolean; available: boolean; matchName: string } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const normalizedQuery = searchQuery.toLowerCase().trim();
    const matched = activeAreas.find(
      (area) =>
        area.name.toLowerCase().includes(normalizedQuery) ||
        normalizedQuery.includes(area.name.toLowerCase())
    );

    if (matched) {
      setCheckedStatus({ checked: true, available: true, matchName: matched.name });
    } else {
      setCheckedStatus({ checked: true, available: false, matchName: searchQuery });
    }
  };

  return (
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      {/* 1. Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white rounded-b-[40px] shadow-lift">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center z-10 sm:px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] uppercase backdrop-blur-md">
              Coverage map
            </span>
          </Reveal>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Areas We Serve
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Free home collection and next-day delivery across Navi Mumbai. Enter your area below to verify pickup availability instantly.
          </p>
        </div>
      </section>

      {/* 2. Interactive Search Tool & Coverage List */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Search Availability Card */}
            <Reveal x={-40}>
              <div className="glass-card rounded-[32px] bg-secondary p-8 border border-primary/5 shadow-soft">
                <h3 className="text-2xl font-black text-primary-deep leading-tight">Check Availability</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Enter your neighborhood or sector name to check if our delivery agents can collect from your doorstep today.
                </p>

                <form onSubmit={handleSearch} className="mt-8 flex gap-2">
                  <div className="flex-grow glass-card flex items-center rounded-2xl border-2 border-primary/10 bg-white px-4 py-3 shadow-soft focus-within:border-accent">
                    <Search className="h-5 w-5 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="text"
                      placeholder="e.g. Vashi, Kharghar, Nerul..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-sm font-semibold text-foreground placeholder:text-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="accent-gradient rounded-2xl px-6 py-3.5 text-xs font-black uppercase tracking-wider text-accent-foreground shadow-soft border-none cursor-pointer"
                  >
                    Verify
                  </button>
                </form>

                {/* Availability Status Display */}
                {checkedStatus && (
                  <div className="mt-6">
                    {checkedStatus.available ? (
                      <div className="flex gap-3 rounded-2xl bg-emerald-50 border border-emerald-100 p-5 text-emerald-900">
                        <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                        <div>
                          <h4 className="text-sm font-extrabold">Service Available!</h4>
                          <p className="mt-1 text-xs leading-relaxed text-emerald-800">
                            Great news! We have active pickup slots in <strong>{checkedStatus.matchName}</strong> today.
                          </p>
                          <button
                            onClick={() => openBooking()}
                            className="mt-3 text-xs font-extrabold underline text-emerald-950 uppercase tracking-widest cursor-pointer bg-transparent border-none"
                          >
                            Book Pickup Now
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-3 rounded-2xl bg-red-50 border border-red-100 p-5 text-red-900">
                        <AlertCircle className="h-6 w-6 text-red-500 shrink-0" />
                        <div>
                          <h4 className="text-sm font-extrabold">Service Not Available Yet</h4>
                          <p className="mt-1 text-xs leading-relaxed text-red-800">
                            We are currently expanding. Although we don't serve <strong>{checkedStatus.matchName}</strong>, contact us on WhatsApp to see if we can make a special delivery arrangement.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Details card */}
                <div className="mt-8 flex gap-4 p-5 rounded-2xl bg-white border border-primary/5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-deep">Main Office & Operations Hub</h4>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      Shop no 7, Shiv parwati apartment, Bonkode, Sector 12, Kopar Khairane, Navi Mumbai, Maharashtra 400709
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Served Neighborhoods Grid */}
            <Reveal x={40} delay={0.15}>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-primary-deep">Serving Sectors in Navi Mumbai</h3>
                <div className="grid gap-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
                  {activeAreas.map((area) => (
                    <div
                      key={area.name}
                      className="flex items-center justify-between p-5 rounded-2xl bg-secondary border border-primary/5 hover:bg-white hover:shadow-soft transition-all duration-300"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-primary-deep">{area.name}</h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-normal">{area.sectors}</p>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 uppercase tracking-wider shrink-0">
                        {area.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 3. Google Maps Coverage Area */}
      <section className="py-20 bg-secondary rounded-[40px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            ribbon="Live Coverage"
            title="Navi Mumbai Operational Map"
            subtitle="Our facility is located in Kopar Khairane. We cover a radius of 15 kilometers for daily collections."
          />
          <Reveal y={40} className="mt-12">
            <div className="relative rounded-[32px] overflow-hidden shadow-lift border border-primary/5 h-[450px]">
              <iframe
                title="Laundry Today Location Map"
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

      {/* 4. Standout CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white text-center rounded-t-[40px]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-black tracking-tight">Ready to Schedule a Doorstep Pickup?</h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            Enter your details in our booking form, choose a convenient timeslot, and we'll dispatch a delivery rider immediately.
          </p>
          <div className="mt-8">
            <button
              onClick={() => openBooking()}
              suppressHydrationWarning
              className="accent-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-accent-foreground shadow-lift hover:-translate-y-0.5 transition-transform cursor-pointer border-0"
            >
              Book Pickup Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
