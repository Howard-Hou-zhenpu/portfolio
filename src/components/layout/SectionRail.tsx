import { useEffect, useState } from "react";
import { useLang } from "../../i18n/LangContext";

const sections = [
  { id: "path", index: "01", en: "Path", zh: "成长路径" },
  { id: "projects", index: "02", en: "Projects", zh: "精选项目" },
  { id: "toolkit", index: "03", en: "Toolkit", zh: "工具箱" },
  { id: "brand-lab", index: "04", en: "Brand", zh: "品牌实验室" },
  { id: "notes", index: "05", en: "Notes", zh: "思考笔记" },
  { id: "contact", index: "06", en: "Contact", zh: "联系我" },
] as const;

export function SectionRail() {
  const { lang } = useLang();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
    >
      {sections.map((s) => {
        const isActive = activeId === s.id;
        const label = lang === "zh" ? s.zh : s.en;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`group flex items-center gap-2 transition-colors duration-200 ${
              isActive
                ? "text-accent"
                : "text-muted/60 hover:text-ink-soft"
            }`}
          >
            <span className="font-mono text-[9px] tracking-widish">
              {s.index}
            </span>
            <span
              className={`text-[11px] tracking-wide font-sans transition-opacity duration-200 ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
