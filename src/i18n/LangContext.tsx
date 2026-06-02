// Lightweight bilingual (EN / ZH) context for the portfolio.
//
// On first load: reads localStorage("portfolio_lang"); if absent, defaults to
// English. The site no longer auto-switches to Chinese based on navigator
// language — instead, when navigator suggests a Chinese-speaking user but no
// preference is stored, we expose `shouldShowZhHint` so the UI can render a
// quiet inline notice offering to switch.
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
const HINT_DISMISSED_KEY = "portfolio_lang_hint_dismissed";

interface LangContextValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  toggleLang: () => void;
  /** UI string lookup. Falls back to the en value, then to the key itself. */
  t: (key: keyof LangDict) => string;
  /** True when navigator suggests Chinese, no stored preference, and the user
   *  hasn't dismissed the hint. UI may render a small inline notice. */
  shouldShowZhHint: boolean;
  /** Hide the hint and remember that decision. */
  dismissZhHint: () => void;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

function readStoredLang(): Lang | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") return stored;
  } catch {
    // ignore
  }
  return null;
}

function navigatorPrefersZh(): boolean {
  if (typeof navigator === "undefined") return false;
  const candidates: string[] = [];
  if (Array.isArray(navigator.languages)) {
    candidates.push(...navigator.languages);
  }
  if (navigator.language) candidates.push(navigator.language);
  return candidates.some((c) => c.toLowerCase().startsWith("zh"));
}

function readHintDismissed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(HINT_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

interface LangProviderProps {
  children: ReactNode;
}

export function LangProvider({ children }: LangProviderProps) {
  // Default to English when no preference is stored. Navigator-based
  // auto-switching is replaced by the hint flag below.
  const [lang, setLangState] = useState<Lang>(() => readStoredLang() ?? "en");

  const [hintVisible, setHintVisible] = useState<boolean>(() => {
    return (
      readStoredLang() === null &&
      navigatorPrefersZh() &&
      !readHintDismissed()
    );
  });

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
    // A user-visible language choice means we don't need the hint anymore.
    setHintVisible(false);
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
    setHintVisible(false);
  }, []);

  const dismissZhHint = useCallback(() => {
    setHintVisible(false);
    try {
      window.localStorage.setItem(HINT_DISMISSED_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: keyof LangDict): string => {
      const entry = content[key];
      if (!entry) return key as string;
      return entry[lang] ?? entry.en ?? (key as string);
    },
    [lang],
  );

  // Only show the hint while the user is still on English.
  const shouldShowZhHint = hintVisible && lang === "en";

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
      shouldShowZhHint,
      dismissZhHint,
    }),
    [lang, setLang, toggleLang, t, shouldShowZhHint, dismissZhHint],
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
