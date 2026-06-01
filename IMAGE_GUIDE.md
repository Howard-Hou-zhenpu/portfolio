# Image & Deploy Guide

This file is the single source of truth for adding images to the portfolio
and pushing the site to GitHub Pages.

Live site: https://howard-hou-zhenpu.github.io/portfolio/

---

## 1. Where to Put Images

All static images live under `public/`. Whatever you put under `public/` is
copied verbatim into `dist/` at build time and served at the same path on
GitHub Pages.

```
public/
  images/
    profile/                         Hero portrait
    og/                              Open Graph / social share
    notes/                           Thinking Notes board
    projects/
      yaobai-zhi/                    Yaobai Zhi
      iflytek-smart-badge/           iFLYTEK Smart Badge
      danxiansen/                    Danxiansen
      gai-research/                  GAI Research
      hotan-feast/                   Hotan Feast (data lives in brandWorks.ts)
```

Note: `hotan-feast` sits under `projects/` for historical reasons but its
data is in `src/data/brandWorks.ts`, not `projects.ts`.

---

## 2. Path Rule (very important)

In source code and data files, always write paths starting from `/images/`:

```
/images/projects/yaobai-zhi/cover.png
```

Never hard-code `/portfolio/...`.

`ImageFrame` calls `assetUrl()` from `src/lib/assetUrl.ts`, which prefixes
the path with vite's `BASE_URL` at runtime:

- local dev → `/images/...`
- GitHub Pages → `/portfolio/images/...`
- future custom root domain → `/images/...`

If you hard-code `/portfolio/...`, local dev breaks.

---

## 3. Which File to Edit

Each project's image fields live in one of these files:

- Yaobai Zhi → `src/data/projects.ts`
- iFLYTEK Smart Badge → `src/data/projects.ts`
- Danxiansen → `src/data/projects.ts`
- GAI Research → `src/data/projects.ts`
- Hotan Feast → `src/data/brandWorks.ts`
- Hero portrait → `src/data/siteConfig.ts`

The relevant fields on a project object:

```ts
cover: "/images/projects/xxx/cover.png",
coverAlt: "Short English description for accessibility & SEO",
visualType: "image",
gallery: [
  {
    src: "/images/projects/xxx/screen-a.png",
    alt: "...",
    caption: "Short caption (uppercase mono looks best)"
  }
]
```

---

## 4. Naming Conventions

Lowercase, hyphenated, English, descriptive. No spaces, no Chinese, no
uppercase.

Suggested filenames:

- `cover.png` — generic project cover
- `brand-cover.png` — brand-led project (used by hotan-feast)
- `dashboard.png` — main product screen
- `ai-analysis.png` — feature screen
- `review-center.png` — feature screen
- `personality-report.png` — feature screen
- `flow-diagram.png` — process / flow diagram
- `content-workflow.png` — workflow diagram
- `research-model.png` — research framework
- `research-system-map.svg` — system diagram
- `wordcloud.png` — word cloud
- `user-segments.png` — segmentation chart
- `localization.png` — localization sample
- `restaurant-design.png` — brand space
- `ip-characters.png` — IP / mascots

Never use spaces, Chinese, or uppercase letters in filenames. GitHub Pages
runs on Linux and is case-sensitive — `Cover.png` referenced as `cover.png`
will work locally on Windows but 404 on Pages.

---

## 5. Format & Size

Format choice:

- JPG — photos, product screenshots, brand photos, portraits. Smallest
  files, no visible loss.
- PNG — UI screenshots that need crisp text, or anything with transparency.
- SVG — diagrams, system maps, anything you author yourself. Vector, scales
  perfectly, tiny.
- WebP — most aggressive photo compression (~25% smaller than JPG), but
  awkward in macOS Preview / WeChat. Default to JPG unless you have a
  reason.

Cover sizing:

- Pixel width: 1600 px is plenty.
- File size: aim for under 300 KB, ideally under 200 KB.
- Aspect ratios actually used by `ProjectCard.tsx`:
  - Primary tier (Yaobai Zhi): 16/10
  - Secondary tier (iFLYTEK): 4/3
  - Tertiary tier (Danxiansen): 4/3
  - Research tier (GAI Research): auto + contain (full image is preserved)
  - Brand main (Hotan Feast): 16/9

Pre-rendering at the right ratio (1600×1000 / 1600×1200 / 1600×900) avoids
`object-cover` cropping anything important.

Compression tools:

- TinyPNG (https://tinypng.com) — drag-and-drop, lossless to the eye, works
  for PNG/JPG/WebP.
- SVGOMG (https://svgomg.net) — clean up SVGs.

---

## 6. GitHub Pages Subpath Pitfalls

The site is served at `/portfolio/`. A few things to avoid:

1. Always write `/images/...` in code. Never hard-code `/portfolio/...`.
   `assetUrl()` handles the prefix.
2. CSS `url(/images/...)` will not be rewritten by vite. If you really need
   an image from CSS, either use a relative path that vite can bundle
   (`url('../assets/foo.png')`), or set the image inline via `assetUrl()`
   in JSX.
3. Filenames are case-sensitive on Pages. Keep filename and code identical.
4. Adding an image does not auto-deploy. You must run `npm run deploy` (see
   below).
5. Browsers cache aggressively. After deploy, hard-refresh
   (Ctrl+Shift+R) if you still see the old image.

---

## 7. Adding a New Image — Worked Example

Goal: add a cover for Yaobai Zhi.

Step 1. Drop the file at the expected path:

```
public/images/projects/yaobai-zhi/cover.png
```

Step 2. Confirm `src/data/projects.ts` already references it:

```ts
cover: "/images/projects/yaobai-zhi/cover.png",
coverAlt: "Yaobai Zhi AI decision coach product interface",
visualType: "image",
```

Step 3. Preview locally:

```bash
cd /d/workspace/portfolio
npm run dev
```

Open http://localhost:5173 and check the project card.

Step 4. Commit the source side yourself (whenever you're ready):

```bash
git add public/images/projects/yaobai-zhi/cover.png src/data/projects.ts
git commit -m "Add Yaobai Zhi cover image"
git push origin main
```

Step 5. Deploy to Pages:

```bash
npm run deploy
```

That's it. Live in ~30 seconds.

---

## 8. Deploy Script — What `npm run deploy` Does

The script is `scripts/deploy.mjs`. It does exactly three things:

1. Runs `npm run build` with `GITHUB_PAGES=true` so vite emits the
   `/portfolio/` base path.
2. Copies `dist/index.html` to `dist/404.html` (SPA fallback so deep links
   don't 404 on Pages).
3. `git add -A`, `git commit`, `git push origin gh-pages` from inside
   `dist/`.

It deliberately does NOT touch `main`. You commit and push your source
changes manually so you stay in control of what's on `main`.

The script is plain Node (`node scripts/deploy.mjs`) so it works the same
on Windows Git Bash, PowerShell, and macOS/Linux without `cp`, `cross-env`,
or shell-specific tricks.

First-time setup (only once, already done on this machine):

```bash
cd dist
git init -b gh-pages
git remote add origin https://github.com/Howard-Hou-zhenpu/portfolio.git
```

If `dist/.git` is ever wiped, the script tells you to re-run those three
commands.

---

## 9. Full Update Workflow

Whenever you want to update the live site:

```bash
# 1. Edit code or drop new images.
# 2. Preview locally.
npm run dev

# 3. Commit source changes to main yourself.
git add <files>
git commit -m "..."
git push origin main

# 4. Deploy.
npm run deploy
```

Wait ~30 seconds, hard-refresh
https://howard-hou-zhenpu.github.io/portfolio/, done.

---

## 10. Fallback Behavior

If an image is missing or fails to load, the UI degrades gracefully:

- Project cards → editorial placeholder visual (geometric, with title/tags)
- Hero → text-based meta card
- Brand cards → text-only layout

So an unfinished image pipeline never breaks the site.

---

## 11. Content Safety Reminders

This portfolio is public. Before adding any image:

- No internal dashboards, admin panels, or proprietary UI.
- No customer data (names, phones, emails, orders, recordings).
- No unpublished designs or confidential strategy.
- For iFLYTEK and Danxiansen specifically: prefer abstract diagrams over
  real screenshots; redact anything identifying.
- For Yaobai Zhi: anonymize beta-user decision content.
- For GAI Research: aggregate visuals only; no individual respondents.
- When in doubt, mock it up or redact.
