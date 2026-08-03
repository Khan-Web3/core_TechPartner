"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function WhyChooseUsSection() {
  return (
    <section className="section-pad surface-soft">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="section-label">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.15]">
              Smart Solutions for a Digital World
            </h2>
          </div>
          <Link href="/services" className="btn-outline self-start lg:self-auto">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.slice(0, 4).map((service, index) => (
            <motion.article
              key={service.num}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group bg-white border border-line p-7 hover:border-brand hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-display text-4xl font-extrabold text-brand/20 group-hover:text-brand/40 transition-colors">
                {service.num}
              </span>
              <h3 className="font-display text-xl font-bold text-ink mt-3 mb-3">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {service.desc}
              </p>
              <Link
                href="/services"
                className="text-sm font-bold text-brand inline-flex items-center gap-2"
              >
                Read More
                <span aria-hidden>→</span>
              </Link>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-muted mt-10">
          Need consulting first?{" "}
          <Link href="/contact" className="text-brand font-semibold hover:underline">
            Contact our team
          </Link>
        </p>
      </div>
    </section>
  );
}
