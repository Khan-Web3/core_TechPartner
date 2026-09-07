"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/data";
import { ArrowIcon } from "./icons";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-pad bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 xl:grid-cols-12 rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(18,21,26,0.12)]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 relative bg-ink text-white p-8 md:p-12 flex flex-col justify-between overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(13,124,126,0.4),transparent_50%)]" />
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
            {submitted ? (
              <div className="min-h-[320px] flex flex-col items-center justify-center text-center">
                <span className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <p className="font-display text-2xl font-bold mb-2 text-ink">Message received</p>
                <p className="text-muted">We’ll get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="block">
                    <span className="field-label">Your name</span>
                    <input required placeholder="Jane Doe" className="field-input" />
                  </label>
                  <label className="block">
                    <span className="field-label">Email address</span>
                    <input required type="email" placeholder="jane@company.com" className="field-input" />
                  </label>
                </div>
                <label className="block">
                  <span className="field-label">Service</span>
                  <select required defaultValue="" className="field-input">
                    <option value="" disabled>Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>FMCG System</option>
                    <option>UI / UX Design</option>
                    <option>Cloud & Custom Software</option>
                  </select>
                </label>
                <label className="block">
                  <span className="field-label">Project details</span>
                  <textarea required rows={4} placeholder="Tell us about goals, timeline, and scope…" className="field-input resize-none" />
                </label>
                <button type="submit" className="btn-primary !px-8 group">
                  Send message
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
