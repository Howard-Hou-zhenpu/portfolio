import { useState } from "react";
import type { Note } from "../../data/notes";
import { Tag } from "../ui/Tag";
import { useLang, pickLang } from "../../i18n/LangContext";

interface NoteCardProps {
  note: Note;
  index: number;
}

export function NoteCard({ note, index }: NoteCardProps) {
  const { lang, t } = useLang();
  const idx = String(index + 1).padStart(2, "0");
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const title = pickLang(note.title, note.titleZh, lang);
  const summary = pickLang(note.summary, note.summaryZh, lang);
  const reflection = pickLang(note.reflection, note.reflectionZh, lang);
  const reflectionParagraphs = reflection
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  const showReflection = expanded || hovered;

  return (
    <article
      className="border-t border-line pt-7 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-baseline justify-between mb-4">
        <span className="font-mono text-[10px] tracking-widish text-muted">
          N.{idx}
        </span>
        <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
          {t("notes.productNote")}
        </span>
      </div>

      <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug tracking-tightish group-hover:text-accent transition-colors duration-300 max-w-[28ch]">
        {title}
      </h3>

      <p className="mt-5 text-[13.5px] text-ink-soft leading-relaxed">
        {summary}
      </p>

      <div
        id={`reflection-${note.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showReflection
            ? "max-h-[800px] opacity-100 mt-5 pt-5 border-t border-line-soft"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-3">
          {reflectionParagraphs.map((para, i) => (
            <p
              key={i}
              className="text-[13.5px] text-ink-soft/90 leading-relaxed max-w-prose"
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {note.tags.map((tag) => (
            <Tag key={tag} variant="subtle">
              {tag}
            </Tag>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={showReflection}
          aria-controls={`reflection-${note.id}`}
          className="lg:hidden font-mono text-[10px] tracking-widish text-ink-soft hover:text-accent transition-colors uppercase border-b border-line hover:border-accent pb-0.5"
        >
          {expanded ? t("notes.collapse") : t("notes.readReflection")}
        </button>
      </div>
    </article>
  );
}
