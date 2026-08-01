import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const quick = ["Home", "Services", "Pricing", "About", "Contact"];
const services = ["Wash & Fold", "Dry Cleaning", "Steam Ironing", "Shoe Cleaning", "Commercial"];

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
                <a
                  key={i}
                  href="#contact"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary-deep transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-[0.18em] uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quick.map((q) => (
                <li key={q}>
                  <a
                    href={`#${q.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary-deep"
                  >
                    {q}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-[0.18em] uppercase">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary-deep"
                  >
                    {s}
                  </a>
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
              hello@laundrytoday.com
              <br />
              07702608040
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
