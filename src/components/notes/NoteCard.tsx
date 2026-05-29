import type { Note } from "../../data/notes";
import { Tag } from "../ui/Tag";

interface NoteCardProps {
  note: Note;
  index: number;
}

export function NoteCard({ note, index }: NoteCardProps) {
  const idx = String(index + 1).padStart(2, "0");
  return (
    <article className="border-t border-line pt-7 group">
      <div className="flex items-baseline justify-between mb-4">
        <span className="font-mono text-[10px] tracking-widish text-muted">
          N.{idx}
        </span>
        <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
          {note.status === "draft" ? "Note · draft" : "Note"}
        </span>
      </div>

      <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug tracking-tightish group-hover:text-accent transition-colors duration-300 max-w-[28ch]">
        {note.title}
      </h3>

      <p className="mt-5 text-[13.5px] text-ink-soft leading-relaxed">
        {note.summary}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {note.tags.map((t) => (
            <Tag key={t} variant="subtle">
              {t}
            </Tag>
          ))}
        </div>
        <span className="font-mono text-[9.5px] tracking-widish text-muted-soft uppercase italic">
          full essay — coming soon
        </span>
      </div>
    </article>
  );
}
