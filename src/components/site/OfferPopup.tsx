import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift, X, Send, Sparkles } from "lucide-react";

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Show popup after 3 seconds on first load in this session
    const hasShown = sessionStorage.getItem("offerPopupShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("offerPopupShown", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number");
      return;
    }

    setError("");
    const message = `Hi Laundry Today, I would like to claim today's special offer!\n\nName: ${name.trim()}\nPhone: ${phone.trim()}`;
    const whatsappUrl = `https://wa.me/917702608040?text=${encodeURIComponent(message)}`;

    // Open WhatsApp redirection
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button (FAB) to trigger offer modal at bottom-left */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-4 z-40 flex items-center gap-2 rounded-full px-5 py-3.5 text-xs font-extrabold text-white accent-gradient shadow-lift hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer lg:bottom-6 floaty"
        aria-label="Claim Today's Offer"
      >
        <Gift className="h-4.5 w-4.5 animate-pulse" />
        <span className="tracking-widest uppercase">Claim Offer</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-primary-deep/40 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-white border border-primary/10 shadow-lift p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary-deep cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Offer Badge Header */}
              <div className="flex flex-col items-center text-center">
                <span className="accent-gradient inline-flex h-14 w-14 items-center justify-center rounded-2xl text-accent-foreground shadow-soft mb-4">
                  <Gift className="h-7 w-7" />
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-[10px] font-extrabold text-accent uppercase tracking-wider mb-2">
                  <Sparkles className="h-3.5 w-3.5" /> Limited Time Deal
                </span>

                <h3 className="text-2xl font-extrabold text-primary-deep leading-tight">
                  Claim Today's Special Offer!
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Enter your details below to activate your exclusive laundry discount and book your delivery via WhatsApp.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="offer-name"
                    className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="offer-name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="offer-phone"
                    className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="offer-phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-xs font-bold text-red-500 mt-1">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="accent-gradient w-full flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-accent-foreground shadow-soft transition-all duration-300 hover:brightness-105 active:scale-[0.98] cursor-pointer"
                >
                  <span>Claim via WhatsApp</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-secondary/35 blur-xl pointer-events-none" />
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-accent/5 blur-xl pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
