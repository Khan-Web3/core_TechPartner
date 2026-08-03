"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { processSteps, team, pricing } from "@/lib/data";

export default function TeamSection() {
  return (
    <>
      {/* Team */}
      <section className="section-pad surface-soft">
        <div className="container-x">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-center mb-12">
            <div className="xl:col-span-5">
              <p className="section-label">Our Team Members</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.15] mb-4">
                Our Team is Ready To Help
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Senior engineers, designers, and delivery leads working as one
                squad for your product roadmap.
              </p>
              <Link href="/contact" className="btn-primary">
                Meet Our Team
              </Link>
            </div>
            <div className="xl:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-line overflow-hidden"
                >
                  <div className="relative h-40 md:h-44">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-display text-sm font-bold text-ink">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="section-label">Our Process</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink">
              Features That Simplify The Delivery Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-line p-8 hover:border-brand transition-colors"
              >
                <p className="text-brand font-bold text-sm tracking-widest mb-4">
                  STEP - {step.step}
                </p>
                <h3 className="font-display text-2xl font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad surface-soft">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="section-label">Pricing Plan</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink">
              Our Affordable Pricing Plans For IT Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative bg-white border p-8 ${
                  plan.popular
                    ? "border-brand shadow-[0_20px_50px_rgba(15,143,145,0.15)]"
                    : "border-line"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Popular
                  </span>
                )}
                <p className="font-display text-lg font-bold text-ink mb-1">
                  {plan.name} Plan
                </p>
                <p className="text-muted text-sm mb-5">{plan.desc}</p>
                <p className="font-display text-4xl font-extrabold text-ink mb-1">
                  {plan.price}
                </p>
                <p className="text-sm text-muted mb-6">/ {plan.period}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink/80">
                      <span className="text-brand font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full justify-center ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  Select This Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
