import { Mail, FileDown } from "lucide-react";
import { Section } from "./ui/Section";
import { ScrollReveal } from "./ui/ScrollReveal";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { contact } from "@/lib/data";

const links = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: "LinkedIn", href: contact.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: contact.github, icon: GithubIcon },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="let's talk" title="Get in touch" className="pb-12">
      <ScrollReveal>
        <p className="font-display max-w-2xl text-2xl font-medium text-text-primary sm:text-3xl">
          Let&apos;s build something that doesn&apos;t break in prod.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-bg-elevated px-5 py-2.5 text-sm text-text-primary transition-colors hover:border-accent-primary/50 hover:bg-white/5"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
          <a
            href={contact.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent-primary px-5 py-2.5 text-sm font-medium text-bg-base transition-transform hover:scale-[1.03]"
          >
            <FileDown className="h-4 w-4" />
            Résumé PDF
          </a>
        </div>
      </ScrollReveal>

      <div className="mt-20 flex flex-col items-center gap-1 border-t border-border-soft pt-8 text-center text-sm text-text-muted">
        <p>© {new Date().getFullYear()} Yashaswini Kulshrestha</p>
        <p className="font-hand text-lg text-accent-warm">
          built with Next.js &amp; way too much coffee
        </p>
      </div>
    </Section>
  );
}
