// Quiet inline notice shown to users whose browser language suggests Chinese
// when the site is currently defaulting to English. Two actions: switch
// language (handled by the lang context) or dismiss (remembered in
// localStorage so it never re-appears).

import { useLang } from "../../i18n/LangContext";

export function LangHint() {
  const { shouldShowZhHint, setLang, dismissZhHint } = useLang();

  if (!shouldShowZhHint) return null;

  return (
    <div className="bg-canvas-soft/80 border-b border-line-soft">
      <div className="max-w-content mx-auto px-6 md:px-10 py-2.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="text-[12px] text-ink-soft leading-relaxed">
          Prefer Chinese? This portfolio is also available in 中文.
        </p>
        <div className="flex items-center gap-5 shrink-0">
          <button
            type="button"
            onClick={() => setLang("zh")}
            className="text-[11.5px] tracking-wide text-ink hover:text-accent transition-colors font-sans border-b border-ink-soft hover:border-accent pb-0.5"
          >
            Switch to 中文
          </button>
          <button
            type="button"
            onClick={dismissZhHint}
            className="font-mono text-[10.5px] tracking-widish uppercase text-muted hover:text-ink-soft transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
