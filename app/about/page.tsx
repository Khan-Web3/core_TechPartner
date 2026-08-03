"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "@/app/components/PageBanner";
import { team, testimonials } from "@/lib/data";

const pillars = [
  {
    title: "Our Mission",
    desc: "Push boundaries with practical innovation — delivering products that engage users and drive business results.",
  },
  {
    title: "Our Vision",
    desc: "Be the technology partner companies trust for web, mobile, FMCG systems, and long-term product growth.",
  },
  {
    title: "Our Awards",
    desc: "Client-trusted delivery across startups and enterprises — measured by quality, clarity, and outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        crumbs={[{ label: "About Us" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-x grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="relative aspect-[5/4] overflow-hidden bg-surface">
            <Image
              src="/ab1.png"
              alt="About Core Tech Partner"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="section-label">About Your Company</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5">
              We Execute Ideas From Start to Finish
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Core Tech Partner is a software house in Islamabad dedicated to
              transforming ideas into scalable, secure digital products. From
              strategy to launch, we stay focused on clarity, craft, and
              measurable impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {pillars.map((p) => (
                <div key={p.title} className="border border-line p-4">
                  <h3 className="font-display font-bold text-ink mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary">
              Know More
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="section-label">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              IT Solutions Designed to Drive Results
            </h2>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
            {[
              ["10+", "Years Experience"],
              ["99%", "Retention Rate"],
              ["250+", "Projects Completed"],
              ["1.2k+", "Happy Clients"],
            ].map(([v, l]) => (
              <div key={l} className="bg-white border border-line p-6 text-center">
                <p className="font-display text-4xl font-extrabold text-brand mb-1">
                  {v}
                </p>
                <p className="text-sm text-muted">{l}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-line overflow-hidden"
              >
                <div className="relative h-48">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-ink">{m.name}</h3>
                  <p className="text-sm text-muted">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x">
          <p className="section-label">Testimonial</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-8">
            What Our Clients Ask About Core Tech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-line p-6 bg-surface">
                <p className="text-ink/80 leading-relaxed mb-5">“{t.content}”</p>
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
