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
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
      <div className="bg-[#4cbbf2] w-full h-[76px] flex items-center justify-between divide-x divide-white">
        
        {/* Item 1: Call Support */}
        <a
          href="tel:+917702608040"
          onClick={() => handleTabClick("call")}
          className="flex-1 flex items-center justify-center h-full hover:bg-white/10 transition-colors"
          aria-label="Call Support"
        >
          <div className="h-[46px] w-[46px] rounded-full border-2 border-white flex items-center justify-center text-white">
            <Phone className="h-6 w-6" />
          </div>
        </a>

        {/* Item 2: WhatsApp Support */}
        <a
          href="https://wa.me/917702608040"
          onClick={() => handleTabClick("whatsapp")}
          className="flex-1 flex items-center justify-center h-full hover:bg-white/10 transition-colors"
          aria-label="WhatsApp Support"
        >
          <div className="h-[46px] w-[46px] rounded-full border-2 border-white flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </a>

        {/* Item 3: Book Now */}
        <button
          onClick={() => {
            handleTabClick("book");
            openBooking();
          }}
          suppressHydrationWarning
          className="flex-1 flex items-center justify-center h-full hover:bg-white/10 transition-colors bg-transparent border-0 cursor-pointer"
          aria-label="Book Now"
        >
          <div className="h-[46px] w-[46px] rounded-full border-2 border-white flex items-center justify-center text-white bg-white/20 shadow-sm animate-pulse">
            <CalendarClock className="h-6 w-6" />
          </div>
        </button>

        {/* Item 4: Prices */}
        <Link
          to="/pricing"
          onClick={() => handleTabClick("prices")}
          className="flex-1 flex items-center justify-center h-full hover:bg-white/10 transition-colors"
          aria-label="Service Prices"
        >
          <div className="h-[46px] w-[46px] rounded-full border-2 border-white flex items-center justify-center text-white">
            <Tag className="h-6 w-6" />
          </div>
        </Link>

        {/* Item 5: Contact */}
        <Link
          to="/contact"
          onClick={() => handleTabClick("contact")}
          className="flex-1 flex items-center justify-center h-full hover:bg-white/10 transition-colors"
          aria-label="Contact Section"
        >
          <div className="h-[46px] w-[46px] rounded-full border-2 border-white flex items-center justify-center text-white">
            <MessageSquare className="h-6 w-6" />
          </div>
        </Link>
      </div>
    </div>
  );
}
