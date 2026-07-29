import { SwallowFlock } from "./SwallowFlock";
import { useLang } from "../../i18n/LangContext";

/**
 * Full-width interactive band. A flock of swallows drifts continuously
 * (boids-style flocking); moving the cursor into the band startles them —
 * they scatter away and regroup once it leaves. Interactive (pointer-events
 * on); the hint label is decorative.
 */
export function SwallowBand() {
  const { lang } = useLang();
  const hint =
    lang === "zh" ? "移动鼠标惊起飞燕" : "Move your cursor to startle the swallows";
  return (
    <div
      className="relative w-full h-[300px] md:h-[380px] bg-canvas overflow-hidden border-y border-line-soft"
      aria-label={hint}
    >
      <SwallowFlock className="absolute inset-0" />
      <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widish uppercase text-muted/70">
        {hint}
      </span>
    </div>
  );
}
