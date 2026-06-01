import type { Project } from "../../data/projects";
import { Tag } from "../ui/Tag";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectPlaceholderVisual } from "./ProjectPlaceholderVisual";
import { DeviceFrame } from "../ui/DeviceFrame";
import { assetUrl } from "../../lib/assetUrl";
import { useLang, pickLang, type Lang } from "../../i18n/LangContext";
import { content as uiContent } from "../../i18n/content";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const tierKey: Record<Project["tier"], keyof typeof uiContent> = {
  primary: "project.tierPrimary",
  secondary: "project.tierSecondary",
  tertiary: "project.tierTertiary",
  research: "project.tierResearch",
  brand: "project.tierBrand",
  archive: "project.tierArchive",
};

function FieldLabel({ children }: { children: string }) {
  return (
    <div className="font-mono text-[10px] tracking-widish text-muted uppercase mb-2">
      {children}
    </div>
  );
}

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

function pickArray(en: string[], zh: string[] | undefined, lang: Lang): string[] {
  if (lang === "zh" && zh && zh.length === en.length) return zh;
  return en;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { lang, t } = useLang();
  const isPrimary = project.tier === "primary";
  const isSecondary = project.tier === "secondary";
  const isTertiary = project.tier === "tertiary";
  const isResearch = project.tier === "research";

  const containerClass = isResearch
    ? "border border-line-soft rounded-sm bg-canvas-soft/30 p-7 md:p-10"
    : "bg-card border border-line shadow-card hover:shadow-card-hover transition-shadow duration-500 ease-editorial p-7 md:p-10 rounded-sm";

  // Resolve bilingual fields once.
  const subtitle = pickLang(project.subtitle, project.subtitleZh, lang);
  const story = pickLang(project.story, project.storyZh, lang);
  const role = pickLang(project.role, project.roleZh, lang);
  const cardShort = pickLang(project.cardShort, project.cardShortZh, lang);
  const highlightsLabel = pickLang(
    project.highlightsLabel,
    project.highlightsLabelZh,
    lang,
  );
  const highlights = pickArray(project.highlights, project.highlightsZh, lang);
  const metrics = pickArray(project.metrics, project.metricsZh, lang);
  const featureHighlight =
    lang === "zh" && project.featureHighlightZh
      ? project.featureHighlightZh
      : project.featureHighlight;
  const tierLabelText = t(tierKey[project.tier]);

  // ============ PRIMARY ============
  if (isPrimary) {
    const resolvedCover = assetUrl(project.cover ?? undefined);
    return (
      <article id={`project-${project.id}`} className={containerClass}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            {resolvedCover ? (
              <div className="flex items-center justify-center bg-canvas-soft/50 border border-line-soft rounded-sm py-10 lg:py-12">
                <DeviceFrame
                  src={resolvedCover}
                  alt={project.coverAlt ?? project.titleEn}
                />
              </div>
            ) : (
              <ProjectPlaceholderVisual project={project} index={index} />
            )}
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] tracking-widish text-accent uppercase">
                {tierLabelText}
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
              {subtitle}
            </p>
            <p className="mt-4 text-[14.5px] text-ink-soft leading-relaxed">
              {story}
            </p>

            <div className="mt-8">
              <FieldLabel>{t("project.role")}</FieldLabel>
              <div className="text-[13.5px] text-ink-soft leading-relaxed">
                {role}
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
                  <span>{lang === "zh" ? t("hero.tryLiveDemo") : (project.linkLabel ?? "Visit")}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-line-soft grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
          <div className="md:col-span-4">
            <FieldLabel>{t("project.keyMetrics")}</FieldLabel>
            <div className="space-y-3">
              {metrics.map((m) => (
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
            <FieldLabel>{highlightsLabel}</FieldLabel>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-[13.5px] text-ink-soft">
              {highlights.map((h) => (
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
            <FieldLabel>{t("project.tags")}</FieldLabel>
            <ChipsRow items={project.tags} />
          </div>
          <div className="md:col-span-7">
            <FieldLabel>{t("project.techStack")}</FieldLabel>
            <ChipsRow items={project.techStack} variant="tech" gap="md" />
          </div>
        </div>
      </article>
    );
  }

  // ============ SECONDARY ============
  if (isSecondary) {
    return (
      <article id={`project-${project.id}`} className={containerClass}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-5">
            <ProjectVisual
              project={project}
              index={index}
              variant="project"
              ratio="16/9"
              objectFit="contain"
            />
          </div>
          <div className="md:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] tracking-widish text-ink-soft uppercase">
                {tierLabelText}
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
              {story}
            </p>

            <div className="mt-6">
              <FieldLabel>{t("project.role")}</FieldLabel>
              <p className="text-[13px] text-ink-soft leading-relaxed">
                {role}
              </p>
            </div>

            <div className="mt-6">
              <FieldLabel>{highlightsLabel}</FieldLabel>
              <ul className="list-none text-[13px] text-ink-soft space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3 leading-relaxed">
                    <span className="text-muted/70 font-mono text-[9px] mt-[5px] shrink-0">
                      ▪
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {featureHighlight && (
              <div className="mt-7 border-l-2 border-accent pl-4 py-1">
                <div className="font-mono text-[10px] tracking-widish text-accent uppercase mb-1.5">
                  {featureHighlight.label}
                </div>
                <p className="font-serif text-[15px] text-ink leading-snug">
                  {featureHighlight.text}
                </p>
              </div>
            )}

            <div className="mt-7">
              <FieldLabel>{t("project.tags")}</FieldLabel>
              <ChipsRow items={project.tags} />
            </div>
          </div>
        </div>
      </article>
    );
  }

  // ============ TERTIARY ============
  if (isTertiary) {
    return (
      <article id={`project-${project.id}`} className={containerClass}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="md:col-span-5">
            <ProjectVisual
              project={project}
              index={index}
              variant="subtle"
              ratio="16/9"
              objectFit="contain"
            />
          </div>
          <div className="md:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
                {tierLabelText}
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
              {cardShort}
            </p>

            <div className="mt-5">
              <FieldLabel>{t("project.keyMetrics")}</FieldLabel>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {metrics.map((m) => (
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
              <FieldLabel>{t("project.tags")}</FieldLabel>
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
      <article id={`project-${project.id}`} className={containerClass}>
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
              {tierLabelText}
            </div>
            <div className="font-serif italic text-base text-ink-soft">
              {t("project.caseNote")}
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
              {project.titleZh} · {subtitle}
            </p>
            {project.award && (
              <div className="mt-3 flex items-baseline gap-2.5">
                <span className="font-mono text-[9.5px] tracking-widish text-muted uppercase shrink-0">
                  {t("project.award")}
                </span>
                <span className="text-muted">·</span>
                <span className="text-[12.5px] text-accent leading-snug">
                  {project.award}
                </span>
              </div>
            )}
            <p className="mt-5 text-[13.5px] text-ink-soft leading-relaxed max-w-prose">
              {story}
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <FieldLabel>{t("project.methods")}</FieldLabel>
                <ul className="list-none text-[12.5px] text-ink-soft space-y-2 leading-relaxed">
                  {highlights.map((h) => (
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
                <FieldLabel>{t("project.keyMetrics")}</FieldLabel>
                <ul className="list-none text-[12.5px] text-ink-soft space-y-2 leading-relaxed">
                  {metrics.map((m) => (
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
              <FieldLabel>{t("project.tags")}</FieldLabel>
              <ChipsRow items={project.tags} variant="subtle" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return null;
}
