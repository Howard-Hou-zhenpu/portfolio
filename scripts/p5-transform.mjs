// ============================================================
// p5 sketch transform: global-mode template -> instance-mode ESM
//
// For each raw template (from the p5-animation skill) this:
//   1. fills {{name|default}} placeholders with our palette/config
//   2. wraps the body in an instance-mode factory: make<Name>(container)
//   3. injects bound aliases so bare p5 calls (random, lerp, fill...) work
//   4. rewrites mutable p5 globals (width, mouseX, drawingContext...) to $p.x
//   5. converts setup/draw/keyPressed into $p.<hook> assignments
//   6. applies per-file tweaks (transparent bg, container-driven sizing)
//
// Re-runnable and reviewable. Source of truth = *.raw.js; output = *.js.
// ============================================================
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const SKETCH_DIR = join(HERE, "..", "src", "components", "p5", "sketches");

// p5 functions callable bare -> aliased bound to the instance.
const FN_ALIASES = [
  "createCanvas", "resizeCanvas", "background", "clear", "pixelDensity",
  "random", "lerp", "constrain", "map", "dist", "color", "red", "green",
  "blue", "createVector", "createImage", "radians", "degrees", "millis",
  "fill", "noFill", "stroke", "noStroke", "strokeWeight", "strokeCap",
  "strokeJoin", "line", "ellipse", "push", "pop", "translate", "rotate",
  "scale", "beginShape", "endShape", "vertex", "image", "imageMode",
  "text", "textAlign", "textSize", "tint", "noTint",
];
// scalar math: identical to Math at default (radian) angle mode, no binding.
const MATH_ALIASES = ["sin", "cos", "tan", "sqrt", "pow", "abs", "floor", "ceil", "round", "min", "max", "atan2"];
// p5 constants captured once.
const CONST_ALIASES = {
  PI: "Math.PI", TWO_PI: "(Math.PI*2)", HALF_PI: "(Math.PI/2)",
  QUARTER_PI: "(Math.PI/4)",
  CENTER: "$p.CENTER", CORNER: "$p.CORNER", CORNERS: "$p.CORNERS",
  LEFT: "$p.LEFT", RIGHT: "$p.RIGHT", TOP: "$p.TOP", BOTTOM: "$p.BOTTOM",
  ROUND: "$p.ROUND", CLOSE: "$p.CLOSE", RADIUS: "$p.RADIUS",
};
// mutable per-frame p5 globals -> must read live off the instance.
const MUTABLE_PROPS = [
  "width", "height", "mouseX", "mouseY", "pmouseX", "pmouseY",
  "mouseIsPressed", "mouseButton", "keyCode", "frameCount", "deltaTime",
  "drawingContext",
];

function buildAliasHeader() {
  const lines = ["    // ---- p5 instance-mode aliases (auto-injected) ----"];
  for (const fn of FN_ALIASES) lines.push(`    const ${fn} = $p.${fn}.bind($p);`);
  lines.push(`    const ${MATH_ALIASES.map((m) => `${m} = Math.${m}`).join(", ")};`);
  for (const [name, val] of Object.entries(CONST_ALIASES)) lines.push(`    const ${name} = ${val};`);
  return lines.join("\n");
}

// Palette-driven placeholder values (site theme). Anything not listed
// falls back to the template's own default (the part after `|`).
const PLACEHOLDERS = {
  branch: {
    backgroundColor: "rgba(0,0,0,0)",
    branchColor: "#3D3530",           // deeper brown, elegant old plum wood
    flowerColor: "#D4A5A5",           // soft dusty pink, refined and gentle
    branchCount: "4",                 // sparse but not too empty
    branchMaxLevel: "3",              // limited splitting
    branchLeanBias: "0.4",            // lean left-upward (positive = leftward from bottom-right)
    branchGrowthSpeed: "5",
    branchStrokeWeight: "2.5",        // strong but refined branches
    flowerMaxDiameter: "20",          // delicate blooms
    flowerBloomDuration: "50",
    flowerSpawnProbability: "0.03",   // sparse, elegant accents
    swayAmplitude: "4",               // subtle movement
  },
  swallow: {
    BG_COLOR: "rgba(0,0,0,0)",
    BIRD_COLOR: "#1F1D1A",            // ink
    TAIL_COLOR: "#1F1D1A",
    FLOCK_SIZE: "7",                  // sparse — breathing room, no clutter
    BIRD_SCALE: "0.62",              // slightly bigger to read well at low count
  },
  rainCurtain: {
    CURTAIN_COLOR: "#A39B91",         // muted-soft lines
  },
};

// per-file canvas sizing + transparency strategy
const SIZING = {
  // create at container size; sketch's own size constants are patched to match
  branch: { w: "container", h: "container" },
  swallow: { w: "container", h: "container" },
  rainCurtain: { w: "container", h: "container" },
};

function fillPlaceholders(src, cfg) {
  return src.replace(/\{\{(\w+)\|?([^}]*)\}\}/g, (_m, name, def) => {
    if (cfg && Object.prototype.hasOwnProperty.call(cfg, name)) return cfg[name];
    return def;
  });
}

function stripConsole(src) {
  // drop standalone console.* statements (keep the site console clean)
  return src.replace(/^\s*console\.(log|error|warn|info)\([\s\S]*?\);\s*$/gm, "");
}

function rewriteMutableProps(src) {
  let out = src;
  for (const prop of MUTABLE_PROPS) {
    // bare identifier not preceded by `.` or word char, not followed by word char
    const re = new RegExp(`(?<![.\\w])${prop}(?![\\w])`, "g");
    out = out.replace(re, `$p.${prop}`);
  }
  return out;
}

function makeBackgroundTransparent(src) {
  // any background(...) call becomes a transparent clear
  return src.replace(/\bbackground\s*\([^;]*\)\s*;/g, "$p.clear();");
}

function patchSizing(src, file) {
  // These constants are read at module-eval time (before createCanvas), so
  // $p.width/$p.height would be 0. The container is already mounted with real
  // dimensions when the closure runs, so read from it directly.
  let out = src;
  if (file === "swallow") {
    out = out
      .replace(/const CANVAS_W\s*=\s*800;/, "const CANVAS_W = container.clientWidth;")
      .replace(/const CANVAS_H\s*=\s*800;/, "const CANVAS_H = container.clientHeight;");
  }
  if (file === "branch") {
    // grow from the bottom-RIGHT corner upward to the left, avoiding content on the left
    out = out
      .replace(/canvasWidth:\s*800,/, "canvasWidth: container.clientWidth,")
      .replace(/canvasHeight:\s*800,/, "canvasHeight: container.clientHeight,")
      .replace(/branchStartX:\s*400,/, "branchStartX: container.clientWidth - 30,")
      .replace(/branchStartY:\s*800,/, "branchStartY: container.clientHeight,");
  }
  return out;
}

const CREATE_CANVAS_RE = /createCanvas\([^)]*\)/;

function transform(file) {
  const raw = readFileSync(join(SKETCH_DIR, `${file}.raw.js`), "utf8");
  let body = raw;
  body = fillPlaceholders(body, PLACEHOLDERS[file]);
  body = stripConsole(body);  // re-enable for production
  body = makeBackgroundTransparent(body);
  body = patchSizing(body, file);
  body = rewriteMutableProps(body);

  // create canvas at container size
  body = body.replace(
    CREATE_CANVAS_RE,
    "createCanvas(container.clientWidth, container.clientHeight)"
  );

  // detect present hooks to wire onto the instance
  const hooks = ["setup", "draw"].filter((h) =>
    new RegExp(`function\\s+${h}\\s*\\(`).test(body)
  );
  const wiring = hooks.map((h) => `    $p.${h} = ${h};`).join("\n");

  // responsive: rebuild canvas + re-init on container resize
  const resize =
    "    $p.windowResized = function () {\n" +
    "      $p.resizeCanvas(container.clientWidth, container.clientHeight);\n" +
    "    };";

  const factoryName = "make" + file[0].toUpperCase() + file.slice(1);
  const out = `// AUTO-GENERATED from ${file}.raw.js by scripts/p5-transform.mjs — do not edit by hand.
// Source template: p5-animation skill (CC BY-NC 4.0, xxoogreymon).
/* eslint-disable */
export function ${factoryName}(container) {
  return function ($p) {
${buildAliasHeader()}

${body}

${wiring}
${resize}
  };
}
`;
  writeFileSync(join(SKETCH_DIR, `${file}.js`), out, "utf8");
  console.log(`✓ ${file}.js  (${out.length} bytes, hooks: ${hooks.join(", ")})`);
}

for (const f of ["branch", "swallow", "rainCurtain"]) transform(f);

