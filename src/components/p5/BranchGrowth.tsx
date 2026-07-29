import { P5Canvas } from "./P5Canvas";
// @ts-expect-error - generated instance-mode sketch, see scripts/p5-transform.mjs
import { makeBranch } from "./sketches/branch.js";

/**
 * A branch growing from the bottom, splitting and blooming — a quiet growth
 * metaphor for the Path (成长路径) section. Pure code, no external assets.
 */
export function BranchGrowth({ className = "" }: { className?: string }) {
  return <P5Canvas sketch={makeBranch} className={className} disableOnMobile={false} />;
}
