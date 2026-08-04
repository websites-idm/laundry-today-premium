import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionTitle } from "./common";
import { openBooking } from "./BookingPopup";
import wash from "@/assets/svc-wash.jpg";
import dry from "@/assets/svc-dry.jpg";
import iron from "@/assets/svc-iron.jpg";
import shoe from "@/assets/svc-shoe.jpg";
import curtain from "@/assets/svc-curtain.jpg";
import blanket from "@/assets/svc-blanket.jpg";
import commercial from "@/assets/svc-commercial.jpg";
import delivery from "@/assets/svc-delivery.jpg";

const services = [
  { img: wash, title: "Wash & Fold", copy: "Everyday laundry washed, dried and neatly folded." },
  { img: dry, title: "Dry Cleaning", copy: "Suits, dresses and delicates treated with care." },
  { img: iron, title: "Steam Ironing", copy: "Crisp, press-perfect finish on shirts and trousers." },
  { img: shoe, title: "Shoe Cleaning", copy: "Sneakers and leather restored and deodorised." },
  { img: curtain, title: "Curtain Cleaning", copy: "Take-down, deep clean and re-hang available." },
  { img: blanket, title: "Blankets & Duvets", copy: "Bulky bedding washed in oversized machines." },
  { img: commercial, title: "Commercial Laundry", copy: "Hotels, gyms and restaurants on contract rates." },
  { img: delivery, title: "Pickup & Delivery", copy: "Free two-way collection across the city." },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState(1200); // default fallback
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Client-side resize listener to handle responsiveness
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  // Autoplay effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Get index differences circular-wrapped
  const getDiff = (index: number, active: number, total: number) => {
    let d = index - active;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  // Cover Flow perspective styling calculator
  const getCardStyle = (index: number) => {
    const diff = getDiff(index, activeIndex, services.length);
    const absDiff = Math.abs(diff);

    let x = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10 - absDiff;

    if (isMobile) {
      scale = diff === 0 ? 1 : 0.82;
      rotateY = diff === 0 ? 0 : diff > 0 ? -22 : 22;
      x = diff === 0 ? 0 : diff > 0 ? 210 : -210;
      opacity = diff === 0 ? 1 : 0.45;
      if (absDiff > 1) {
        opacity = 0;
        scale = 0.5;
      }
    } else if (isTablet) {
      scale = diff === 0 ? 1 : 0.85 - (absDiff - 1) * 0.08;
      rotateY = diff === 0 ? 0 : diff > 0 ? -28 : 28;
      x = diff === 0 ? 0 : diff > 0 ? 170 + (diff - 1) * 110 : -170 - (absDiff - 1) * 110;
      opacity = diff === 0 ? 1 : Math.max(0.3, 0.75 - (absDiff - 1) * 0.2);
      if (absDiff > 2) {
        opacity = 0;
      }
    } else {
      scale = diff === 0 ? 1 : 0.88 - (absDiff - 1) * 0.07;
      rotateY = diff === 0 ? 0 : diff > 0 ? -36 : 36;
      x = diff === 0 ? 0 : diff > 0 ? 230 + (diff - 1) * 135 : -230 - (absDiff - 1) * 135;
      opacity = diff === 0 ? 1 : Math.max(0.2, 0.8 - (absDiff - 1) * 0.2);
      if (absDiff > 3) {
        opacity = 0;
      }
    }

    return {
      x,
      rotateY,
      scale,
      opacity,
      zIndex,
    };
  };

  return (
    <section id="services" className="bg-secondary py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="Our Services"
          title="Everything your wardrobe needs, in one place"
          subtitle="Pick a service, choose a pickup slot and we handle the rest."
        />

        {/* Carousel Wrapper */}
        <Reveal delay={0.1}>
          <div
            className="relative mt-12 w-full flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* 3D Track Container */}
            <div
              className="relative flex items-center justify-center h-[460px] sm:h-[500px] w-full"
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
              suppressHydrationWarning
            >
              {services.map((s, i) => {
                const style = getCardStyle(i);
                const isActive = activeIndex === i;

                return (
                  <motion.div
                    key={s.title}
                    style={{
                      position: "absolute",
                      width: isMobile ? "260px" : "290px",
                      transformOrigin: "center center",
                      zIndex: style.zIndex,
                    }}
                    animate={{
                      x: style.x,
                      scale: style.scale,
                      rotateY: style.rotateY,
                      opacity: style.opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 26,
                      mass: 0.8,
                    }}
                    onClick={() => setActiveIndex(i)}
                    className={`cursor-pointer select-none transition-shadow ${
                      isActive ? "pointer-events-auto shadow-lift" : "pointer-events-none md:pointer-events-auto"
                    }`}
                  >
                    <article className="lift group h-full overflow-hidden rounded-3xl border-2 border-primary/15 bg-white shadow-soft flex flex-col justify-between">
                      <div>
                        <div className="overflow-hidden">
                          <img
                            src={s.img}
                            alt={s.title}
                            loading="lazy"
                            width={1000}
                            height={1000}
                            className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                          />
                        </div>
                        <div className="p-5 pb-2">
                          <h3 className="text-base sm:text-lg font-bold text-primary-deep">{s.title}</h3>
                          <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-none">{s.copy}</p>
                        </div>
                      </div>
                      <div className="p-5 pt-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openBooking(s.title);
                          }}
                          suppressHydrationWarning
                          className="accent-gradient w-full flex items-center justify-center gap-2 rounded-2xl py-2.5 text-xs font-bold text-accent-foreground shadow-soft transition-all duration-300 hover:brightness-105 active:scale-[0.98] cursor-pointer border-0"
                        >
                          Book Now
                        </button>
                      </div>
                    </article>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows (Tablet & Desktop only) */}
            <button
              onClick={handlePrev}
              suppressHydrationWarning
              className="absolute hidden sm:grid left-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 place-items-center rounded-full bg-white/90 border border-primary/10 text-primary-deep hover:bg-white shadow-soft transition-all duration-200 active:scale-90 cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              suppressHydrationWarning
              className="absolute hidden sm:grid right-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 place-items-center rounded-full bg-white/90 border border-primary/10 text-primary-deep hover:bg-white shadow-soft transition-all duration-200 active:scale-90 cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Indicators & Manual Mobile Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                suppressHydrationWarning
                className="grid h-9 w-9 place-items-center rounded-full bg-white border border-primary/10 text-primary-deep hover:bg-secondary shadow-soft transition-all duration-200 active:scale-90 cursor-pointer sm:hidden"
                aria-label="Previous service"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>

              <div className="flex gap-2">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    suppressHydrationWarning
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === i ? "w-8 bg-accent" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                suppressHydrationWarning
                className="grid h-9 w-9 place-items-center rounded-full bg-white border border-primary/10 text-primary-deep hover:bg-secondary shadow-soft transition-all duration-200 active:scale-90 cursor-pointer sm:hidden"
                aria-label="Next service"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
