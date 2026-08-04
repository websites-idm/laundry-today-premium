import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Truck, Sparkles, Star } from "lucide-react";
import hero1 from "@/assets/hero.jpg";
import hero2 from "@/assets/hero_slide2.jpg";
import hero3 from "@/assets/hero_slide3.jpg";
import { Bubbles, ButtonLink, Reveal } from "./common";
import { openBooking } from "./BookingPopup";

const slides = [
  {
    img: hero1,
    badge: "Premium Laundry Service",
    headline: ["Professional Laundry", "Delivered To", "Your Door"],
    subhead: "Fast Pickup • Expert Cleaning • Free Delivery • Affordable Pricing",
  },
  {
    img: hero2,
    badge: "Advanced Fabric Care",
    headline: ["Premium Fabric Care", "For Your", "Fine Wardrobe"],
    subhead: "Eco-Friendly Solvents • Stain Treatment • Delicate Hand Wash • Expert Care",
  },
  {
    img: hero3,
    badge: "Pressing & Finishing",
    headline: ["Crisp & Fresh", "Pressed Clothes", "Every Time"],
    subhead: "Crease-Free Finish • Perfect Fold • Clean Hangers • Next-Day Delivery",
  },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-secondary pt-24 pb-20 sm:pt-28 lg:pt-32">
      {/* Background patterns */}
      <Bubbles count={16} />
      
      {/* Ambient Blur Circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      {/* Subtle bottom wave pattern */}
      <div className="absolute bottom-0 inset-x-0 h-16 w-full text-white/30 pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 74" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,74L1320,74C1200,74,960,74,720,74C480,74,240,74,120,74L0,74Z" />
        </svg>
      </div>

      {/* Main Grid Wrapper */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-10 lg:gap-8 items-stretch">
          
          {/* Left Side (70% - lg:col-span-7) */}
          <div
            ref={ref}
            className="lg:col-span-7 relative overflow-hidden rounded-[28px] rounded-b-[60px] sm:rounded-[32px] sm:rounded-b-[90px] lg:rounded-b-[120px] shadow-lift flex flex-col lg:block h-auto lg:h-[680px] w-full bg-gradient-to-br from-primary-deep via-primary to-primary-light"
          >
            {/* Zooming Hero Image Carousel */}
            <div className="relative h-60 sm:h-80 lg:absolute lg:inset-0 lg:h-full w-full overflow-hidden shrink-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={slides[activeSlide].img}
                  alt="Professional laundry service banner image"
                  width={1600}
                  height={1088}
                  style={{ y }}
                  initial={{ scale: 1.18, opacity: 0 }}
                  animate={{ scale: 1.08, opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              {/* Subtle blue overlay matching website branding */}
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[oklch(0.42_0.13_248/0.92)] via-[oklch(0.46_0.13_247/0.75)] to-[oklch(0.5_0.14_246/0.45)]" />
            </div>

            {/* Content Container (Overlays on desktop, flows below image on mobile) */}
            <div className="relative lg:absolute lg:inset-0 flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-16 z-10 min-h-[340px] lg:min-h-0">
              <div className="max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] text-white uppercase backdrop-blur-md">
                      {slides[activeSlide].badge}
                    </span>

                    <h1 className="mt-5 text-[2.1rem] leading-[1.02] font-black text-white sm:text-4xl lg:text-5.5xl tracking-tight">
                      {slides[activeSlide].headline.map((line, idx) => (
                        <span key={idx} className="block mt-1 first:mt-0">
                          {line}
                        </span>
                      ))}
                    </h1>

                    <p className="mt-5 text-[11px] font-semibold text-white/85 sm:text-xs tracking-wide leading-relaxed">
                      {slides[activeSlide].subhead}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto">
                  <ButtonLink onClick={() => openBooking()} variant="accent" className="w-full sm:w-auto">
                    Book Pickup
                  </ButtonLink>
                  <ButtonLink href="#pricing" variant="white" className="w-full sm:w-auto">
                    Track Order
                  </ButtonLink>
                </div>

                {/* Carousel Indicators (Dots) inside the left card bottom */}
                <div className="mt-8 flex gap-2 justify-start items-center">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      suppressHydrationWarning
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-0 ${
                        activeSlide === i ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (30% - lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-4.5 sm:gap-5 w-full">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                x: { delay: 0.3, duration: 0.6 },
                y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" }
              }}
              className="lift group rounded-3xl bg-white p-5 sm:p-6 shadow-soft border border-primary/10 hover:border-accent hover:scale-[1.03] transition-all duration-300 flex items-start gap-4"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-secondary text-accent transition-colors duration-300 group-hover:accent-gradient group-hover:text-accent-foreground border border-primary/5">
                <Truck className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-extrabold text-primary-deep">Free Pickup &amp; Delivery</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Doorstep pickup and delivery at your convenience.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
              transition={{
                x: { delay: 0.45, duration: 0.6 },
                y: { repeat: Infinity, duration: 5.4, ease: "easeInOut" }
              }}
              className="lift group rounded-3xl bg-white p-5 sm:p-6 shadow-soft border border-primary/10 hover:border-accent hover:scale-[1.03] transition-all duration-300 flex items-start gap-4"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-secondary text-accent transition-colors duration-300 group-hover:accent-gradient group-hover:text-accent-foreground border border-primary/5">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-extrabold text-primary-deep">Premium Fabric Care</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Advanced cleaning for all fabric types.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
              transition={{
                x: { delay: 0.6, duration: 0.6 },
                y: { repeat: Infinity, duration: 5.0, ease: "easeInOut" }
              }}
              className="lift group rounded-3xl bg-white p-5 sm:p-6 shadow-soft border border-primary/10 hover:border-accent hover:scale-[1.03] transition-all duration-300 flex items-start gap-4"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-secondary text-accent transition-colors duration-300 group-hover:accent-gradient group-hover:text-accent-foreground border border-primary/5">
                <Star className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-extrabold text-primary-deep">100% Customer Satisfaction</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Trusted by thousands of happy customers.</p>
              </div>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
