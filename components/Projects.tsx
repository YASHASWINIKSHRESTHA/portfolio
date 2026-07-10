import { Section } from "./ui/Section";
import { ScrollRevealGroup, ScrollRevealItem } from "./ui/ScrollReveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="things I've shipped" title="Projects">
      <ScrollRevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ScrollRevealItem key={project.title} className={project.featured ? "sm:col-span-2" : ""}>
            <ProjectCard project={project} />
          </ScrollRevealItem>
        ))}
      </ScrollRevealGroup>
    </Section>
  );
}
