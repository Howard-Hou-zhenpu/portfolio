import type { Project } from "../../data/projects";
import { Tag } from "../ui/Tag";
import { ProjectVisual } from "./ProjectVisual";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const tierLabel: Record<Project["tier"], string> = {
  primary: "Hero Project",
  secondary: "Selected · 02",
  tertiary: "Selected · 03",
  research: "Research Highlight",
  brand: "Brand Work",
  archive: "Archive",
};

// 通用块级标题(Role / Key Metrics / What I Built ...)
function FieldLabel({ children }: { children: string }) {
  return (
    <div className="font-mono text-[10px] tracking-widish text-muted uppercase mb-2">
      {children}
    </div>
  );
}

// 复用的 chips 行 (tags 或 tech stack)
function ChipsRow({
  items,
  variant = "default",
  gap = "lg",
}: {
  items: string[];
  variant?: "default" | "subtle" | "tech";
  gap?: "lg" | "md";
}) {
  const gapClass = gap === "lg" ? "gap-x-2 gap-y-2" : "gap-x-1.5 gap-y-1.5";
  return (
    <div className={`flex flex-wrap ${gapClass}`}>
      {items.map((t) => (
        <Tag key={t} variant={variant}>
          {t}
        </Tag>
      ))}
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isPrimary = project.tier === "primary";
  const isSecondary = project.tier === "secondary";
  const isTertiary = project.tier === "tertiary";
  const isResearch = project.tier === "research";

  const containerClass = isResearch
    ? "border border-line-soft rounded-sm bg-canvas-soft/30 p-7 md:p-10"
    : "bg-card border border-line shadow-card hover:shadow-card-hover transition-shadow duration-500 ease-editorial p-7 md:p-10 rounded-sm";

  // ============ PRIMARY ============
  if (isPrimary) {
    return (
      <article className={containerClass}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <ProjectVisual
              project={project}
              index={index}
              variant="primary"
              ratio="16/10"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] tracking-widish text-accent uppercase">
                {tierLabel[project.tier]}
              </span>
              <span className="h-px flex-1 bg-line-soft" />
            </div>
            <h3 className="font-serif text-3xl md:text-[2.1rem] leading-[1.15] tracking-tightish text-ink">
              {project.titleEn}
            </h3>
            <p className="mt-2 font-serif italic text-base text-muted">
              {project.titleZh}
            </p>
            <p className="mt-5 text-sm text-ink-soft leading-relaxed">
              {project.subtitle}
            </p>
            <p className="mt-4 text-[14.5px] text-ink-soft leading-relaxed">
              {project.story}
            </p>

            <div className="mt-8">
              <FieldLabel>Role</FieldLabel>
              <div className="text-[13.5px] text-ink-soft leading-relaxed">
                {project.role}
              </div>
            </div>

            {project.link && (
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-ink-soft text-ink hover:bg-ink hover:text-canvas transition-colors duration-300 px-4 py-2 text-[12px] tracking-widish uppercase font-sans rounded-sm"
                >
                  <span>{project.linkLabel ?? "Visit"}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom: metrics + highlights + tags/tech */}
        <div className="mt-12 pt-10 border-t border-line-soft grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
          <div className="md:col-span-4">
            <FieldLabel>Key Metrics</FieldLabel>
            <div className="space-y-3">
              {project.metrics.map((m) => (
                <div
                  key={m}
                  className="px-3.5 py-2 border border-line rounded-sm bg-canvas-soft/40"
                >
                  <span className="font-serif text-[15px] text-ink leading-snug">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-8">
            <FieldLabel>{project.highlightsLabel}</FieldLabel>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-[13.5px] text-ink-soft">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed">
                  <span className="text-accent/70 font-mono text-[9px] mt-[5px] shrink-0">
                    ▪
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-line-soft grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-10">
          <div className="md:col-span-5">
            <FieldLabel>Tags</FieldLabel>
            <ChipsRow items={project.tags} />
          </div>
          <div className="md:col-span-7">
            <FieldLabel>Tech Stack</FieldLabel>
            <ChipsRow items={project.techStack} variant="tech" gap="md" />
          </div>
        </div>
      </article>
    );
  }

  // ============ SECONDARY (iFLYTEK) ============
  if (isSecondary) {
    return (
      <article className={containerClass}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5">
            <ProjectVisual
              project={project}
              index={index}
              variant="project"
              ratio="4/3"
            />
          </div>
          <div className="md:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] tracking-widish text-ink-soft uppercase">
                {tierLabel[project.tier]}
              </span>
              <span className="h-px flex-1 bg-line-soft" />
            </div>
            <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight tracking-tightish text-ink">
              {project.titleEn}
            </h3>
            <p className="mt-1 font-serif italic text-sm text-muted">
              {project.titleZh}
            </p>
            <p className="mt-5 text-[13.5px] text-ink-soft leading-relaxed">
              {project.story}
            </p>

            <div className="mt-6">
              <FieldLabel>Role</FieldLabel>
              <p className="text-[13px] text-ink-soft leading-relaxed">
                {project.role}
              </p>
            </div>

            <div className="mt-6">
              <FieldLabel>{project.highlightsLabel}</FieldLabel>
              <ul className="list-none text-[13px] text-ink-soft space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 leading-relaxed">
                    <span className="text-muted/70 font-mono text-[9px] mt-[5px] shrink-0">
                      ▪
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.featureHighlight && (
              <div className="mt-7 border-l-2 border-accent pl-4 py-1">
                <div className="font-mono text-[10px] tracking-widish text-accent uppercase mb-1.5">
                  {project.featureHighlight.label}
                </div>
                <p className="font-serif text-[15px] text-ink leading-snug">
                  {project.featureHighlight.text}
                </p>
              </div>
            )}

            <div className="mt-7">
              <FieldLabel>Tags</FieldLabel>
              <ChipsRow items={project.tags} />
            </div>
          </div>
        </div>
      </article>
    );
  }

  // ============ TERTIARY (Danxiansen) ============
  if (isTertiary) {
    return (
      <article className={containerClass}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-4">
            <ProjectVisual
              project={project}
              index={index}
              variant="subtle"
              ratio="4/3"
            />
          </div>
          <div className="md:col-span-8 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
                {tierLabel[project.tier]}
              </span>
              <span className="h-px flex-1 bg-line-soft" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl leading-tight tracking-tightish text-ink">
              {project.titleEn}
            </h3>
            <p className="mt-1 font-serif italic text-sm text-muted">
              {project.titleZh}
            </p>
            <p className="mt-4 text-[13px] text-ink-soft leading-relaxed">
              {project.cardShort}
            </p>

            <div className="mt-5">
              <FieldLabel>Key Metrics</FieldLabel>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m}
                    className="px-3 py-2 border border-line-soft rounded-sm bg-canvas-soft/40"
                  >
                    <span className="font-mono text-[11.5px] text-ink tracking-tightish leading-snug">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <FieldLabel>Tags</FieldLabel>
              <ChipsRow items={project.tags} variant="subtle" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  // ============ RESEARCH ============
  if (isResearch) {
    return (
      <article className={containerClass}>
        {(project.cover || project.visualType) && (
          <div className="mb-8 md:mb-10">
            <ProjectVisual
              project={project}
              index={index}
              variant="research"
              ratio="auto"
              objectFit="contain"
            />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-widish text-muted uppercase mb-2">
              {tierLabel[project.tier]}
            </div>
            <div className="font-serif italic text-base text-ink-soft">
              Case Note
            </div>
            <div className="mt-3 font-mono text-[10px] text-muted">
              / {project.id}
            </div>
          </div>
          <div className="md:col-span-9">
            <h3 className="font-serif text-2xl md:text-[1.65rem] leading-snug tracking-tightish text-ink max-w-[28ch]">
              {project.titleEn}
            </h3>
            <p className="mt-1 font-serif italic text-sm text-muted">
              {project.titleZh} · {project.subtitle}
            </p>
            <p className="mt-5 text-[13.5px] text-ink-soft leading-relaxed max-w-prose">
              {project.story}
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <FieldLabel>Methods</FieldLabel>
                <ul className="list-none text-[12.5px] text-ink-soft space-y-2 leading-relaxed">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <span className="text-muted/60 font-mono text-[9px] mt-[4px] shrink-0">
                        ▪
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <FieldLabel>Key Metrics</FieldLabel>
                <ul className="list-none text-[12.5px] text-ink-soft space-y-2 leading-relaxed">
                  {project.metrics.map((m) => (
                    <li key={m} className="flex gap-2.5">
                      <span className="text-muted/60 font-mono text-[9px] mt-[4px] shrink-0">
                        ▪
                      </span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7">
              <FieldLabel>Tags</FieldLabel>
              <ChipsRow items={project.tags} variant="subtle" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return null;
}
