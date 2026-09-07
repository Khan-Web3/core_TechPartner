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

      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm font-semibold rounded-[8px] transition-colors ${
                  active === cat
                    ? "bg-ink text-white"
                    : "text-muted hover:text-ink border border-line"
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
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group"
              >
                <div className="relative h-[260px] overflow-hidden rounded-[14px] mb-4 shadow-[0_14px_36px_rgba(18,21,26,0.08)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/70 mb-1">
                      {project.category} · {project.year}
                    </p>
                    <h2 className="font-display text-xl font-bold text-white">
                      {project.title}
                    </h2>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  {project.description}
                </p>
                <p className="text-sm text-ink/70">
                  Client: <span className="font-semibold text-ink">{project.client}</span>
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 rounded-[16px] bg-ink text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Have a project in mind?
              </h3>
              <p className="text-white/65 max-w-xl">
                Let’s turn your idea into a product ready for production, with a
                clear roadmap.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
