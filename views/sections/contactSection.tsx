"use client";

// Core Tech Partner site file

import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/data";
import { ArrowIcon } from "./icons";
import ContactForm from "@/app/components/ContactForm";

export default function ContactSection() {
  return (
    <section className="section-pad bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 xl:grid-cols-12 rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(0,40,120,0.12)]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 relative bg-ink text-white p-8 md:p-12 flex flex-col justify-between overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,112,184,0.45),transparent_50%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="relative">
              <p className="section-label">Contact</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-5">
                Tell us what you want to build.
              </h2>
              <p className="text-white/65 leading-relaxed max-w-sm">
                Whether it’s a website, mobile app, FMCG system, or custom
                software, share a few details and we’ll respond within one
                business hour.
              </p>
            </div>
            <div className="relative mt-12 space-y-5 text-sm">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-white/45 mb-1">Email</p>
                <a href={`mailto:${company.email}`} className="font-semibold hover:text-brand transition-colors">
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-white/45 mb-1">Support</p>
                <a href={`mailto:${company.support}`} className="font-semibold hover:text-brand transition-colors">
                  {company.support}
                </a>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-white/45 mb-1">Studio</p>
                <p className="text-white/75 leading-relaxed">{company.shortAddress}</p>
                <Link href="/contact#map" className="inline-flex items-center gap-1.5 mt-2 text-brand font-semibold hover:text-white transition-colors">
                  View on map
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-7 bg-paper p-8 md:p-12"
          >
            <ContactForm variant="home" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
