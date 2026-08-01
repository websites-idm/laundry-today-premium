import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, MapPin, Calendar, User, Phone, ClipboardList } from "lucide-react";

export interface CartItem {
  name: string;
  price: string;
  quantity: number;
}

// Global helper to open the booking popup from any component
export function openBooking(serviceName?: string, cartItems?: CartItem[]) {
  const event = new CustomEvent("open-booking", { detail: { serviceName, cartItems } });
  window.dispatchEvent(event);
}

export function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [googleLocation, setGoogleLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setServiceName(customEvent.detail?.serviceName || "");
      setCartItems(customEvent.detail?.cartItems || []);
      setIsOpen(true);
    };

    window.addEventListener("open-booking", handleOpen);
    return () => window.removeEventListener("open-booking", handleOpen);
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
    if (!address.trim()) {
      setError("Please enter your pickup address");
      return;
    }

    setError("");

    // Construct the WhatsApp message
    let message = `Hi Laundry Today, I would like to book a pickup!\n\n`;

    if (cartItems && cartItems.length > 0) {
      message += `📦 ORDERED ITEMS:\n`;
      let totalEst = 0;
      let hasVariableItems = false;

      cartItems.forEach((item) => {
        message += `- ${item.name}: ${item.quantity} x ${item.price}`;

        // Extract numbers to calculate total
        const rawNum = item.price.replace(/[^0-9]/g, "");
        const parsedPrice = parseInt(rawNum, 10);

        if (!isNaN(parsedPrice)) {
          if (item.price.includes("/kg") || item.price.includes("/sq.ft.") || item.price.includes("sq.ft")) {
            hasVariableItems = true;
            message += ` (variable)\n`;
          } else {
            const lineTotal = parsedPrice * item.quantity;
            totalEst += lineTotal;
            message += ` = ₹${lineTotal}\n`;
          }
        } else {
          message += `\n`;
        }
      });

      message += `\nEstimated Total: ₹${totalEst}${hasVariableItems ? " (+ Variable rates)" : ""}\n\n`;
    } else if (serviceName) {
      message += `📌 Service: ${serviceName}\n\n`;
    } else {
      message += `📌 Service: General Laundry/Dry Cleaning\n\n`;
    }

    message += `👤 Name: ${name.trim()}\n`;
    message += `📞 Phone: ${phone.trim()}\n`;
    message += `🏠 Address: ${address.trim()}\n`;

    if (googleLocation.trim()) {
      message += `📍 Google Location: ${googleLocation.trim()}\n`;
    }

    const whatsappUrl = `https://wa.me/917702608040?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-primary-deep/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg my-8 overflow-hidden rounded-[32px] bg-white border border-primary/10 shadow-lift p-6 sm:p-8 z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary-deep cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            {/* Header */}
            <div className="text-center sm:text-left">
              <span className="accent-gradient inline-flex h-12 w-12 items-center justify-center rounded-2xl text-accent-foreground shadow-soft mb-4">
                <Calendar className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-extrabold text-primary-deep leading-tight">
                {cartItems.length > 0 ? "Book Selected Order" : serviceName ? `Book: ${serviceName}` : "Book a Pickup"}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Please provide your details below. We'll redirect you to WhatsApp to confirm your scheduling.
              </p>
            </div>

            {/* Order Review List */}
            {cartItems && cartItems.length > 0 && (
              <div className="mt-4 bg-secondary/80 rounded-2xl p-4 border border-primary/5 max-h-40 overflow-y-auto no-scrollbar">
                <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ClipboardList className="h-3.5 w-3.5 text-primary" /> Order Review
                </div>
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.name} className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-primary-deep truncate pr-4">
                        {item.name} <span className="text-accent font-extrabold ml-1">x{item.quantity}</span>
                      </span>
                      <span className="font-extrabold text-foreground shrink-0">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                >
                  <User className="h-3.5 w-3.5 text-primary" /> Full Name
                </label>
                <input
                  id="booking-name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border-2 border-border bg-white px-4.5 py-3 text-sm outline-none focus:border-primary transition-colors font-medium"
                />
              </div>

              <div>
                <label
                  htmlFor="booking-phone"
                  className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" /> Phone Number
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border-2 border-border bg-white px-4.5 py-3 text-sm outline-none focus:border-primary transition-colors font-medium"
                />
              </div>

              <div>
                <label
                  htmlFor="booking-address"
                  className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" /> Pickup Address
                </label>
                <textarea
                  id="booking-address"
                  placeholder="Enter your flat/house no, street, area name"
                  value={address}
                  rows={2}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-2xl border-2 border-border bg-white px-4.5 py-3 text-sm outline-none focus:border-primary transition-colors font-medium resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="booking-location"
                  className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5"
                >
                  <MapPin className="h-3.5 w-3.5 text-accent" /> Google Location Link (Optional)
                </label>
                <span className="block text-[10px] text-muted-foreground mb-1.5">
                  Paste map link for easy location mapping by our rider.
                </span>
                <input
                  id="booking-location"
                  type="url"
                  placeholder="https://maps.google.com/?q=..."
                  value={googleLocation}
                  onChange={(e) => setGoogleLocation(e.target.value)}
                  className="w-full rounded-2xl border-2 border-border bg-white px-4.5 py-3 text-sm outline-none focus:border-primary transition-colors font-medium"
                />
              </div>

              {error && (
                <p className="text-xs font-bold text-red-500 mt-1">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="accent-gradient w-full flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-soft transition-all duration-300 hover:brightness-105 active:scale-[0.98] cursor-pointer"
              >
                <span>Confirm Booking via WhatsApp</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
