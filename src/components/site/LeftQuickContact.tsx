import { Phone } from "lucide-react";

export function LeftQuickContact() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917702608040"
        target="_blank"
        rel="noopener noreferrer"
        className="lift flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lift hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer p-2"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="h-full w-full object-contain" />
      </a>

      {/* Phone Floating Button */}
      <a
        href="tel:07702608040"
        className="lift flex h-12 w-12 items-center justify-center rounded-full brand-gradient text-white shadow-lift hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer"
        title="Call Support"
        aria-label="Call Support"
      >
        <Phone className="h-5.5 w-5.5" />
      </a>
    </div>
  );
}
