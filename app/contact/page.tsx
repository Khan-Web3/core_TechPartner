"use client";

// Core Tech Partner site file

import { motion } from "framer-motion";
import PageBanner from "@/app/components/PageBanner";
import ContactForm from "@/app/components/ContactForm";
import { company } from "@/lib/data";

const mapsQuery = encodeURIComponent(company.address);
const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact" crumbs={[{ label: "Contact" }]} />

      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:col-span-5"
          >
            <p className="section-label">Get in touch</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5 leading-[1.08]">
              Let’s build something useful together.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Tell us about your website, digital product, or enterprise system.
              We typically respond within one business hour.
            </p>

            <div className="space-y-6 border-t border-line pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-ink font-semibold hover:text-brand"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted mb-2">
                  Support
                </p>
                <a
                  href={`mailto:${company.support}`}
                  className="text-ink font-semibold hover:text-brand"
                >
                  {company.support}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted mb-2">
                  Studio
                </p>
                <p className="text-ink/80 leading-relaxed">{company.address}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="xl:col-span-7 bg-background rounded-[16px] p-7 md:p-10 shadow-[0_16px_40px_rgba(18,21,26,0.06)]"
          >
            <h3 className="font-display text-2xl font-bold text-ink mb-2">
              Send a message
            </h3>
            <p className="text-muted mb-8">
              Share a few details. We don’t spam your inbox.
            </p>
            <ContactForm variant="page" />
          </motion.div>
        </div>
      </section>

      <section id="map" className="pb-10 md:pb-10 bg-paper scroll-mt-24">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7">
            <div className="max-w-2xl">
              <p className="section-label">Find us</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-[1.08]">
                Visit the studio.
              </h2>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline self-start lg:self-auto"
            >
              Open in Google Maps
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[24px] overflow-hidden border border-line shadow-[0_30px_80px_rgba(18,21,26,0.12)]"
          >
            <iframe
              title="Core Tech Partner location"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-[380px] md:h-[480px] block grayscale-[0.35] contrast-[1.05]"
            />
            <div className="absolute left-4 right-4 bottom-4 md:left-6 md:bottom-6 md:right-auto md:max-w-sm bg-ink text-white rounded-[16px] p-6 shadow-[0_20px_50px_rgba(18,21,26,0.35)] ring-1 ring-white/10">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 w-10 h-10 shrink-0 rounded-full bg-brand text-white flex items-center justify-center shadow-[0_0_0_6px_rgba(13,124,126,0.2)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
                    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-white/45 mb-1">
                    Core Tech Partner
                  </p>
                  <p className="font-display font-bold leading-snug">{company.address}</p>
                  <p className="text-sm text-white/60 mt-2">Monday to Friday, 9:00 AM to 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
