"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const badges = [
  { label: "Meta OpenEnv Hackathon Finalist", className: "-left-6 top-8 sm:-left-12", delay: 0.6 },
  { label: "700+ DSA problems solved", className: "-right-4 bottom-12 sm:-right-10", delay: 0.9 },
];

export function HeroPhoto() {
  return (
    <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
      {/* Slowly rotating gradient ring — stands in for a hero illustration without being one */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full opacity-80"
        style={{
          background:
            "conic-gradient(from 0deg, var(--accent-primary), var(--accent-warm), var(--success-glow), var(--accent-primary))",
          filter: "blur(2px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[6px] rounded-full bg-bg-base" />

      <div className="relative h-[calc(100%-24px)] w-[calc(100%-24px)] overflow-hidden rounded-full border border-border-soft bg-bg-elevated shadow-2xl shadow-black/40">
        <Image
          src="/avatar.jpg"
          alt="Yashaswini Kulshrestha"
          fill
          sizes="(min-width: 640px) 320px, 256px"
          className="object-cover object-top"
          priority
        />
      </div>

      {badges.map((badge) => (
        <motion.div
          key={badge.label}
          className={`absolute ${badge.className} z-10 rounded-full border border-border-soft bg-bg-elevated/90 px-3 py-1.5 text-xs font-medium text-text-muted shadow-lg shadow-black/30 backdrop-blur-sm`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: badge.delay, duration: 0.5 },
            y: { delay: badge.delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {badge.label}
        </motion.div>
      ))}
    </div>
  );
}
