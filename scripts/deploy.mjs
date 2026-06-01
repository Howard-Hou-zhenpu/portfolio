// Deploy the portfolio to GitHub Pages.
//
// Steps:
//   1. Rebuild dist with GITHUB_PAGES=true (so vite uses the /portfolio/ base).
//   2. Copy dist/index.html -> dist/404.html for SPA-style fallback.
//   3. Commit dist and push to the gh-pages branch.
//
// Source-side commits on `main` are intentionally NOT touched here.
// You commit those yourself when you are ready.
//
// First-time setup (only needed once, the first time you run deploy):
//   cd dist
//   git init -b gh-pages
//   git remote add origin https://github.com/Howard-Hou-zhenpu/portfolio.git
//
// Usage: `npm run deploy`

import { execSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = resolve(ROOT, "dist");
const PAGES_URL = "https://howard-hou-zhenpu.github.io/portfolio/";

function run(cmd, opts = {}) {
  const where = opts.cwd ? `   (in ${opts.cwd.replace(ROOT, ".")})` : "";
  console.log(`\n$ ${cmd}${where}`);
  execSync(cmd, { stdio: "inherit", cwd: opts.cwd ?? ROOT, env: opts.env ?? process.env });
}

function tryRun(cmd, opts = {}) {
  try {
    run(cmd, opts);
    return true;
  } catch {
    return false;
  }
}

// 1. Build with GitHub Pages base path.
console.log("Step 1/3: building with GITHUB_PAGES=true");
run("npm run build", { env: { ...process.env, GITHUB_PAGES: "true" } });

// 2. SPA fallback so deep links don't 404 on Pages.
console.log("\nStep 2/3: writing dist/404.html");
const indexPath = resolve(DIST, "index.html");
const notFoundPath = resolve(DIST, "404.html");
if (!existsSync(indexPath)) {
  console.error("✗ Build did not produce dist/index.html. Aborting.");
  process.exit(1);
}
copyFileSync(indexPath, notFoundPath);
console.log(`  copied ${indexPath} -> ${notFoundPath}`);

// 3. Commit & push the dist tree to the gh-pages branch.
console.log("\nStep 3/3: pushing dist to gh-pages");
if (!existsSync(resolve(DIST, ".git"))) {
  console.error("✗ dist/.git not found.");
  console.error("  First-time setup:");
  console.error("    cd dist");
  console.error("    git init -b gh-pages");
  console.error("    git remote add origin https://github.com/Howard-Hou-zhenpu/portfolio.git");
  process.exit(1);
}

run("git add -A", { cwd: DIST });

const stamp = new Date().toISOString().replace("T", " ").slice(0, 19);
const committed = tryRun(`git commit -m "Deploy: ${stamp}"`, { cwd: DIST });
if (!committed) {
  console.log("  (nothing new to commit — pushing existing branch state)");
}

run("git push origin gh-pages", { cwd: DIST });

console.log(`\n✓ Deployed. Live in ~30s at: ${PAGES_URL}`);
console.log("  (hard-refresh the page if you still see the old version)");
