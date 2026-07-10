"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Parses strings like "40%", "+37.9%", "496×", "20+" into a numeric
 * target plus the surrounding prefix/suffix so we can animate just the digits.
 */
function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: raw, decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const target = parseFloat(numStr.replace(/,/g, ""));
  return { prefix, target, suffix, decimals };
}

export function CountUp({
  value,
  className,
  duration = 1.4,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const { prefix, target, suffix, decimals } = parseValue(value);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion || Number.isNaN(target)) {
      setDisplay(value);
      return;
    }

    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(
        `${prefix}${current.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}${suffix}`
      );
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
