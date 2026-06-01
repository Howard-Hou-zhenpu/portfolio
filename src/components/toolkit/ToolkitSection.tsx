import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { methods, tools } from "../../data/toolkit";
import { ToolItem } from "./ToolItem";
import { useLang } from "../../i18n/LangContext";

export function ToolkitSection() {
  const { t, lang } = useLang();
  return (
    <Section id="toolkit" bg="canvas">
      <SectionTitle
        index="03"
        eyebrow={t("toolkit.eyebrow")}
        title={t("toolkit.title")}
        description={t("toolkit.description")}
      />

      <ScrollReveal>
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
              {lang === "zh" ? "01" : "Layer 01"}
            </span>
            <span className="font-serif italic text-base text-ink-soft">
              {t("toolkit.methodsLabel")}
            </span>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {methods.map((m, i) => (
              <ToolItem key={m.name} type="method" data={m} index={i} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div>
          <div className="flex items-baseline gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
              {lang === "zh" ? "02" : "Layer 02"}
            </span>
            <span className="font-serif italic text-base text-ink-soft">
              {t("toolkit.toolsLabel")}
            </span>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-line-soft">
            {tools.map((tool, i) => (
              <ToolItem key={tool.name} type="tool" data={tool} index={i} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
