import { Section } from "./ui/Section";
import { ScrollRevealGroup, ScrollRevealItem } from "./ui/ScrollReveal";
import { CountUp } from "./ui/CountUp";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="proof it's not just talk" title="Achievements">
      <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a) => {
          const hasDigits = /\d/.test(a.stat);
          const Card = (
            <div className="h-full rounded-2xl border border-border-soft bg-bg-elevated p-6 transition-colors hover:border-accent-primary/40">
              <span className="text-2xl" aria-hidden>
                {a.icon}
              </span>
              <p className="font-display mt-3 text-lg font-medium text-text-primary">
                {hasDigits ? <CountUp value={a.stat} /> : a.stat}
              </p>
              <p className="mt-1 text-sm text-text-muted">{a.label}</p>
            </div>
          );

          return (
            <ScrollRevealItem key={a.stat}>
              {a.href ? (
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {Card}
                </a>
              ) : (
                Card
              )}
            </ScrollRevealItem>
          );
        })}
      </ScrollRevealGroup>
    </Section>
  );
}
