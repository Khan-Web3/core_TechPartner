"use client";

// Core Tech Partner site file

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogs } from "@/lib/data";
import { ArrowIcon } from "./icons";

export default function BlogsSection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-9">
          <div className="max-w-2xl">
            <p className="section-label">Insights</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.08]">
              Notes from the studio.
            </h2>
          </div>
          <Link href="/contact" className="btn-outline self-start group">
            More articles
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group rounded-[18px] overflow-hidden bg-background border border-line hover:border-brand/40 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(18,21,26,0.1)] transition-all duration-400"
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
                <p className="text-xs text-muted mb-3 tracking-wide uppercase">{blog.date}</p>
                <h3 className="font-display text-xl font-bold text-ink group-hover:text-brand transition-colors leading-snug mb-4">
                  {blog.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-ink/70 group-hover:text-brand transition-colors">
                  Read article
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
