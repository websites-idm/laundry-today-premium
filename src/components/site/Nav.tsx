import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { openBooking } from "./BookingPopup";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/85 shadow-soft backdrop-blur-xl" : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 shrink-0 items-center">
          <img src="/logo.jpeg" alt="Laundry Today" className="h-9 w-auto sm:h-11" width={220} height={110} />
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => openBooking()}
          className="accent-gradient ml-auto hidden shrink-0 rounded-full px-6 py-3 text-sm font-bold text-accent-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 lg:ml-4 lg:inline-flex cursor-pointer"
        >
          Book Pickup
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary-deep lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-white/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground/85 hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
            className="accent-gradient mt-2 rounded-2xl px-4 py-3 text-center text-base font-bold text-accent-foreground cursor-pointer"
          >
            Book Pickup
          </button>
        </nav>
      </div>
    </header>
  );
}
