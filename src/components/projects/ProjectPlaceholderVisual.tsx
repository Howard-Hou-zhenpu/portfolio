import type { Project } from "../../data/projects";

interface ProjectPlaceholderVisualProps {
  project: Project;
  index: number;
}

const tierStyles: Record<
  Project["tier"],
  { bg: string; border: string; ratio: string; accent: string }
> = {
  primary: {
    bg: "bg-gradient-to-br from-canvas-soft to-canvas",
    border: "border-line",
    ratio: "aspect-[16/10]",
    accent: "text-accent",
  },
  secondary: {
    bg: "bg-canvas-soft",
    border: "border-line",
    ratio: "aspect-[16/10]",
    accent: "text-ink-soft",
  },
  tertiary: {
    bg: "bg-canvas-soft/60",
    border: "border-line-soft",
    ratio: "aspect-[16/10]",
    accent: "text-ink-soft",
  },
  research: {
    bg: "bg-canvas",
    border: "border-line-soft",
    ratio: "aspect-[16/10]",
    accent: "text-muted",
  },
  brand: {
    bg: "bg-canvas-soft",
    border: "border-line-soft",
    ratio: "aspect-[16/10]",
    accent: "text-ink-soft",
  },
  archive: {
    bg: "bg-canvas",
    border: "border-line-soft",
    ratio: "aspect-[16/10]",
    accent: "text-muted",
  },
};

export function ProjectPlaceholderVisual({
  project,
  index,
}: ProjectPlaceholderVisualProps) {
  const style = tierStyles[project.tier];
  const projectNumber = String(index + 1).padStart(2, "0");
  const keywords = project.tags.slice(0, 3);

  return (
    <div
      className={`relative w-full ${style.ratio} ${style.bg} ${style.border} border overflow-hidden rounded-sm`}
    >
      {/* corner ticks */}
      <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widish text-muted">
        FIG. {projectNumber}
      </div>
      <div className="absolute top-3 right-3 font-mono text-[10px] tracking-widish text-muted uppercase">
        {project.tier}
      </div>
      <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widish text-muted">
        / {project.id}
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] tracking-widish text-muted">
        — placeholder
      </div>

      {/* center stack */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <div className={`font-mono text-[10px] tracking-widish ${style.accent} mb-3 uppercase`}>
          {keywords.join(" · ")}
        </div>
        <div className="font-serif text-2xl md:text-3xl text-ink leading-tight tracking-tightish max-w-[18ch]">
          {project.titleZh}
        </div>
        <div className="mt-2 font-sans text-[11px] tracking-widish text-muted uppercase">
          {project.titleEn.split(":")[0]}
        </div>

        {/* fine-line index marks */}
        <div className="mt-6 flex items-center gap-2 text-line">
          <span className="h-px w-8 bg-line"></span>
          <span className="font-mono text-[10px] text-muted">{projectNumber}</span>
          <span className="h-px w-8 bg-line"></span>
        </div>
      </div>
    </div>
  );
}
