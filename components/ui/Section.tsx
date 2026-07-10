import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-24 sm:py-28 ${className ?? ""}`}>
      <ScrollReveal className="mb-12">
        {eyebrow && (
          <p className="font-hand text-2xl text-accent-warm mb-1">{eyebrow}</p>
        )}
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-text-primary">
          {title}
        </h2>
      </ScrollReveal>
      {children}
    </section>
  );
}
