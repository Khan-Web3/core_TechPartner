"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageBanner from "@/app/components/PageBanner";
import { projects } from "@/lib/data";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <PageBanner title="Projects" crumbs={[{ label: "Projects" }]} />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  active === cat
                    ? "bg-brand text-white"
                    : "bg-surface text-muted hover:text-ink border border-line"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group border border-line overflow-hidden bg-white hover:border-brand transition-colors"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/65 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-brand font-semibold mb-1">
                    {project.category} · {project.year}
                  </p>
                  <h2 className="font-display text-2xl font-bold text-ink mb-2">
                    {project.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-muted">
                    Client:{" "}
                    <span className="font-semibold text-ink">
                      {project.client}
                    </span>
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 bg-brand text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Have a project in mind?
              </h3>
              <p className="text-white/85 max-w-xl">
                Let’s turn your idea into a production-ready product with a clear
                roadmap and senior team.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-brand font-semibold hover:bg-brand-soft transition-colors shrink-0"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
