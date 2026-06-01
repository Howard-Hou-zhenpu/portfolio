import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { useLang } from "../../i18n/LangContext";

const tierOrder = ["primary", "secondary", "tertiary", "research"] as const;

export function ProjectSection() {
  const { t } = useLang();
  const sortedProjects = [...projects].sort(
    (a, b) =>
      tierOrder.indexOf(a.tier as (typeof tierOrder)[number]) -
      tierOrder.indexOf(b.tier as (typeof tierOrder)[number])
  );

  return (
    <Section id="projects" bg="soft">
      <SectionTitle
        index="02"
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        description={t("projects.description")}
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
