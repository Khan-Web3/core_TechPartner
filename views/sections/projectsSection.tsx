"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowIcon } from "./icons";

export default function ProjectsSection() {
  const items = projects.slice(0, 5);

  return (
    <section className="section-pad bg-ink text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(13,124,126,0.3),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(196,92,38,0.14),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-9">
          <div className="max-w-2xl">
            <p className="section-label">Selected work</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08]">
              Recent projects that moved the needle.
            </h2>
          </div>
          <Link href="/projects" className="btn-secondary self-start lg:self-auto group">
            View all projects
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:auto-rows-[270px] gap-5">
          {items.map((project, index) => {
            const featured = index === 0;
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-[18px] min-h-[280px] ${
                  featured ? "md:col-span-2 xl:col-span-2 xl:row-span-2" : ""
                }`}
              >
                <Link href="/projects" className="absolute inset-0 block">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={featured ? "(max-width: 1280px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,12,18,0.92)_0%,rgba(9,12,18,0.35)_45%,rgba(9,12,18,0.05)_100%)] transition-opacity" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[18px] group-hover:ring-brand/50 transition-colors" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 flex items-end justify-between gap-4">
                    <div>
                      <span className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-white/80 mb-3">
                        {project.category} · {project.year}
                      </span>
                      <h3
                        className={`font-display font-bold leading-tight ${
                          featured ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                      >
                        {project.title}
                      </h3>
                      {featured && (
                        <p className="text-white/65 mt-2 max-w-lg text-sm md:text-base hidden md:block">
                          {project.description}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 w-11 h-11 rounded-full bg-white text-ink flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowIcon className="w-4 h-4 -rotate-45" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
