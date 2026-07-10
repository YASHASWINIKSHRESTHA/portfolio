"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "./ui/Section";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CountUp } from "./ui/CountUp";
import { experience } from "@/lib/data";

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="experience" eyebrow="where I've worked" title="Experience">
      <div className="relative">
        {/* Timeline spine — animated draw on desktop, static on mobile */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px sm:hidden bg-border-soft" />
        <svg
          className="absolute left-0 top-0 hidden h-full w-4 sm:block"
          width="16"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.line
            x1="8"
            y1="0"
            x2="8"
            y2="100%"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: reduceMotion ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </svg>

        <div className="space-y-14">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 0.1} className="relative pl-8 sm:pl-12">
              <span
                className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-primary bg-bg-base sm:left-[2.5px]"
                aria-hidden
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-medium text-text-primary">
                  {job.company}
                </h3>
                <span className="text-sm text-text-muted">
                  {job.dates} · {job.location}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-accent-warm">{job.role}</p>

              <ul className="mt-4 space-y-3">
                {job.bullets.map((b) => (
                  <li key={b.text} className="flex gap-3 text-text-muted leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-text-muted" aria-hidden />
                    <span>
                      {b.text}
                      {b.metric && (
                        <>
                          {" → "}
                          <CountUp
                            value={b.metric}
                            className="font-semibold text-success-glow"
                          />{" "}
                          <span className="text-text-muted">{b.metricLabel}</span>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
