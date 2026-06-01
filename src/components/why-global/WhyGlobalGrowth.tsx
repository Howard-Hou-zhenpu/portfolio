import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";
import { useLang } from "../../i18n/LangContext";

export function WhyGlobalGrowth() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  const eyebrow = isZh ? "差异化叙事" : "Why I'm Drawn To It";
  const title = isZh ? "为什么我关心出海增长" : "Why Global Growth";

  const paragraph1 = isZh
    ? "我对出海增长的兴趣，不只来自跨境内容实践，也来自国际商务（出口管制方向）的学习背景。这让我在看本地化时，不只把它理解成翻译，而更关注不同市场中的用户需求、产品价值、渠道表达与规则差异。"
    : "My interest in global growth comes not only from cross-border content practice, but also from a background in international business and export control. It shaped how I think about localization, market differences, and the realities of bringing products into new contexts — not just translating content, but adapting value to users, channels, and rules.";

  const paragraph2 = isZh
    ? "我更感兴趣的是，帮助团队把产品价值、市场进入与本地化增长连接起来，让产品既可用，也更贴近具体市场。"
    : "What interests me most is helping teams connect product value, market entry, and localized growth in a way that is both usable and market-aware.";

  return (
    <Section id="why-global" bg="canvas">
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-widish text-muted uppercase mb-2">
              {eyebrow}
            </div>
            <h2 className="font-serif text-xl md:text-[1.5rem] leading-tight tracking-tightish text-ink">
              {title}
            </h2>
          </div>
          <div className="md:col-span-9 max-w-prose">
            <p className="text-[14px] text-ink-soft leading-relaxed">
              {paragraph1}
            </p>
            <p className="mt-5 text-[14px] text-ink-soft leading-relaxed">
              {paragraph2}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
