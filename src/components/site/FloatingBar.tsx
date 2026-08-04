import { useState, useEffect } from "react";
import { Phone, CalendarClock, Tag, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { openBooking } from "./BookingPopup";

export function FloatingBar() {
  const [activeTab, setActiveTab] = useState("prices");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#pricing") setActiveTab("prices");
      else if (hash === "#contact") setActiveTab("contact");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="fixed bottom-6 inset-x-4 z-50 lg:hidden max-w-sm mx-auto">
      {/* Sleek White Glassmorphic Capsule */}
      <div className="bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.12)] rounded-full px-2 py-1.5 relative h-[64px] flex items-center justify-around gap-1">
        
        {/* Item 1: Call Support */}
        <a
          href="tel:+917702608040"
          onClick={() => handleTabClick("call")}
          className={`flex flex-col items-center justify-center py-1 w-12 transition-all duration-200 active:scale-90 cursor-pointer bg-transparent border-0 decoration-none ${
            activeTab === "call" ? "text-primary-deep" : "text-slate-400 hover:text-slate-600"
          }`}
          aria-label="Call Support"
        >
          <Phone className="h-5.5 w-5.5" />
          {activeTab === "call" && (
            <motion.div
              layoutId="activeDockDot"
              className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shadow-[0_0_6px_rgba(14,165,233,0.5)]"
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          )}
        </a>

        {/* Item 2: WhatsApp Support */}
        <a
          href="https://wa.me/917702608040"
          onClick={() => handleTabClick("whatsapp")}
          className={`flex flex-col items-center justify-center py-1 w-12 transition-all duration-200 active:scale-90 cursor-pointer bg-transparent border-0 decoration-none ${
            activeTab === "whatsapp" ? "text-primary-deep" : "text-slate-400 hover:text-slate-600"
          }`}
          aria-label="WhatsApp Support"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className={`h-5.5 w-5.5 object-contain transition-opacity duration-200 ${
              activeTab === "whatsapp" ? "opacity-100" : "opacity-75 grayscale hover:grayscale-0 hover:opacity-100"
            }`}
          />
          {activeTab === "whatsapp" && (
            <motion.div
              layoutId="activeDockDot"
              className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shadow-[0_0_6px_rgba(14,165,233,0.5)]"
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          )}
        </a>

        {/* Item 3: Center Primary Book Button (Orange Capsule) */}
        <button
          onClick={() => {
            handleTabClick("book");
            openBooking();
          }}
          suppressHydrationWarning
          className="accent-gradient text-accent-foreground rounded-full px-5 py-2.5 flex items-center justify-center gap-1.5 shadow-[0_6px_16px_rgba(249,115,22,0.32)] active:scale-95 transition-all duration-200 border-0 cursor-pointer shrink-0"
        >
          <CalendarClock className="h-4.5 w-4.5 animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-wider">Book</span>
        </button>

        {/* Item 4: Prices */}
        <a
          href="#pricing"
          onClick={() => handleTabClick("prices")}
          className={`flex flex-col items-center justify-center py-1 w-12 transition-all duration-200 active:scale-90 cursor-pointer bg-transparent border-0 decoration-none ${
            activeTab === "prices" ? "text-primary-deep" : "text-slate-400 hover:text-slate-600"
          }`}
          aria-label="Service Prices"
        >
          <Tag className="h-5.5 w-5.5" />
          {activeTab === "prices" && (
            <motion.div
              layoutId="activeDockDot"
              className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shadow-[0_0_6px_rgba(14,165,233,0.5)]"
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          )}
        </a>

        {/* Item 5: Contact */}
        <a
          href="#contact"
          onClick={() => handleTabClick("contact")}
          className={`flex flex-col items-center justify-center py-1 w-12 transition-all duration-200 active:scale-90 cursor-pointer bg-transparent border-0 decoration-none ${
            activeTab === "contact" ? "text-primary-deep" : "text-slate-400 hover:text-slate-600"
          }`}
          aria-label="Contact Section"
        >
          <MessageSquare className="h-5.5 w-5.5" />
          {activeTab === "contact" && (
            <motion.div
              layoutId="activeDockDot"
              className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shadow-[0_0_6px_rgba(14,165,233,0.5)]"
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          )}
        </a>

      </div>
    </div>
  );
}
