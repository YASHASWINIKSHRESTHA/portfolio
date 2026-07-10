"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GithubIcon } from "./ui/BrandIcons";
import { CountUp } from "./ui/CountUp";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

const MAX_TILT = 6;

export function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`group relative overflow-hidden rounded-2xl border border-border-soft bg-bg-elevated p-8 transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--accent-primary),0_20px_60px_-15px_rgba(124,158,255,0.35)] sm:p-10 ${
        project.featured ? "sm:col-span-2" : ""
      }`}
    >
      {project.badge && (
        <span className="mb-4 inline-block rounded-full bg-accent-warm/15 px-3 py-1 text-xs font-medium text-accent-warm">
          {project.badge}
        </span>
      )}

      <div className={`flex flex-col gap-8 ${project.featured ? "lg:flex-row lg:items-start lg:justify-between" : ""}`}>
        <div className={project.featured ? "lg:max-w-md" : ""}>
          <h3 className="font-display text-2xl font-medium text-text-primary">
            {project.title}
          </h3>
          <p className="mt-2 text-text-muted">{project.tagline}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border-soft bg-bg-elevated-2 px-2.5 py-1 text-xs text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="mt-5 space-y-2.5">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-primary" aria-hidden />
                {bullet}
              </li>
            ))}
          </ul>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-soft px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-white/5"
          >
            <GithubIcon className="h-4 w-4" />
            View Code
          </a>
        </div>

        {project.metrics && (
          <div className="flex gap-6 sm:gap-10 lg:shrink-0">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <CountUp
                  value={m.value}
                  className="font-display block text-3xl font-medium text-success-glow sm:text-4xl"
                />
                <span className="mt-1 block text-xs text-text-muted">{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
