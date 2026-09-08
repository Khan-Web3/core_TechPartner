"use client";

// Core Tech Partner site file

import Link from "next/link";
import { motion } from "framer-motion";
import PageBanner from "@/app/components/PageBanner";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" crumbs={[{ label: "Services" }]} />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="max-w-2xl mb-9">
            <p className="section-label">What we offer</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.08]">
              Capabilities for every stage of your product.
            </h2>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {services.map((service, index) => (
              <motion.article
                key={service.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10"
              >
                <p className="md:col-span-1 font-display text-brand/45 text-xl font-bold group-hover:text-brand transition-colors">
                  {service.num}
                </p>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-bold text-ink mb-2">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-muted leading-relaxed mb-4">{service.desc}</p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {service.points.map((p) => (
                      <li key={p} className="text-xs font-semibold text-ink/60">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 md:flex md:justify-end">
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-ink group-hover:text-brand transition-colors inline-flex items-center gap-2"
                  >
                    Inquire <span>→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
