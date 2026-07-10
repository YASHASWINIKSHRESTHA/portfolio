import { Section } from "./ui/Section";

export function About() {
  return (
    <Section id="about" eyebrow="a little about me" title="About">
      <div className="max-w-2xl text-lg leading-relaxed text-text-muted">
        <p>
          I&apos;m a final-year IT student at NSUT, currently interning at
          HealthKart on backend and data pipelines. Most of what I build sits
          on the line between{" "}
          <span className="text-text-primary">&ldquo;the AI suggests&rdquo;</span> and{" "}
          <span className="text-text-primary">&ldquo;the system decides&rdquo;</span> —
          that boundary is where things actually break in production, and
          where I spend most of my attention.
        </p>
        <p className="mt-4">
          VeriLoan is the clearest example: GPT-4o proposes a decision, but a
          200+ rule deterministic engine holds final authority, so the whole
          pipeline stays auditable under RBI&apos;s V-CIP compliance
          requirements. That&apos;s the pattern I try to bring to every
          agentic system I ship — not a demo that works once, but one that
          holds up when someone audits it.
        </p>
      </div>
    </Section>
  );
}
