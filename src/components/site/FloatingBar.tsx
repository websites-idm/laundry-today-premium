import { useState, useEffect } from "react";
import { Phone, CalendarClock, Tag, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { openBooking } from "./BookingPopup";

export function FloatingBar() {
  const [activeTab, setActiveTab] = useState("prices");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handlePathChange = () => {
        const path = window.location.pathname;
        if (path === "/pricing") setActiveTab("prices");
        else if (path === "/contact") setActiveTab("contact");
        else if (path === "/") setActiveTab("home");
      };
      handlePathChange();
      window.addEventListener("popstate", handlePathChange);
      return () => window.removeEventListener("popstate", handlePathChange);
    }
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      className="fixed bottom-4 inset-x-2 z-50 lg:hidden flex flex-col gap-2.5 pointer-events-none pb-safe"
    >
      {/* Top row: Book Now */}
      <div className="flex justify-start pl-1">
        <button
          onClick={() => {
            handleTabClick("book");
            openBooking();
          }}
          suppressHydrationWarning
          className="pointer-events-auto bg-[#42bcf5] rounded-2xl px-6 py-3 shadow-lg border-0 cursor-pointer transition-transform active:scale-95 animate-bounce shadow-primary/20"
          style={{ animationDuration: '3s' }}
        >
          <span className="font-black text-white text-[20px] tracking-tight">Book now</span>
        </button>
      </div>

      {/* Bottom row: Call, WhatsApp, Price list */}
      <div className="flex justify-start items-center gap-2 pl-1">
        <a
          href="tel:+917702608040"
          onClick={() => handleTabClick("call")}
          className="pointer-events-auto bg-[#42bcf5] rounded-2xl px-5 py-2.5 shadow-lg no-underline transition-transform active:scale-95 flex-shrink-0 animate-bounce shadow-primary/20"
          style={{ animationDuration: '3s', animationDelay: '0.2s' }}
        >
          <span className="font-black text-white text-[16px] tracking-tight">Call</span>
        </a>

        <a
          href="https://wa.me/917702608040"
          onClick={() => handleTabClick("whatsapp")}
          className="pointer-events-auto bg-[#42bcf5] rounded-2xl px-5 py-2.5 shadow-lg no-underline transition-transform active:scale-95 flex-shrink-0 animate-bounce shadow-primary/20"
          style={{ animationDuration: '3s', animationDelay: '0.4s' }}
        >
          <span className="font-black text-white text-[16px] tracking-tight">WhatsApp</span>
        </a>

        <Link
          to="/pricing"
          onClick={() => handleTabClick("prices")}
          className="pointer-events-auto bg-[#42bcf5] rounded-2xl px-5 py-2.5 shadow-lg no-underline transition-transform active:scale-95 flex-shrink-0 animate-bounce shadow-primary/20"
          style={{ animationDuration: '3s', animationDelay: '0.6s' }}
        >
          <span className="font-black text-white text-[16px] tracking-tight whitespace-nowrap">Price list</span>
        </Link>
      </div>
    </motion.div>
  );
}
