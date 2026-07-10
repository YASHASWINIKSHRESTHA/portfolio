"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`no-scrollbar mx-4 mt-4 flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border border-border-soft px-2 transition-all duration-300 ${
          scrolled
            ? "py-1.5 bg-bg-elevated/80 backdrop-blur-md shadow-lg shadow-black/20"
            : "py-2.5 bg-bg-elevated/40 backdrop-blur-sm"
        }`}
      >
        <a
          href="#home"
          className="shrink-0 font-display text-sm font-medium px-3 py-1.5 text-text-primary hover:text-accent-primary transition-colors"
        >
          YK
        </a>
        <span className="w-px h-4 shrink-0 bg-border-soft mx-1" aria-hidden />
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 whitespace-nowrap px-3 py-1.5 text-sm text-text-muted rounded-full hover:text-text-primary hover:bg-white/5 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
