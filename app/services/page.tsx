"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageBanner from "@/app/components/PageBanner";
import { services, testimonials } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" crumbs={[{ label: "Services" }]} />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="section-label">What We Offer</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink">
              Smart Solutions for a Digital World
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <motion.article
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="group border border-line p-7 hover:border-brand hover:-translate-y-1 transition-all bg-white"
              >
                <span className="font-display text-3xl font-extrabold text-brand/25 group-hover:text-brand/50">
                  {service.num}
                </span>
                <h3 className="font-display text-xl font-bold text-ink mt-3 mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.points.map((p) => (
                    <li key={p} className="text-xs font-semibold text-ink/70">
                      • {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="text-sm font-bold text-brand">
                  Read More →
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="section-label">Testimonial</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              What Our Clients Say About Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-line p-6">
                <p className="text-ink/80 leading-relaxed mb-5">“{t.content}”</p>
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
