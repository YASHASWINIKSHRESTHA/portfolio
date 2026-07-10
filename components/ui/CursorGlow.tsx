"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 60, mass: 0.8 });
  const springY = useSpring(y, { damping: 30, stiffness: 60, mass: 0.8 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.parentElement?.getBoundingClientRect();
    if (rect) {
      x.set(rect.width * 0.7);
      y.set(rect.height * 0.3);
    }

    const onMove = (e: MouseEvent) => {
      const parent = el.parentElement;
      if (!parent) return;
      const bounds = parent.getBoundingClientRect();
      x.set(e.clientX - bounds.left);
      y.set(e.clientY - bounds.top);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute -z-10 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
      style={{
        left: springX,
        top: springY,
        x: "-50%",
        y: "-50%",
        background:
          "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
      }}
    />
  );
}
