import { useState } from "react";
import { siteConfig } from "../../data/siteConfig";
import { useLang } from "../../i18n/LangContext";

const navItemKeys = [
  { key: "nav.path", href: "#path" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.toolkit", href: "#toolkit" },
  { key: "nav.brandLab", href: "#brand-lab" },
  { key: "nav.notes", href: "#notes" },
  { key: "nav.contact", href: "#contact" },
] as const;

const desktopNavKeys = [
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();
  const langButtonLabel = lang === "en" ? "中文" : "EN";
  const langButtonAria =
    lang === "en" ? "Switch to Chinese" : "Switch to English";

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-line-soft">
      <div className="max-w-content mx-auto px-6 md:px-10 h-14 md:h-[3.75rem] flex items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-baseline gap-0 hover:opacity-80 transition-opacity shrink-0"
        >
          <span className="font-serif text-[15px] md:text-base text-ink tracking-tightish">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
          {desktopNavKeys.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11.5px] text-muted hover:text-accent transition-colors font-sans tracking-wide"
            >
              {t(item.key)}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={langButtonAria}
            className="font-mono text-[10.5px] tracking-widish uppercase text-muted hover:text-accent transition-colors pl-3 border-l border-ink/15"
          >
            {langButtonLabel}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={langButtonAria}
            className="font-mono text-[11px] tracking-widish uppercase text-ink-soft hover:text-accent transition-colors"
          >
            {langButtonLabel}
          </button>
          <span className="h-4 w-px bg-line" aria-hidden />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center px-2 h-9 -mr-2 text-ink-soft hover:text-accent transition-colors"
          >
            <span className="font-mono text-[11px] tracking-widish uppercase">
              {open ? t("nav.close") : t("nav.menu")}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-line-soft bg-canvas">
          <div className="max-w-content mx-auto px-6 py-2 flex flex-col">
            {navItemKeys.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[14px] text-ink-soft hover:text-accent transition-colors border-b border-line-soft last:border-b-0 font-sans"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
