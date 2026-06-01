import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { notes } from "../../data/notes";
import { NoteCard } from "./NoteCard";
import { useLang } from "../../i18n/LangContext";

export function NotesSection() {
  const { t } = useLang();
  return (
    <Section id="notes" bg="canvas">
      <SectionTitle
        index="05"
        eyebrow={t("notes.eyebrow")}
        title={t("notes.title")}
        description={t("notes.description")}
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
