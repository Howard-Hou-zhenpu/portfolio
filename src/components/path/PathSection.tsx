import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { path } from "../../data/path";
import { PathNode } from "./PathNode";
import { useLang } from "../../i18n/LangContext";
import { BranchGrowth } from "../p5/BranchGrowth";

export function PathSection() {
  const { t } = useLang();
  return (
    <Section id="path" bg="canvas" className="relative overflow-hidden">
      {/* Decorative branch growing up from the base, spanning the whole
          section as a growth motif. Hidden on small screens by P5Canvas. */}
      <BranchGrowth className="pointer-events-none absolute inset-0 z-0 opacity-60" />

      <div className="relative z-10">
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
      </div>
    </Section>
  );
}
