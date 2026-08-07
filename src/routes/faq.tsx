import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/common";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Laundry Today" },
      {
        name: "description",
        content:
          "Find answers to common questions about pickup timings, weight calculation, stain treatment, dry cleaning policies, and payment methods.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Laundry Today" },
      { property: "og:description", content: "Categorized answers to common laundry and booking queries." },
    ],
  }),
  component: FaqPage,
});

interface FaqItem {
  category: string;
  q: string;
  a: string;
}

const faqList: FaqItem[] = [
  // Pricing
  { category: "Pricing", q: "How does free pickup and delivery work?", a: "Minimum order value is ₹399. Choose your preferred pickup time slot while booking. Our rider will arrive at your selected time to collect your laundry and deliver it back once professionally cleaned." },
  { category: "Pricing", q: "How are dry cleaning prices structured?", a: "Dry cleaning is priced per individual garment item (e.g. ₹99 for a shirt, ₹199 for a saree). You can review all item prices in our Pricing page." },
  { category: "Pricing", q: "Can I pay online after delivery?", a: "Yes, you can pay securely using UPI, Credit/Debit cards, or Cash upon delivery. A digital invoice is sent to your WhatsApp as soon as your order is packed." },
  
  // Booking
  { category: "Booking", q: "How do I schedule a pickup?", a: "You can book directly using our website's booking form, or send us a WhatsApp message. Booking takes under a minute." },
  { category: "Booking", q: "Can I reschedule my pickup timing?", a: "Absolutely. Contact our logistics support on WhatsApp at least 2 hours before your scheduled slot, and we will update your appointment." },
  { category: "Booking", q: "What sectors of Navi Mumbai do you cover?", a: "We provide regular door collection across Kopar Khairane, Ghansoli, Vashi, Sanpada, Nerul, Belapur, Seawoods, and Kharghar." },
  
  // Cleaning
  { category: "Cleaning", q: "Do you wash my clothes with other people's clothes?", a: "No, never. We maintain strict hygiene policies. Every customer's order is washed, dried, and packaged separately in its own dedicated washing machines." },
  { category: "Cleaning", q: "Do you treat collars and tough stains?", a: "Yes, we inspect all garments during sorting and pre-spot collars, grease cuffs, and food spots using fabric-safe chemicals before washing." },
  { category: "Cleaning", q: "Do you clean heavy blankets and quilts?", a: "Yes, we use commercial oversized washers and tumbling dryers that fully clean and dry single, double, and heavy wool comforters/blankets." },
  
  // Policies
  { category: "Policies", q: "What happens if a garment is lost or damaged?", a: "We follow international textile cleaning standards. In the highly unlikely event of loss or damage, we provide reimbursement up to 10 times the wash charge of that specific item." },
  { category: "Policies", q: "How do you handle color bleeding concerns?", a: "We separate whites and dark colors during sorting. However, if you have a garment known to bleed color, please let our pickup rider know so we can tag it for separate handling." },
];

const categories = ["All", "Booking", "Pricing", "Cleaning", "Policies"];

function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      {/* 1. Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white rounded-b-[40px] shadow-lift">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center z-10 sm:px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] uppercase backdrop-blur-md">
              Knowledge base
            </span>
          </Reveal>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Quick answers about order timelines, care guidelines, billing questions, and logistics support.
          </p>
        </div>
      </section>

      {/* 2. Interactive FAQ Catalog */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Filters row */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-8 mb-12">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 pr-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null); // Reset open accordion
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border-none ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-soft"
                      : "bg-secondary text-primary-deep hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="glass-card flex items-center rounded-2xl border-2 border-primary/10 bg-white px-4 py-2.5 shadow-soft focus-within:border-accent w-full md:max-w-xs shrink-0">
              <Search className="h-4.5 w-4.5 text-slate-400 mr-2" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenIndex(null);
                }}
                className="w-full bg-transparent border-none outline-none text-xs font-semibold text-foreground placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Accordion Questions */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <Reveal key={idx} delay={idx * 0.04} y={25}>
                    <div className="glass-card rounded-[24px] border border-primary/5 bg-white shadow-soft transition-all">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-primary-deep border-none bg-transparent cursor-pointer"
                      >
                        <span className="text-sm sm:text-base font-extrabold flex items-center gap-3">
                          <HelpCircle className="h-5 w-5 text-primary/70 shrink-0" />
                          {faq.q}
                        </span>
                        <div className={`grid h-8 w-8 place-items-center rounded-full bg-secondary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                          <ChevronDown className="h-4 w-4 text-primary" />
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 border-t border-border" : "max-h-0"}`}>
                        <p className="px-6 py-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })
            ) : (
              <div className="text-center py-20">
                <p className="text-lg font-semibold text-muted-foreground">No questions found matching your search term.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-4 rounded-full bg-secondary px-5 py-2.5 text-xs font-bold text-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-20 bg-secondary rounded-t-[40px] text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <MessageSquare className="h-10 w-10 text-primary mx-auto" />
          <h2 className="text-3xl font-black text-primary-deep mt-4 tracking-tight">Still Have Questions?</h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Our support desk is active from 9:00 AM to 9:00 PM, seven days a week. Connect directly on WhatsApp for instant assistance.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://wa.me/917702608040"
              className="accent-gradient rounded-full px-8 py-4 text-sm font-extrabold text-accent-foreground shadow-lift hover:-translate-y-0.5 transition-transform decoration-none"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
