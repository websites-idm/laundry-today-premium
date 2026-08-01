import { Phone, CalendarClock } from "lucide-react";
import { openBooking } from "./BookingPopup";

const items = [
  { icon: Phone, label: "Call", href: "tel:+917702608040" },
  { imageSrc: "/whatsapp.png", label: "WhatsApp", href: "https://wa.me/917702608040" },
  { icon: CalendarClock, label: "Book" },
];

export function FloatingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="brand-gradient grid grid-cols-3 shadow-lift">
        {items.map((it) => {
          const className =
            "flex flex-col items-center gap-1 py-3 text-primary-foreground transition-colors active:bg-white/15 cursor-pointer bg-transparent border-0";

          if (it.label === "Book") {
            return (
              <button key={it.label} onClick={() => openBooking()} className={className}>
                <CalendarClock className="h-5.5 w-5.5" />
                <span className="text-[11px] font-bold">{it.label}</span>
              </button>
            );
          }

          return (
            <a key={it.label} href={it.href} className={className}>
              {"imageSrc" in it ? (
                <img src={it.imageSrc} alt={it.label} className="h-5.5 w-5.5 object-contain" />
              ) : (
                "icon" in it && <it.icon className="h-5.5 w-5.5" />
              )}
              <span className="text-[11px] font-bold">{it.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
