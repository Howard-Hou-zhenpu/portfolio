import type { BrandWork } from "../../data/brandWorks";
import { Tag } from "../ui/Tag";
import { ImageFrame } from "../ui/ImageFrame";
import { useLang, pickLang } from "../../i18n/LangContext";

interface BrandCardProps {
  work: BrandWork;
  index: number;
}

export function BrandCard({ work, index }: BrandCardProps) {
  const { lang, t } = useLang();
  const idx = String(index + 1).padStart(2, "0");
  const role = pickLang(work.role, work.roleZh, lang);
  const highlight = pickLang(work.highlight, work.highlightZh, lang);
  const cardShort = pickLang(work.cardShort, work.cardShortZh, lang);

  if (work.tier === "main") {
    return (
      <article id={`brand-${work.id}`} className="bg-card border border-line p-7 md:p-9 rounded-sm hover:shadow-card-hover transition-shadow duration-500 ease-editorial">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[10px] tracking-widish text-accent uppercase">
            {lang === "zh" ? `主案例 · ${idx}` : `Lead Case · ${idx}`}
          </span>
          <span className="h-px flex-1 bg-line-soft" />
        </div>

        {work.cover && (
          <div className="mb-8">
            <ImageFrame
              src={work.cover}
              alt={work.coverAlt ?? work.titleEn}
              variant="primary"
              ratio="16/9"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-10">
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl md:text-[1.7rem] text-ink leading-tight tracking-tightish">
              {work.titleEn}
            </h3>
            <p className="mt-1 font-serif italic text-base text-muted">
              {work.titleZh}
            </p>

            <div className="mt-6 border-l-2 border-accent pl-4 py-1">
              <div className="font-mono text-[10px] tracking-widish text-accent uppercase mb-1">
                {t("brand.role")}
              </div>
              <div className="font-serif text-[15px] text-ink leading-snug">
                {role}
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-[14px] text-ink-soft leading-relaxed">
              {cardShort}
            </p>
            <p className="mt-4 text-[13px] text-muted leading-relaxed">
              {highlight}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-2">
              {work.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article id={`brand-${work.id}`} className="border-t border-line-soft pt-6 hover:border-ink-soft transition-colors duration-300">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-mono text-[10px] tracking-widish text-muted">
          A.{idx}
        </span>
        <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
          {t("brand.archive")}
        </span>
      </div>
      <h4 className="font-serif text-lg text-ink leading-tight tracking-tightish">
        {work.titleEn}
      </h4>
      <p className="mt-1 font-serif italic text-sm text-muted">
        {work.titleZh}
      </p>
      <p className="mt-3 text-[12.5px] text-ink-soft leading-relaxed">
        {cardShort}
      </p>
      {work.award && (
        <div className="mt-3 flex items-baseline gap-2.5">
          <span className="font-mono text-[9.5px] tracking-widish text-muted uppercase shrink-0">
            {t("project.award")}
          </span>
          <span className="text-muted">·</span>
          <span className="text-[12px] text-accent leading-snug">
            {work.award}
          </span>
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-x-1.5 gap-y-1.5">
        {work.tags.map((tag) => (
          <Tag key={tag} variant="subtle">
            {tag}
          </Tag>
        ))}
      </div>
    </article>
  );
}
