import type { PathStage } from "../../data/path";
import { projects } from "../../data/projects";
import { brandWorks } from "../../data/brandWorks";
import { useLang, pickLang } from "../../i18n/LangContext";

interface PathNodeProps {
  stage: PathStage;
}

interface LinkedItem {
  id: string;
  label: string;
  href: string;
}

export function PathNode({ stage }: PathNodeProps) {
  const { lang } = useLang();
  const linkedItems: LinkedItem[] = stage.relatedProjects
    .map((id): LinkedItem | null => {
      const p = projects.find((x) => x.id === id);
      if (p) {
        return {
          id: p.id,
          label:
            lang === "zh" && p.titleZh
              ? p.titleZh
              : p.titleEn.split(":")[0],
          href: `#project-${p.id}`,
        };
      }
      const b = brandWorks.find((x) => x.id === id);
      if (b) {
        return {
          id: b.id,
          label:
            lang === "zh"
              ? `${b.titleZh} / 品牌实验室`
              : "Hotan Feast / Brand Lab",
          href: `#brand-${b.id}`,
        };
      }
      return null;
    })
    .filter((x): x is LinkedItem => x !== null);

  const stageLabel = `STAGE ${String(stage.stage).padStart(2, "0")}`;
  const title = pickLang(stage.title, stage.titleZh, lang);
  const description =
    lang === "zh" && stage.descriptionZh ? stage.descriptionZh : stage.description;

  return (
    <div className="relative pl-8 md:pl-0 md:pt-8 pb-10 md:pb-0 last:pb-0">
      {/* Mobile: left vertical line spanning full height */}
      <div
        className="md:hidden absolute left-[5px] top-0 bottom-0 w-px bg-line"
        aria-hidden
      />
      <div
        className="md:hidden absolute left-0 top-1 w-[11px] h-[11px] rounded-full border-2 border-accent bg-canvas"
        aria-hidden
      />

      <div
        className="hidden md:block absolute left-0 top-[7px] -translate-y-1/2 w-[11px] h-[11px] rounded-full border-2 border-accent bg-canvas"
        aria-hidden
      />

      <div className="font-mono text-[10px] tracking-widish text-accent/80 mb-2 uppercase">
        {stageLabel}
      </div>

      <h3 className="font-serif text-xl md:text-[1.35rem] text-ink leading-tight tracking-tightish">
        {title}
      </h3>

      <p className="mt-3 text-[13px] text-ink-soft leading-relaxed">
        {description}
      </p>

      {linkedItems.length > 0 && (
        <div className="mt-5 flex flex-col gap-y-1.5 items-start">
          {linkedItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="inline-flex items-center gap-1.5 text-[11px] tracking-widish uppercase text-accent hover:text-ink-soft transition-colors font-sans"
            >
              <span aria-hidden>↓</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
