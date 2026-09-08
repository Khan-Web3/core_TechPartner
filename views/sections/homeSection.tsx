"use client";

// Core Tech Partner site file

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowIcon } from "./icons";

import "swiper/css";
import "swiper/css/effect-fade";

const AUTOPLAY = 6500;

const slides = [
  {
    tag: "Software Studio · Islamabad",
    title: "We build software that",
    highlight: "ships and scales.",
    desc: "Web, mobile, and enterprise systems designed for real operations, with clean architecture, strong UX, and reliable delivery.",
    img: "/hero-1.jpg",
    position: "object-[70%_center]",
    label: "Engineering",
  },
  {
    tag: "Mobile & Cloud",
    title: "Products people",
    highlight: "love to use.",
    desc: "Android, iOS, and cloud platforms with thoughtful design and infrastructure ready for production.",
    img: "/hero-2.jpg",
    position: "object-[65%_center]",
    label: "Mobile & Cloud",
  },
  {
    tag: "FMCG & Retail",
    title: "Retail systems for",
    highlight: "teams that move fast.",
    desc: "Distribution, outlet, and sales visibility platforms built for FMCG growth across Pakistan.",
    img: "/hero-3.jpg",
    position: "object-[60%_center]",
    label: "Retail Systems",
  },
];

export default function HomeSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <section className="relative w-full h-[100svh] min-h-[680px] max-h-[1000px] overflow-hidden bg-ink">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{ delay: AUTOPLAY, disableOnInteraction: false }}
        loop
        onSwiper={setSwiper}
        onSlideChange={(s) => setActive(s.realIndex)}
        onAutoplayTimeLeft={(_, __, p) => setProgress(1 - p)}
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.img}>
            {({ isActive }) => (
              <div className="relative h-full w-full">
                <Image
                  src={slide.img}
                  alt=""
                  fill
                  priority={index === 0}
                  className={`object-cover ${slide.position} transition-transform duration-[12000ms] ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(9,12,18,0.95)_0%,rgba(9,12,18,0.78)_42%,rgba(9,12,18,0.35)_75%,rgba(9,12,18,0.2)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,12,18,0.9)_0%,rgba(9,12,18,0.2)_35%,transparent_60%)]" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.07] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* content */}
      <div className="absolute inset-0 z-20 flex flex-col">
        <div className="container-x flex-1 flex items-center pt-24 pb-44 md:pb-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-white/80 mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_12px_rgba(13,124,126,0.9)]" />
                {slides[active].tag}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] font-extrabold text-white leading-[1.02] tracking-tight mb-6">
                {slides[active].title}
                <br />
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#5fd4d6_0%,#8fe6e7_50%,#ffffff_100%)]">
                  {slides[active].highlight}
                </span>
              </h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-9 max-w-xl">
                {slides[active].desc}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-primary !px-7 group">
                  Start a project
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/projects" className="btn-secondary !px-7">
                  See our work
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[linear-gradient(to_top,rgba(9,12,18,0.6),rgba(9,12,18,0.15))] backdrop-blur-sm">
          <div className="container-x flex items-stretch justify-between gap-6">
            <div className="hidden md:grid grid-cols-3 flex-1 max-w-3xl">
              {slides.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => swiper?.slideToLoop(i)}
                    className="relative text-left py-6 pr-8 group"
                  >
                    <span
                      className={`block text-[0.68rem] font-semibold tracking-[0.16em] uppercase mb-1.5 transition-colors ${
                        isActive ? "text-brand" : "text-white/40 group-hover:text-white/60"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`block font-display text-sm font-bold transition-colors ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {s.label}
                    </span>
                    <span className="absolute left-0 right-8 top-0 h-px bg-white/15">
                      <span
                        className="absolute left-0 top-0 h-full bg-brand"
                        style={{ width: isActive ? `${progress * 100}%` : "0%" }}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4 py-5 md:py-0 w-full md:w-auto justify-between md:justify-end">
              <p className="font-display text-white/80 text-sm tabular-nums">
                <span className="text-white text-lg font-bold">0{active + 1}</span>
                <span className="text-white/40"> / 0{slides.length}</span>
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => swiper?.slidePrev()}
                  aria-label="Previous slide"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.06] text-white flex items-center justify-center transition-all hover:bg-brand hover:border-brand hover:scale-105 active:scale-95"
                >
                  <ArrowIcon dir="left" className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => swiper?.slideNext()}
                  aria-label="Next slide"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.06] text-white flex items-center justify-center transition-all hover:bg-brand hover:border-brand hover:scale-105 active:scale-95"
                >
                  <ArrowIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
