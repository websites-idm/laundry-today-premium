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
          className="pointer-events-auto bg-[#3b2c85] rounded-full p-2 shadow-lg border-0 cursor-pointer transition-transform active:scale-95 animate-bounce shadow-primary/40"
          style={{ animationDuration: '3s' }}
        >
          <div className="bg-white rounded-full px-6 py-2 flex items-center justify-center">
            <span className="font-black text-black text-[22px] tracking-tight">Book now</span>
          </div>
        </button>
      </div>

      {/* Bottom row: Call, WhatsApp, Price list */}
      <div className="flex justify-start items-center gap-1.5">
        <a
          href="tel:+917702608040"
          onClick={() => handleTabClick("call")}
          className="pointer-events-auto bg-[#3b2c85] rounded-full p-[7px] shadow-lg no-underline transition-transform active:scale-95 flex-shrink-0 animate-bounce"
          style={{ animationDuration: '3s', animationDelay: '0.2s' }}
        >
          <div className="bg-white rounded-full px-4 py-1.5 flex items-center justify-center">
            <span className="font-black text-black text-[19px] tracking-tight">Call</span>
          </div>
        </a>

        <a
          href="https://wa.me/917702608040"
          onClick={() => handleTabClick("whatsapp")}
          className="pointer-events-auto bg-[#25D366] rounded-full p-[7px] shadow-lg no-underline transition-transform active:scale-95 flex-shrink-0 animate-bounce"
          style={{ animationDuration: '3s', animationDelay: '0.4s' }}
        >
          <div className="bg-white rounded-full px-3 py-1.5 flex items-center justify-center">
            <span className="font-black text-black text-[17px] tracking-tight">WhatsApp</span>
          </div>
        </a>

        <Link
          to="/pricing"
          onClick={() => handleTabClick("prices")}
          className="pointer-events-auto bg-[#3b2c85] rounded-full p-[7px] shadow-lg no-underline transition-transform active:scale-95 flex-shrink-0 animate-bounce"
          style={{ animationDuration: '3s', animationDelay: '0.6s' }}
        >
          <div className="bg-white rounded-full px-3 py-1.5 flex items-center justify-center">
            <span className="font-black text-black text-[17px] tracking-tight whitespace-nowrap">Price list</span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
