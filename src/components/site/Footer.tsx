import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Areas We Serve", to: "/areas-we-serve" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Wash & Fold", to: "/services/wash-fold" },
  { label: "Wash & Iron", to: "/services/wash-iron" },
  { label: "Dry Cleaning", to: "/services/dry-cleaning" },
  { label: "Steam Ironing", to: "/services/steam-ironing" },
  { label: "Shoe Cleaning", to: "/services/shoe-cleaning" },
  { label: "Commercial Laundry", to: "/commercial" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white pt-16 pb-28 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Laundry Today" loading="lazy" width={220} height={110} className="h-11 w-auto" />
              <span className="text-xl font-extrabold text-primary-deep tracking-tight">
                Laundry Today
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Technology-enabled laundry and dry cleaning with free pickup and delivery, seven days a
              week.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  to="/contact"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary-deep transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4.5 w-4.5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-[0.18em] uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((q) => (
                <li key={q.label}>
                  <Link
                    to={q.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary-deep"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-[0.18em] uppercase">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary-deep"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-[0.18em] uppercase">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Offers, care tips and service updates. No spam.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                aria-label="Email address"
                placeholder="you@email.com"
                suppressHydrationWarning
                className="min-w-0 flex-1 rounded-full border-2 border-border px-5 py-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                suppressHydrationWarning
                className="accent-gradient shrink-0 rounded-full px-5 py-3 text-sm font-bold text-accent-foreground"
              >
                Join
              </button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              <a href="mailto:LAUNDRYTODAY01@gmail.com" className="hover:text-primary transition-colors">
                LAUNDRYTODAY01@gmail.com
              </a>
              <br />
              <a href="tel:+917702608040" className="hover:text-primary transition-colors">
                +91 7702608040
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Laundry Today. All rights reserved.</p>
          <p>Fresh clothes, delivered to your door.</p>
        </div>
      </div>
    </footer>
  );
}
