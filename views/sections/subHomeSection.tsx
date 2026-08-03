"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    title: "Our Mission",
    desc: "Deliver reliable digital products that help businesses grow with clarity, speed, and craftsmanship.",
  },
  {
    title: "Our Vision",
    desc: "Become Pakistan’s most trusted technology partner for web, mobile, and enterprise software.",
  },
  {
    title: "Our Awards",
    desc: "Recognized by clients for quality delivery, transparent communication, and long-term partnership.",
  },
];

export default function SubHomeSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src="/ab1.png"
                alt="About Core Tech Partner"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 sm:left-auto sm:right-8 sm:w-56 bg-brand text-white p-5">
              <p className="font-display text-4xl font-extrabold">10+</p>
              <p className="text-sm text-white/85 mt-1">
                Years of working experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">About Your Company</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.15] mb-5">
              We Execute Ideas From Start to Finish
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Core Tech Partner is a software house dedicated to transforming
              ideas into scalable, secure products — from strategy and design to
              development, launch, and support.
            </p>

            <div className="space-y-5 mb-8">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 border-b border-line pb-5"
                >
                  <span className="mt-1 w-10 h-10 shrink-0 bg-brand-soft text-brand flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Know More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
