import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { brandWorks } from "../../data/brandWorks";
import { BrandCard } from "./BrandCard";

export function BrandLabSection() {
  const main = brandWorks.filter((w) => w.tier === "main");
  const archive = brandWorks.filter((w) => w.tier === "archive");

  return (
    <Section id="brand-lab" bg="soft">
      <SectionTitle
        index="04"
        eyebrow="Brand & Strategy Foundation"
        title="The work that taught me to read users and markets."
        description="These projects aren't the main story — they're the foundation underneath it. Consumer insight, market research, and brand strategy gave me a way of thinking that I now bring into AI product work."
      />

      <div className="space-y-10">
        {main.map((work, i) => (
          <ScrollReveal key={work.id} delay={i * 60}>
            <BrandCard work={work} index={i} />
          </ScrollReveal>
        ))}
      </div>

      {archive.length > 0 && (
        <div className="mt-16 pt-10 border-t border-line">
          <div className="flex items-baseline gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
              More Strategy Works
            </span>
            <span className="font-serif italic text-sm text-muted">
              Archive
            </span>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {archive.map((work, i) => (
              <ScrollReveal key={work.id} delay={i * 60}>
                <BrandCard work={work} index={i + main.length} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
