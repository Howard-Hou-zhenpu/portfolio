import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { notes } from "../../data/notes";
import { NoteCard } from "./NoteCard";

export function NotesSection() {
  return (
    <Section id="notes" bg="canvas">
      <SectionTitle
        index="05"
        eyebrow="Thinking Notes"
        title="Short notes on AI products, vibe coding, and what I'm learning."
        description="Open drafts. The full essays are still being written — these are the seeds."
      />

      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {notes.map((note, i) => (
            <NoteCard key={note.id} note={note} index={i} />
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
