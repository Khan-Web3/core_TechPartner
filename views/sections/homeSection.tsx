"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    eyebrow: "Best IT Company",
    title: "Best IT Solution Agency For Your Business",
    desc: "Human-focused web, mobile, and enterprise solutions designed for real-world production and measurable growth.",
    img: "/1.jpg",
  },
  {
    eyebrow: "Mobile & Cloud",
    title: "Build Scalable Apps That People Love To Use",
    desc: "Android, iOS, and cloud platforms with clean architecture, strong UX, and reliable delivery.",
    img: "/2.jpg",
  },
  {
    eyebrow: "FMCG & Retail",
    title: "Smart Retail Systems For Fast-Moving Businesses",
    desc: "Distribution, outlet, and sales visibility systems built for FMCG growth across Pakistan.",
    img: "/3.jpg",
  },
];

export default function HomeSection() {
  return (
    <section className="relative w-full h-[100svh] min-h-[620px] max-h-[920px]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            {({ isActive }) => (
              <div className="relative h-full w-full flex items-center">
                <Image
                  src={slide.img}
                  alt=""
                  fill
                  priority={index === 0}
                  className={`object-cover transition-transform duration-[8000ms] ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/92 via-[#0b1220]/70 to-[#0b1220]/35" />

                <div className="relative z-10 container-x w-full pt-28 md:pt-16">
                  <motion.div
                    initial={false}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }
                    }
                    transition={{ duration: 0.65 }}
                    className="max-w-3xl"
                  >
                    <p className="text-brand font-bold tracking-[0.18em] uppercase text-sm mb-4">
                      {slide.eyebrow}
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-5">
                      {slide.title}
                    </h1>
                    <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                      {slide.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/contact" className="btn-primary">
                        Let&apos;s Talk With Us
                      </Link>
                      <Link href="/projects" className="btn-secondary">
                        View Our Works
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
