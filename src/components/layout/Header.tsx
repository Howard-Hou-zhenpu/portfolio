import { useEffect, useRef, useState } from "react";
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

const indexItems = [
  { key: "nav.path", href: "#path", index: "01" },
  { key: "nav.projects", href: "#projects", index: "02" },
  { key: "nav.toolkit", href: "#toolkit", index: "03" },
  { key: "nav.brandLab", href: "#brand-lab", index: "04" },
  { key: "nav.notes", href: "#notes", index: "05" },
  { key: "nav.contact", href: "#contact", index: "06" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const indexRef = useRef<HTMLDivElement>(null);
  const { lang, toggleLang, t } = useLang();
  const langButtonLabel = lang === "en" ? "中文" : "EN";
  const langButtonAria =
    lang === "en" ? "Switch to Chinese" : "Switch to English";
  const indexLabel = lang === "zh" ? "目录" : "Sections";

  useEffect(() => {
    if (!indexOpen) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIndexOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [indexOpen]);

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-line-soft">
      <div className="max-w-content mx-auto px-6 md:px-10 flex h-16 items-center justify-between">
        <a
          href="#top"
          className="inline-flex items-center hover:opacity-80 transition-opacity shrink-0"
        >
          <span className="font-serif text-[15px] md:text-base leading-none text-ink tracking-tightish">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {desktopNavKeys.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center h-8 text-[11.5px] leading-none text-muted hover:text-accent transition-colors font-sans tracking-wide"
            >
              {t(item.key)}
            </a>
          ))}

          <div
            className="relative inline-flex items-center"
            ref={indexRef}
            onMouseEnter={() => setIndexOpen(true)}
            onMouseLeave={() => setIndexOpen(false)}
            onFocus={() => setIndexOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setIndexOpen(false);
              }
            }}
          >
            <button
              type="button"
              onClick={() => setIndexOpen((v) => !v)}
              aria-expanded={indexOpen}
              aria-haspopup="menu"
              className="inline-flex items-center h-8 text-[11.5px] leading-none text-muted hover:text-accent transition-colors font-sans tracking-wide"
            >
              {indexLabel}
            </button>
            {indexOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full pt-2 min-w-[172px]"
              >
                <div className="border border-line-soft bg-canvas/95 backdrop-blur-md rounded-sm shadow-sm py-1.5">
                  {indexItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setIndexOpen(false)}
                      className="flex items-baseline gap-3 px-4 py-2 text-[12px] text-ink-soft hover:text-accent hover:bg-canvas-soft/50 transition-colors font-sans"
                    >
                      <span className="font-mono text-[10px] tracking-widish text-muted">
                        {item.index}
                      </span>
                      <span className="leading-none">{t(item.key)}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <span className="w-px h-4 bg-ink/10" aria-hidden />

          <button
            type="button"
            onClick={toggleLang}
            aria-label={langButtonAria}
            className="inline-flex items-center h-8 font-mono text-[10.5px] leading-none tracking-widish uppercase text-muted hover:text-accent transition-colors"
          >
            {langButtonLabel}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={langButtonAria}
            className="inline-flex items-center h-9 font-mono text-[11px] tracking-widish uppercase text-ink-soft hover:text-accent transition-colors"
          >
            {langButtonLabel}
          </button>
          <span className="h-4 w-px bg-line" aria-hidden />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center h-9 px-2 -mr-2 text-ink-soft hover:text-accent transition-colors"
          >
            <span className="font-mono text-[11px] leading-none tracking-widish uppercase">
              {open ? t("nav.close") : t("nav.menu")}
            </span>
          </button>
        </div>
      </div>

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
