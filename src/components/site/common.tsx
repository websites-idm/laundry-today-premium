import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Ribbon({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal className={`flex ${className}`}>
      <span className="accent-gradient inline-flex items-center rounded-full px-6 py-2.5 text-xs font-extrabold tracking-[0.22em] text-accent-foreground uppercase shadow-soft sm:text-sm">
        {children}
      </span>
    </Reveal>
  );
}

export function SectionTitle({
  ribbon,
  title,
  subtitle,
  center = true,
  invert = false,
}: {
  ribbon: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={center ? "flex flex-col items-center text-center" : "flex flex-col"}>
      <Ribbon className={center ? "justify-center" : ""}>{ribbon}</Ribbon>
      <h2
        className={`mt-6 max-w-3xl text-3xl leading-[1.08] sm:text-4xl lg:text-5xl ${
          invert ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            invert ? "text-white/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function Bubbles({ count = 12 }: { count?: number }) {
  const bubbles = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 97) % 100}%`,
    size: 8 + ((i * 13) % 34),
    delay: (i * 1.7) % 12,
    duration: 10 + ((i * 3) % 9),
  }));
  return (
    <div className="bubble-field" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: b.left,
            bottom: "-40px",
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Counter({
  to,
  suffix = "",
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(to * progress));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, to]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-xl font-extrabold text-primary-deep min-[380px]:text-2xl sm:text-4xl">
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-[9px] min-[360px]:text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {label}
      </div>
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "accent",
  className = "",
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "accent" | "white" | "blue" | "outline";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}) {
  const styles: Record<string, string> = {
    accent: "accent-gradient text-accent-foreground shadow-soft hover:brightness-105",
    white: "bg-white text-primary-deep shadow-soft hover:bg-secondary",
    blue: "brand-gradient text-primary-foreground shadow-soft hover:brightness-105",
    outline: "border-2 border-primary/40 text-primary-deep hover:bg-secondary",
  };
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.97] sm:text-base ${styles[variant]} ${className} cursor-pointer`;

  if (onClick && !href) {
    return (
      <button onClick={onClick} suppressHydrationWarning className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={classes}>
      {children}
    </a>
  );
}
