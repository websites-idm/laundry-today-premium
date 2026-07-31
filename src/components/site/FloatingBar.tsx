import { Phone, MessageCircle, CalendarClock, MapPin } from "lucide-react";

const items = [
  { icon: Phone, label: "Call", href: "tel:+15552408890" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/15552408890" },
  { icon: CalendarClock, label: "Book", href: "#contact" },
  { icon: MapPin, label: "Track", href: "#how" },
];

export function FloatingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="brand-gradient grid grid-cols-4 shadow-lift">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            className="flex flex-col items-center gap-1 py-3 text-primary-foreground transition-colors active:bg-white/15"
          >
            <it.icon className="h-5.5 w-5.5" />
            <span className="text-[11px] font-bold">{it.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
