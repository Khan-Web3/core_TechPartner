"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import PageBanner from "@/app/components/PageBanner";
import { company } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner title="Contact" crumbs={[{ label: "Contact" }]} />

      <section className="section-pad bg-white">
        <div className="container-x grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="section-label">Contact Us</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5">
              Let’s Build an Awesome Project Together
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tell us about your website, digital product, IT solution, or
              creative campaign. We typically respond within one business hour.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="border border-line p-6">
                <p className="font-display text-3xl font-extrabold text-brand mb-2">
                  250+
                </p>
                <p className="font-semibold text-ink mb-1">Projects Done</p>
                <p className="text-sm text-muted">
                  From banking and retail to SaaS and mobile products.
                </p>
              </div>
              <div className="border border-line p-6">
                <p className="font-display text-3xl font-extrabold text-brand mb-2">
                  1.2k+
                </p>
                <p className="font-semibold text-ink mb-1">Happy Clients</p>
                <p className="text-sm text-muted">
                  Long-term partnerships built on delivery and trust.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <p>
                <span className="font-bold text-ink">Phone: </span>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-muted hover:text-brand">
                  {company.phone}
                </a>
                {" · "}
                <a href={`tel:${company.phone2.replace(/\s/g, "")}`} className="text-muted hover:text-brand">
                  {company.phone2}
                </a>
              </p>
              <p>
                <span className="font-bold text-ink">Email: </span>
                <a href={`mailto:${company.email}`} className="text-muted hover:text-brand">
                  {company.email}
                </a>
              </p>
              <p>
                <span className="font-bold text-ink">Location: </span>
                <span className="text-muted">{company.address}</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface border border-line p-7 md:p-9"
          >
            <h3 className="font-display text-2xl font-bold text-ink mb-2">
              Make an Appointment
            </h3>
            <p className="text-muted mb-6">
              Feel free to contact with us — we don’t spam your email.
            </p>

            {submitted ? (
              <div className="min-h-[280px] flex flex-col items-center justify-center text-center">
                <p className="font-display text-2xl font-bold text-ink mb-2">
                  Message received
                </p>
                <p className="text-muted">Our team will contact you shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="First Name *"
                    className="w-full bg-white border border-line px-4 py-3.5 focus:outline-none focus:border-brand"
                  />
                  <input
                    required
                    placeholder="Last Name *"
                    className="w-full bg-white border border-line px-4 py-3.5 focus:outline-none focus:border-brand"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    type="email"
                    placeholder="Email *"
                    className="w-full bg-white border border-line px-4 py-3.5 focus:outline-none focus:border-brand"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-white border border-line px-4 py-3.5 focus:outline-none focus:border-brand"
                  />
                </div>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-white border border-line px-4 py-3.5 focus:outline-none focus:border-brand text-muted"
                >
                  <option value="" disabled>
                    Select service *
                  </option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>FMCG System</option>
                  <option>UI / UX Design</option>
                  <option>Cloud & Custom Software</option>
                </select>
                <textarea
                  required
                  rows={5}
                  placeholder="Message *"
                  className="w-full bg-white border border-line px-4 py-3.5 focus:outline-none focus:border-brand resize-none"
                />
                <button type="submit" className="btn-primary w-full !py-4">
                  Submit Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
