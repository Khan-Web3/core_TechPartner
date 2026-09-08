"use client";

// Core Tech Partner site file

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "Years experience" },
  { value: 99, suffix: "%", label: "Client retention" },
  { value: 250, suffix: "+", label: "Projects shipped" },
  { value: 1.2, suffix: "k+", label: "Happy clients", decimals: 1 },
];

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_90%_100%,rgba(9,12,18,0.25),transparent_45%)]" />
      <div className="container-x relative grid grid-cols-2 xl:grid-cols-4 divide-x divide-white/15">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="py-9 md:py-11 px-5 md:px-8 first:pl-0"
          >
            <p className="font-display text-4xl md:text-5xl font-extrabold mb-2 leading-none">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="text-white/80 text-sm tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
