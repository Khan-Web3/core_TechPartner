"use client";

// Core Tech Partner site file

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "@/app/components/PageBanner";

const pillars = [
  {
    title: "Mission",
    desc: "Push boundaries with practical innovation and build products that engage users and drive results.",
  },
  {
    title: "Vision",
    desc: "Be the technology partner companies trust for web, mobile, FMCG systems, and growth.",
  },
  {
    title: "Values",
    desc: "Clarity, craft, and outcomes, measured by quality delivery and lasting partnership.",
  },
];

const stats = [
  ["10+", "Years experience"],
  ["99%", "Retention rate"],
  ["250+", "Projects completed"],
  ["1.2k+", "Happy clients"],
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" crumbs={[{ label: "About Us" }]} />

      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative aspect-[580/700] max-w-[560px] mx-auto lg:mx-0"
          >
            <div className="absolute -inset-3 rounded-[28px] border border-line/80" />
            <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(135deg,rgba(0,112,184,0.14),transparent_55%)]" />
            <div className="absolute left-0 top-0 w-[71.2%] h-[56.3%] rounded-[18px] overflow-hidden shadow-[0_24px_50px_rgba(0,40,120,0.18)] ring-1 ring-white/60">
              <Image
                src="/about-1.png"
                alt="Core Tech Partner team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 35vw"
              />
            </div>
            <div className="absolute left-[28.8%] top-[42.7%] w-[71.2%] h-[57.3%] rounded-[18px] overflow-hidden shadow-[0_30px_60px_rgba(0,40,120,0.28)] ring-1 ring-white/70">
              <Image
                src="/about-2.png"
                alt="Core Tech Partner at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 35vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <p className="section-label">Our story</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5 leading-[1.08]">
              We execute ideas from start to finish.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Core Tech Partner is a software house in Islamabad dedicated to
              transforming ideas into scalable, secure digital products. From
              strategy to launch, we stay focused on clarity, craft, and impact.
            </p>
            <div className="space-y-5 mb-8 border-t border-line pt-6">
              {pillars.map((p) => (
                <div key={p.title} className="grid grid-cols-[5.5rem_1fr] gap-4">
                  <p className="font-display text-brand font-bold">{p.title}</p>
                  <p className="text-ink/80 leading-relaxed text-sm md:text-base">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary">
              Work with us
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-x">
          <div className="max-w-2xl mb-9">
            <p className="section-label">Why us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              Numbers that reflect how we work.
            </h2>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 border-y border-line py-10">
            {stats.map(([v, l], i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <p className="font-display text-4xl md:text-5xl font-extrabold text-brand mb-1">
                  {v}
                </p>
                <p className="text-sm text-muted">{l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
