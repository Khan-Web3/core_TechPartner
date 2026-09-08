"use client";

// Core Tech Partner site file

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { ArrowIcon, ServiceIcon } from "./icons";

export default function WhyChooseUsSection() {
  const featured = services.slice(0, 4);

  return (
    <section className="section-pad bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-9">
          <div className="max-w-2xl">
            <p className="section-label">Services</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.08]">
              Capabilities built for modern products.
            </h2>
          </div>
          <Link href="/services" className="btn-outline self-start lg:self-auto group">
            All services
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {featured.map((service, index) => (
            <motion.article
              key={service.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[18px] bg-paper border border-line p-7 flex flex-col min-h-[320px] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(18,21,26,0.1)] hover:border-brand/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/0 group-hover:bg-brand/10 transition-colors duration-500 blur-2xl" />
              <div className="flex items-start justify-between mb-8">
                <span className="h-12 w-12 rounded-[14px] bg-brand/10 text-brand flex items-center justify-center transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <ServiceIcon name={service.icon} className="w-6 h-6" />
                </span>
                <span className="font-display text-sm font-bold text-ink/30">
                  {service.num}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-ink mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-ink group-hover:text-brand transition-colors"
              >
                Learn more
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
