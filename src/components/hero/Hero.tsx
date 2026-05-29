import { siteConfig } from "../../data/siteConfig";
import { IdentityTags } from "./IdentityTags";
import { ImageFrame } from "../ui/ImageFrame";

export function Hero() {
  const { hero } = siteConfig;

  // 右侧信息卡字段。删除年龄/出生年份信息,密度调低
  const cardFields: { key: string; value: string; accent?: boolean }[] = [
    { key: "role", value: "AI Product Builder" },
    { key: "focus", value: "AI Product · Global Growth" },
    { key: "based", value: "China → Global" },
    { key: "stack", value: "Vibe Coding · Research" },
    { key: "status", value: "Open to Work", accent: true },
  ];

  return (
    <section
      id="top"
      className="bg-canvas px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-32"
    >
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[11px] tracking-widish text-muted">
              00 / Index
            </span>
            <span className="h-px flex-1 max-w-[80px] bg-line" />
            <span className="font-mono text-[11px] tracking-widish text-muted uppercase">
              Portfolio
            </span>
          </div>

          <p className="font-sans text-[13px] md:text-sm text-muted tracking-tightish mb-6 max-w-prose leading-relaxed">
            {hero.openingLine}
          </p>

          <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tightish text-ink max-w-[18ch]">
            {hero.title}
          </h1>

          <p className="mt-8 text-base md:text-lg text-ink-soft leading-relaxed max-w-prose">
            {hero.subtitle}
          </p>

          <IdentityTags />

          {/* 按钮: 全部克制为细边框 / 文字链接,不再像 SaaS CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
            {hero.buttons.map((btn, i) => (
              <a
                key={btn.text}
                href={btn.link}
                target={btn.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  btn.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={
                  i === 0
                    ? "group inline-flex items-center gap-2 border border-ink-soft text-ink hover:border-ink hover:bg-ink hover:text-canvas transition-colors duration-300 px-5 py-2.5 text-[12px] tracking-widish uppercase font-sans rounded-sm"
                    : "group inline-flex items-center gap-2 text-[12px] tracking-widish uppercase text-ink-soft hover:text-accent transition-colors font-sans pb-1 border-b border-line hover:border-accent"
                }
              >
                <span>{btn.text}</span>
                <span className="transition-transform group-hover:translate-x-0.5 text-muted group-hover:text-current">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right-side visual: meta card (default) or portrait image */}
        <div className="lg:col-span-4 hidden lg:block">
          {hero.visual.type === "image" && hero.visual.image ? (
            <ImageFrame
              src={hero.visual.image}
              alt={hero.visual.alt ?? "Zhenpu Hou"}
              variant="primary"
              ratio="4/5"
              hover={false}
            />
          ) : (
            <div className="border border-line rounded-sm p-7 bg-canvas-soft/40 relative">
              <div className="flex items-center justify-between mb-7">
                <span className="font-mono text-[10px] tracking-widish text-muted">
                  FIG. 00
                </span>
                <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
                  ZH / CN
                </span>
              </div>

              <div className="space-y-5 text-[13px] font-mono text-ink-soft leading-relaxed">
                {cardFields.map((f) => (
                  <div
                    key={f.key}
                    className="flex items-baseline justify-between gap-6"
                  >
                    <span className="text-muted">{f.key}</span>
                    <span
                      className={
                        f.accent ? "text-accent" : "text-ink-soft text-right"
                      }
                    >
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-line-soft font-serif italic text-[13px] text-ink-soft leading-relaxed">
                "Understanding people is the first product skill."
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
