"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/lib/data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || !isHome;
  const text = solid ? "text-ink" : "text-white";
  const muted = solid ? "text-muted" : "text-white/75";

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top bar — Techor style */}
      <div
        className={`hidden lg:block transition-colors duration-300 ${
          solid ? "bg-brand text-white" : "bg-black/25 text-white backdrop-blur-sm"
        }`}
      >
        <div className="container-x flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="hover:opacity-80">
              {company.email}
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:opacity-80">
              {company.phone}
            </a>
          </div>
          <p className="opacity-90">{company.shortAddress}</p>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          solid
            ? "bg-white border-b border-line shadow-[0_8px_30px_rgba(11,18,32,0.06)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-4 py-3.5">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg width="42" height="42" viewBox="0 0 120 120">
              <defs>
                <linearGradient id="navGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0f8f91" />
                  <stop offset="100%" stopColor="#1e4fd7" />
                </linearGradient>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="56"
                fill="url(#navGrad)"
                fillOpacity="0.12"
                stroke="url(#navGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <circle cx="60" cy="60" r="46" fill="#fff" />
              <path
                d="M60 25 C42 25 28 39 28 60 C28 81 42 95 60 95"
                stroke="url(#navGrad)"
                strokeWidth="9"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M53 35 L53 95"
                stroke="#1e4fd7"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <path
                d="M53 60 C53 48 67 48 67 60 C67 72 53 72 53 60 Z"
                fill="#fff"
              />
            </svg>
            <div className="hidden sm:flex flex-col">
              <span className={`font-display text-[17px] font-bold leading-none ${text}`}>
                CORE <span className="text-brand">TECH</span>
              </span>
              <span className={`text-[10px] font-semibold tracking-[0.22em] uppercase mt-1 ${muted}`}>
                Partner
              </span>
            </div>
          </Link>

          <ul className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-[15px] font-semibold transition-colors ${
                      active
                        ? "text-brand"
                        : solid
                          ? "text-ink/70 hover:text-brand"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden xl:block">
            <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">
              Get A Quote
            </Link>
          </div>

          <button
            type="button"
            className="xl:hidden w-11 h-11 flex flex-col justify-center items-end gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 transition-all ${solid || open ? "bg-ink" : "bg-white"} ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 transition-all ${solid || open ? "bg-ink" : "bg-white"} ${open ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`h-0.5 w-6 transition-all ${solid || open ? "bg-ink" : "bg-white"} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="xl:hidden bg-white border-b border-line shadow-lg"
          >
            <div className="container-x py-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 font-display text-xl font-semibold text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-3 w-full">
                Get A Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
