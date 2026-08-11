import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, ChevronDown, MapPin } from "lucide-react";

export interface CartItem {
  name: string;
  price: string;
  quantity: number;
}

const serviceOptions = [
  "Wash & Fold",
  "Wash & Iron",
  "Dry Cleaning",
  "Steam Ironing",
  "Shoe Cleaning",
  "Curtain Cleaning",
  "Carpet Cleaning",
  "Blanket Cleaning",
  "Sofa Cleaning",
  "Commercial Laundry",
  "Express Laundry",
];

const timeSlots = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "01:00 PM - 03:00 PM",
  "03:00 PM - 05:00 PM",
  "05:00 PM - 07:00 PM",
  "07:00 PM - 09:00 PM",
];

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
  const [service, setService] = useState("Select a Service");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Select a Time Slot");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      const svcName = customEvent.detail?.serviceName || "";
      setServiceName(svcName);
      setCartItems(customEvent.detail?.cartItems || []);
      setIsOpen(true);
      
      // Reset form fields
      setName("");
      setPhone("");
      setAddress("");
      setDate("");
      setNotes("");
      setTime("Select a Time Slot");

      // Pre-select service if matched
      if (svcName) {
        const match = serviceOptions.find(
          (opt) => opt.toLowerCase() === svcName.toLowerCase() || svcName.toLowerCase().includes(opt.toLowerCase())
        );
        if (match) {
          setService(match);
        } else {
          setService("Select a Service");
        }
      } else {
        setService("Select a Service");
      }
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
    if (!service || service === "Select a Service") {
      setError("Please select a service");
      return;
    }
    if (!date) {
      setError("Please choose a pickup date");
      return;
    }
    if (!time || time === "Select a Time Slot") {
      setError("Please select a time slot");
      return;
    }
    if (!address.trim()) {
      setError("Please enter your address with landmark");
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
    }

    message += `👤 Name: ${name.trim()}\n`;
    message += `📞 Number: ${phone.trim()}\n`;
    message += `🧺 Service: ${service}\n`;
    message += `🏠 Address: ${address.trim()}\n`;
    message += `📅 Date: ${date}\n`;
    message += `⏰ Time: ${time}\n`;
    message += `📝 Items: ${notes.trim() || "None"}\n`;

    const whatsappUrl = `https://wa.me/917702608040?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button (FAB) to trigger booking modal at bottom-left */}
      <button
        onClick={() => {
          setServiceName("");
          setCartItems([]);
          setIsOpen(true);
        }}
        suppressHydrationWarning
        className="hidden lg:flex fixed bottom-6 left-6 z-40 items-center gap-2 rounded-full px-5 py-3.5 text-xs font-extrabold text-white accent-gradient shadow-lift hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer floaty"
        aria-label="Book Now"
      >
        <Calendar className="h-4.5 w-4.5 animate-pulse" />
        <span className="tracking-widest uppercase">Book Now</span>
      </button>

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
                suppressHydrationWarning
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
                  {cartItems.length > 0 ? "Book Selected Order" : "Book a Pickup"}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Please provide your details below. We'll redirect you to WhatsApp to confirm your scheduling.
                </p>
              </div>

              {/* Order Review List */}
              {cartItems && cartItems.length > 0 && (
                <div className="mt-4 bg-secondary/80 rounded-2xl p-4 border border-primary/5 max-h-40 overflow-y-auto no-scrollbar">
                  <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    Order Review
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
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                {/* Name */}
                <div className="relative flex items-center">
                  <input
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold placeholder:text-muted-foreground/60 text-foreground"
                    placeholder="Your Name"
                    aria-label="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    suppressHydrationWarning
                  />
                </div>

                {/* Number */}
                <div className="relative flex items-center">
                  <input
                    className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold placeholder:text-muted-foreground/60 text-foreground"
                    placeholder="Your Number"
                    aria-label="Your Number"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    suppressHydrationWarning
                  />
                </div>

                {/* Service */}
                <div className="relative flex items-center">
                  <select
                    className="rounded-2xl border-2 border-border bg-white pl-5 pr-11 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold text-foreground cursor-pointer appearance-none"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    aria-label="Select a Service"
                  >
                    <option value="Select a Service">Select a Service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 pointer-events-none text-red-500">
                    <ChevronDown className="h-4.5 w-4.5 stroke-[3px]" />
                  </div>
                </div>

                {/* Date */}
                <div className="relative flex items-center">
                  <Calendar className="absolute left-4 h-4.5 w-4.5 text-muted-foreground pointer-events-none" />
                  <input
                    className="rounded-2xl border-2 border-border bg-white pl-11 pr-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold text-foreground cursor-pointer"
                    type="text"
                    placeholder="Choose Pickup Date"
                    value={date}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    onChange={(e) => setDate(e.target.value)}
                    aria-label="Choose Pickup Date"
                    suppressHydrationWarning
                  />
                </div>

                {/* Time Slot */}
                <div className="relative flex items-center">
                  <select
                    className="rounded-2xl border-2 border-border bg-white pl-5 pr-11 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold text-foreground cursor-pointer appearance-none"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    aria-label="Select a Time Slot"
                  >
                    <option value="Select a Time Slot">Select a Time Slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 pointer-events-none text-red-500">
                    <ChevronDown className="h-4.5 w-4.5 stroke-[3px]" />
                  </div>
                </div>

                {/* Address */}
                <textarea
                  className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold placeholder:text-muted-foreground/60 text-foreground resize-none"
                  rows={2}
                  placeholder="Address with Landmark"
                  aria-label="Address with Landmark"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  suppressHydrationWarning
                />

                {/* Items list */}
                <textarea
                  className="rounded-2xl border-2 border-border bg-white px-5 py-3.5 text-sm outline-none focus:border-primary w-full font-semibold placeholder:text-muted-foreground/60 text-foreground resize-none"
                  rows={3}
                  placeholder="Please share what all items you have for a laundry...?"
                  aria-label="Share laundry items"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  suppressHydrationWarning
                />

                {error && (
                  <p className="text-xs font-bold text-red-500">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  suppressHydrationWarning
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full w-full py-4 text-sm font-bold transition-transform duration-300 hover:-translate-y-0.5 active:scale-98 cursor-pointer border-none shadow-lift"
                >
                  Book Laundry Now!
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
