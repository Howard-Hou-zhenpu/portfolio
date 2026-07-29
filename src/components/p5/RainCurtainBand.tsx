import { RainCurtain } from "./RainCurtain";
import { useLang } from "../../i18n/LangContext";

/**
 * Full-width interactive transition band. Sits between sections as a tactile
 * "pause" — move the mouse to sway the curtain, swipe to shake drops loose.
 * The canvas is interactive (pointer-events on), everything else decorative.
 */
export function RainCurtainBand() {
  const { lang } = useLang();
  const hint =
    lang === "zh" ? "移动鼠标撩动雨帘" : "Move your cursor to stir the rain";
  return (
    <div
      className="relative w-full h-[280px] md:h-[360px] bg-canvas-soft overflow-hidden border-y border-line-soft"
      aria-label={hint}
    >
      <RainCurtain className="absolute inset-0" />
      <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widish uppercase text-muted/70">
        {hint}
      </span>
    </div>
  );
}
