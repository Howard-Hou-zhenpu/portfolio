// Lightweight bilingual (EN / ZH) context for the portfolio.
//
// On first load: reads localStorage("portfolio_lang"); if absent, sniffs
// navigator.language(s) for "zh*" and defaults to ZH; otherwise EN.
// On user toggle: writes the new value to localStorage and updates
// document.documentElement.lang so the browser knows the active language.
//
// No external i18n library; just a Context + a tiny dictionary lookup.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type LangDict } from "./content";

export type Lang = "en" | "zh";

const STORAGE_KEY = "portfolio_lang";

interface LangContextValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  toggleLang: () => void;
  /** UI string lookup. Falls back to the en value, then to the key itself. */
  t: (key: keyof LangDict) => string;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") return stored;
  } catch {
    // ignore — fall through to navigator detection
  }

  const candidates: string[] = [];
  if (typeof navigator !== "undefined") {
    if (Array.isArray(navigator.languages)) {
      candidates.push(...navigator.languages);
    }
    if (navigator.language) candidates.push(navigator.language);
  }
  if (candidates.some((c) => c.toLowerCase().startsWith("zh"))) return "zh";
  return "en";
}

interface LangProviderProps {
  children: ReactNode;
}

export function LangProvider({ children }: LangProviderProps) {
  const [lang, setLangState] = useState<Lang>(() => detectInitialLang());

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "en" ? "zh" : "en";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const t = useCallback(
    (key: keyof LangDict): string => {
      const entry = content[key];
      if (!entry) return key as string;
      return entry[lang] ?? entry.en ?? (key as string);
    },
    [lang],
  );

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}

/** Pick between EN and ZH variants of any string field. */
export function pickLang(en: string, zh: string | undefined, lang: Lang): string {
  if (lang === "zh" && zh && zh.length > 0) return zh;
  return en;
}
