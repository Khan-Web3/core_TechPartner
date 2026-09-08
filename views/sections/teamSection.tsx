"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section className="section-pad bg-paper relative overflow-hidden">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-11">
          <p className="section-label justify-center">Process</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.08]">
            A clear path from brief to launch.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block absolute top-7 left-[16.6%] right-[16.6%] h-px origin-left bg-[linear-gradient(90deg,var(--brand),rgba(13,124,126,0.2))]"
          />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              className="relative flex flex-col items-start md:items-center md:text-center"
            >
              <span className="relative z-10 mb-7 w-14 h-14 rounded-full bg-paper border border-brand/30 flex items-center justify-center shadow-[0_12px_30px_rgba(13,124,126,0.18)]">
                <span className="w-10 h-10 rounded-full bg-brand text-white font-display font-bold flex items-center justify-center text-sm">
                  {step.step}
                </span>
              </span>
              <h3 className="font-display text-2xl font-bold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
