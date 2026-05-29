import { siteConfig } from "../../data/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-canvas border-t border-line-soft">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-serif text-sm text-ink">
          {siteConfig.name}
          <span className="mx-2 text-line">·</span>
          <span className="font-mono text-[11px] text-muted">{year}</span>
        </div>
        <div className="text-[12px] text-muted font-sans">
          Built with React, Tailwind, and a lot of vibe coding.
        </div>
      </div>
    </footer>
  );
}
