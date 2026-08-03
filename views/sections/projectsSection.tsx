"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="section-label">Our Project</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.15]">
              Tech Solutions Driving Global Connectivity
            </h2>
          </div>
          <Link href="/projects" className="btn-primary self-start lg:self-auto">
            View Our All Works
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link href="/projects" className="block">
                <div className="relative h-[300px] overflow-hidden mb-4 bg-surface">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/70 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity">
                      View Project
                    </span>
                  </div>
                </div>
                <p className="text-sm text-brand font-semibold mb-1">
                  {project.category} · {project.year}
                </p>
                <h3 className="font-display text-xl font-bold text-ink group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
