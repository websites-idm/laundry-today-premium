import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { openBooking } from "./BookingPopup";
import { servicesData } from "./servicesData";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Areas We Serve", to: "/areas-we-serve" },
  { label: "Commercial", to: "/commercial" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
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
      className={`fixed inset-x-0 top-0 z-50 flex flex-col transition-all duration-500 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-xl" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      {/* Premium Announcement Bar */}
      <div className="bg-gradient-to-r from-[#FF9933] to-[#FFD700] text-black py-3 sm:py-3.5 px-4 text-center shadow-md flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4">
        <span className="text-lg sm:text-xl font-extrabold tracking-tight drop-shadow-sm">Looking for the best laundry in Navi Mumbai?</span>
        <strong className="text-white font-black tracking-widest uppercase drop-shadow-md text-[17px] sm:text-[19px]">WELCOME TO LAUNDRY TODAY</strong>
      </div>
      
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <img src="/logo.png" alt="Laundry Today" className="h-9 w-auto sm:h-11" width={220} height={110} />
          <span className="text-lg sm:text-xl font-extrabold text-primary-deep tracking-tight whitespace-nowrap">
            Laundry Today
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          {links.map((l) => {
            if (l.label === "Services") {
              return (
                <div key={l.label} className="relative group py-2">
                  <Link
                    to={l.to}
                    activeProps={{ className: "bg-secondary text-primary-deep" }}
                    className="rounded-full px-3 py-2 text-xs font-bold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary-deep inline-flex items-center gap-1.5"
                  >
                    <span>Services</span>
                    <span className="border-l-4 border-r-4 border-t-4 border-t-foreground/60 border-l-transparent border-r-transparent mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-52 rounded-[24px] bg-white border border-primary/10 shadow-lift py-3 z-50 transition-all duration-300">
                    {servicesData.map((opt) => (
                      <Link
                        key={opt.id}
                        to={`/services/${opt.id}`}
                        className="block px-5 py-2.5 text-[11px] font-bold text-foreground/80 hover:bg-secondary hover:text-primary-deep decoration-none transition-colors"
                      >
                        {opt.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={l.label}
                to={l.to}
                activeProps={{ className: "bg-secondary text-primary-deep" }}
                className="rounded-full px-3 py-2 text-xs font-bold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary-deep"
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => openBooking()}
          suppressHydrationWarning
          className="accent-gradient ml-auto hidden shrink-0 rounded-full px-5 py-2.5 text-xs font-bold text-accent-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 lg:ml-2 lg:inline-flex cursor-pointer"
        >
          Book Pickup
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          suppressHydrationWarning
          className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary-deep lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-white/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "bg-secondary text-primary-deep" }}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground/85 hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
            suppressHydrationWarning
            className="accent-gradient mt-2 rounded-2xl px-4 py-3 text-center text-base font-bold text-accent-foreground cursor-pointer"
          >
            Book Pickup
          </button>
        </nav>
      </div>
    </header>
  );
}
