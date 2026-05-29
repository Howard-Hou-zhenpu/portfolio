import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { methods, tools } from "../../data/toolkit";
import { ToolItem } from "./ToolItem";

export function ToolkitSection() {
  return (
    <Section id="toolkit" bg="canvas">
      <SectionTitle
        index="03"
        eyebrow="AI Product Toolkit"
        title="Methods I work with, tools I work in."
        description="Two layers. The methods are how I think; the tools are what I touch every week. They map back to the projects above."
      />

      {/* 方法层: 视觉权重高 */}
      <ScrollReveal>
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
              Layer 01
            </span>
            <span className="font-serif italic text-base text-ink-soft">
              Methods
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

      {/* 工具层: 弱化视觉,做成紧凑 index 列表 */}
      <ScrollReveal delay={120}>
        <div>
          <div className="flex items-baseline gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
              Layer 02
            </span>
            <span className="font-serif italic text-base text-ink-soft">
              Tools
            </span>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-line-soft">
            {tools.map((t, i) => (
              <ToolItem key={t.name} type="tool" data={t} index={i} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
