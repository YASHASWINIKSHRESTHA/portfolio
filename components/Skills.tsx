import { Section } from "./ui/Section";
import { ScrollRevealGroup, ScrollRevealItem } from "./ui/ScrollReveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" eyebrow="what I reach for" title="Skills">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <ScrollRevealItem key={group.group}>
            <h3 className="font-display text-lg font-medium text-text-primary">
              {group.group}
            </h3>
            <p className="mt-0.5 text-xs text-text-muted">{group.proof}</p>
            <ScrollRevealGroup className="mt-4 flex flex-wrap gap-2" stagger={0.04}>
              {group.items.map((item) => (
                <ScrollRevealItem key={item} y={10}>
                  <span className="inline-block rounded-full border border-border-soft bg-bg-elevated px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-accent-primary/50 hover:text-text-primary">
                    {item}
                  </span>
                </ScrollRevealItem>
              ))}
            </ScrollRevealGroup>
          </ScrollRevealItem>
        ))}
      </div>
    </Section>
  );
}
