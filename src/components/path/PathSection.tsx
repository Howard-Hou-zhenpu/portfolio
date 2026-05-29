import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { path } from "../../data/path";
import { PathNode } from "./PathNode";

export function PathSection() {
  return (
    <Section id="path" bg="canvas">
      <SectionTitle
        index="01"
        eyebrow="The Path"
        title="From understanding people to building AI products."
        description="Five stages, one direction. Each step layered on the last — from market research and brand strategy, through GAI user research and global content, into AI product practice and 0-to-1 building."
      />

      <ScrollReveal>
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-y-0 md:gap-y-0 md:gap-x-6 lg:gap-x-8">
          {/* desktop horizontal connector line */}
          <div
            className="hidden md:block absolute left-0 right-0 top-[58px] h-px bg-line-soft"
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
