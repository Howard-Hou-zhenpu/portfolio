import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { path } from "../../data/path";
import { PathNode } from "./PathNode";
import { useLang } from "../../i18n/LangContext";

export function PathSection() {
  const { t } = useLang();
  return (
    <Section id="path" bg="canvas">
      <SectionTitle
        index="01"
        eyebrow={t("path.eyebrow")}
        title={t("path.title")}
        description={t("path.description")}
      />

      <ScrollReveal>
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-y-0 md:gap-y-0 md:gap-x-6 lg:gap-x-8">
          <div
            className="hidden md:block absolute left-0 right-0 top-[7px] h-px bg-line-soft"
            aria-hidden
          />

          {path.map((stage) => (
            <PathNode key={stage.stage} stage={stage} />
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
