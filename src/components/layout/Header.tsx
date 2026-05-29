import { useState } from "react";
import { siteConfig } from "../../data/siteConfig";

const navItems = [
  { label: "Path", href: "#path" },
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Brand Lab", href: "#brand-lab" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

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
          <span
            className="hidden sm:inline-block font-mono text-[9.5px] text-muted tracking-widish uppercase ml-3 pl-3 border-l border-ink/15"
            aria-hidden
          >
            ZH
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11.5px] text-muted hover:text-accent transition-colors font-sans tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center px-2 h-9 -mr-2 text-ink-soft hover:text-accent transition-colors"
        >
          <span className="font-mono text-[11px] tracking-widish uppercase">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-line-soft bg-canvas">
          <div className="max-w-content mx-auto px-6 py-2 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[14px] text-ink-soft hover:text-accent transition-colors border-b border-line-soft last:border-b-0 font-sans"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
