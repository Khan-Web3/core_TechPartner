"use client";

// Core Tech Partner site file

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className={`transition-all duration-300 ${
          solid
            ? "bg-paper/90 border-b border-line backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-4 py-4">
          <Link href="/" className="shrink-0">
            <span className={`font-display text-[1.15rem] font-extrabold tracking-tight ${text}`}>
              Core Tech <span className="text-brand">Partner</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3.5 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "text-brand"
                        : solid
                          ? "text-ink/65 hover:text-ink"
                          : "text-white/75 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`btn-primary !py-2.5 !px-5 !text-sm ${
                !solid ? "!bg-white !text-ink hover:!bg-brand-soft" : ""
              }`}
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden w-11 h-11 flex flex-col justify-center items-end gap-1.5"
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
            className="lg:hidden bg-paper border-b border-line"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 font-display text-2xl font-semibold text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-4 w-full">
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
