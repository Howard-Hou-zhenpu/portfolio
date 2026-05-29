import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

const tierOrder = ["primary", "secondary", "tertiary", "research"] as const;

export function ProjectSection() {
  const sortedProjects = [...projects].sort(
    (a, b) =>
      tierOrder.indexOf(a.tier as (typeof tierOrder)[number]) -
      tierOrder.indexOf(b.tier as (typeof tierOrder)[number])
  );

  return (
    <Section id="projects" bg="soft">
      <SectionTitle
        index="02"
        eyebrow="Selected Projects"
        title="From a personal AI MVP to enterprise AI product practice."
        description="Four projects across four registers — independent product building, enterprise AI product ops, AI content workflow, and mixed-method user research. Read in order, or skip to what you care about."
      />

      <div className="space-y-10 md:space-y-14">
        {sortedProjects.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 60}>
            <ProjectCard project={project} index={i} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
