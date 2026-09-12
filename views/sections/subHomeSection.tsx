"use client";

// Core Tech Partner site file

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowIcon } from "./icons";

const pillars = [
  {
    title: "Mission",
    desc: "Ship reliable digital products that help businesses grow with clarity and craft.",
  },
  {
    title: "Vision",
    desc: "Be Pakistan’s most trusted partner for web, mobile, and enterprise software.",
  },
  {
    title: "Approach",
    desc: "Transparent communication, senior delivery, and systems built to last.",
  },
];

export default function SubHomeSection() {
  return (
    <section className="section-pad bg-paper relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[580/700] max-w-[560px] mx-auto lg:mx-0">
              {/* decorative frame + grid */}
              <div className="absolute -inset-3 rounded-[28px] border border-line/80" />
              <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(135deg,rgba(0,112,184,0.14),transparent_55%)]" />
              <div className="absolute inset-0 rounded-[24px] opacity-[0.35] bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
              {/* accent line */}
              <span className="absolute -left-6 top-[18%] h-24 w-px bg-[linear-gradient(to_bottom,transparent,var(--brand),transparent)]" />
              <span className="absolute -right-6 bottom-[22%] h-24 w-px bg-[linear-gradient(to_bottom,transparent,var(--brand),transparent)]" />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 top-0 w-[71.2%] h-[56.3%] rounded-[18px] overflow-hidden shadow-[0_24px_50px_rgba(0,40,120,0.18)] ring-1 ring-white/60"
              >
                <Image
                  src="/about-1.png"
                  alt="Core Tech Partner team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 35vw"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="absolute left-[28.8%] top-[42.7%] w-[71.2%] h-[57.3%] rounded-[18px] overflow-hidden shadow-[0_30px_60px_rgba(0,40,120,0.28)] ring-1 ring-white/70"
              >
                <Image
                  src="/about-2.png"
                  alt="Core Tech Partner at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 35vw"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 left-4 sm:left-auto sm:right-0 bg-ink text-white rounded-[14px] px-6 py-5 shadow-[0_20px_50px_rgba(0,40,120,0.3)] ring-1 ring-white/10"
            >
              <p className="font-display text-4xl font-extrabold text-brand leading-none">10+</p>
              <p className="text-xs text-white/65 mt-2 uppercase tracking-[0.14em]">
                Years in production
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-6"
          >
            <p className="section-label">About us</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.08] mb-5">
              From idea to production without the noise.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-xl">
              Core Tech Partner designs and builds scalable products for startups
              and enterprises strategy, design, engineering, launch, and support.
            </p>

            <div className="grid gap-4 mb-10">
              {pillars.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex gap-5 rounded-[14px] border border-line bg-background/60 p-5 hover:border-brand/40 hover:bg-paper transition-colors">
                  <span className="mt-1 h-9 w-9 shrink-0 rounded-[10px] bg-brand/10 text-brand font-display font-bold flex items-center justify-center text-sm">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-display text-ink font-bold mb-1">{item.title}</p>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="btn-outline group">
              Learn more about us
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
