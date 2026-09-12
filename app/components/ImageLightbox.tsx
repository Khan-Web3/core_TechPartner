"use client";

// Core Tech Partner site file

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  src: string | null;
  alt: string;
  onClose: () => void;
};

export default function ImageLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    if (!src) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-ink/85 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-brand hover:border-brand transition-colors z-10"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-6xl max-h-[85vh] aspect-[16/10] rounded-[16px] overflow-hidden bg-[#0b1220] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1152px"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
