"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "99%", label: "Retention Rate" },
  { value: "250+", label: "Projects Completed" },
  { value: "1.2k+", label: "Happy Clients" },
];

export default function TestimonialSection() {
  return (
    <>
      {/* Counters */}
      <section className="bg-brand text-white py-12 md:py-14">
        <div className="container-x grid grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center xl:text-left">
              <p className="font-display text-4xl md:text-5xl font-extrabold mb-1">
                {s.value}
              </p>
              <p className="text-white/80 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="section-label">Testimonial</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
              What Our Clients Say About Us
            </h2>
            <p className="text-muted text-lg">
              Real feedback from founders and product teams who shipped with
              Core Tech Partner.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="!pb-12 testimonial-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="h-full border border-line p-7 bg-surface"
                >
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <p className="text-ink/80 leading-relaxed mb-6 min-h-[120px]">
                    “{t.content}”
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 overflow-hidden">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{t.name}</p>
                      <p className="text-sm text-muted">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
