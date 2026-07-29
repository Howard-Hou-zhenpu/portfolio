import { P5Canvas } from "./P5Canvas";
// @ts-expect-error - generated instance-mode sketch, see scripts/p5-transform.mjs
import { makeRainCurtain } from "./sketches/rainCurtain.js";

/**
 * An interactive curtain of raindrops — move the mouse to sway it, swipe fast
 * to shake drops loose. Used as a tactile transition band before the Notes
 * section. Depends on the author's CDN drop images (jsdelivr).
 */
export function RainCurtain({ className = "" }: { className?: string }) {
  return <P5Canvas sketch={makeRainCurtain} className={className} />;
}
