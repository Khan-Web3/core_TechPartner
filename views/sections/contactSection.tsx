"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogs } from "@/lib/data";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Appointment */}
      <section className="section-pad bg-[#0b1220] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/2.jpg')] bg-cover bg-center" />
        <div className="container-x relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-brand font-bold tracking-[0.16em] uppercase text-sm mb-3">
              Make an Appointment
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] mb-4">
              Feel free to contact with us
            </h2>
            <p className="text-white/70 text-lg max-w-lg">
              Tell us about your website, mobile app, FMCG system, or custom
              software need — we don’t spam your inbox.
            </p>
          </div>

          <div className="bg-white text-ink p-7 md:p-9">
            {submitted ? (
              <div className="min-h-[260px] flex flex-col items-center justify-center text-center">
                <p className="font-display text-2xl font-bold mb-2">
                  Message received
                </p>
                <p className="text-muted">We’ll get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Your Name"
                    className="w-full bg-surface border border-line px-4 py-3.5 focus:outline-none focus:border-brand"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-surface border border-line px-4 py-3.5 focus:outline-none focus:border-brand"
                  />
                </div>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-surface border border-line px-4 py-3.5 focus:outline-none focus:border-brand text-muted"
                >
                  <option value="" disabled>
                    Select a service *
                  </option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>FMCG System</option>
                  <option>UI / UX Design</option>
                  <option>Cloud & Custom Software</option>
                </select>
                <textarea
                  required
                  rows={4}
                  placeholder="Project details"
                  className="w-full bg-surface border border-line px-4 py-3.5 focus:outline-none focus:border-brand resize-none"
                />
                <button type="submit" className="btn-primary w-full !py-4">
                  Submit Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label">Our Blogs</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink">
                Recent Blog & Articles About Technology
              </h2>
            </div>
            <Link href="/contact" className="btn-outline self-start">
              View All Posts
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group border border-line overflow-hidden hover:border-brand transition-colors"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted mb-2">
                    {blog.author} · {blog.date}
                  </p>
                  <h3 className="font-display text-xl font-bold text-ink group-hover:text-brand transition-colors">
                    {blog.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
