import { P5Canvas } from "./P5Canvas";
// @ts-expect-error - generated instance-mode sketch, see scripts/p5-transform.mjs
import { makeSwallow } from "./sketches/swallow.js";

/**
 * Decorative flock of swallows arcing across the hero. Transparent canvas,
 * ink-colored birds on the paper background. Nods to the "China → Global"
 * migration theme. Runs only in-viewport, desktop, motion-allowed.
 */
export function SwallowFlock({ className = "" }: { className?: string }) {
  return <P5Canvas sketch={makeSwallow} className={className} />;
}
