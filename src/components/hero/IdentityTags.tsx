import { siteConfig } from "../../data/siteConfig";
import { useLang } from "../../i18n/LangContext";

export function IdentityTags() {
  const { lang } = useLang();
  const tags =
    lang === "zh" && siteConfig.hero.identityTagsZh.length
      ? siteConfig.hero.identityTagsZh
      : siteConfig.hero.identityTags;
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
      {tags.map((tag, i) => (
        <div key={tag} className="flex items-baseline gap-2">
          <span className="font-mono text-[10px] text-muted tracking-widish">
            0{i + 1}
          </span>
          <span className="text-[13px] md:text-sm text-ink-soft tracking-tightish font-sans">
            {tag}
          </span>
        </div>
      ))}
    </div>
  );
}
