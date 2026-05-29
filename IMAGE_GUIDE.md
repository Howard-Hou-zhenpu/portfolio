# Image Guide

This document describes the image system for the portfolio, including directory structure, naming conventions, recommended sizes, and content guidelines.

---

## Directory Structure

```
public/
  images/
    profile/          # Personal portrait or avatar
    projects/
      yaobai-zhi/
      iflytek-smart-badge/
      danxiansen/
      gai-research/
      hotan-feast/
    notes/            # Future: Thinking Notes visuals
    og/               # Open Graph / social share images
```

Each project has its own subdirectory. Place cover images and gallery images inside the corresponding folder.

---

## Naming Conventions

Use lowercase, hyphenated names:

- `cover.png` — main project card cover
- `dashboard.png`, `ai-analysis.png`, `review-center.png` — descriptive feature names
- `flow-diagram.png`, `content-workflow.png` — abstract diagrams
- `research-model.png`, `wordcloud.png`, `user-segments.png` — research visuals

Avoid:
- Spaces in filenames
- Version numbers (`cover-v2.png`)
- Dates (`screenshot-2026-05-28.png`)

---

## Recommended Sizes

### Project Covers
- **Dimensions**: 1600 × 1000 px (16:10 ratio)
- **Format**: PNG or JPG
- **Max file size**: 500 KB (optimize with tools like TinyPNG, Squoosh)

### Gallery Images
- **Large images**: 1600 × 900 px (16:9 ratio)
- **Secondary images**: 1200 × 900 px (4:3 ratio)
- **Format**: PNG or JPG
- **Max file size**: 400 KB per image

### Brand Images
- **Dimensions**: 1200 × 900 px (4:3 ratio) or 1600 × 900 px (16:9)
- **Format**: PNG or JPG
- **Max file size**: 400 KB

### Profile / Portrait
- **Dimensions**: 1000 × 1250 px (4:5 ratio) or 1000 × 1000 px (1:1)
- **Format**: PNG or JPG
- **Max file size**: 300 KB

### OG Images (Social Share)
- **Dimensions**: 1200 × 630 px
- **Format**: PNG or JPG
- **Max file size**: 200 KB

---

## What to Include in Each Project

### 1. Yaobai Zhi / 摇摆志

**Priority: HIGH** — This is the primary project.

- `cover.png` — Product homepage or main visual (dashboard overview, hero section, or key feature)
- `dashboard.png` — Dashboard with decision overview and recent activity
- `ai-analysis.png` — AI option analysis screen or historical pattern recognition view
- `review-center.png` — Review center showing past decisions and principle extraction
- `personality-report.png` — Decision personality report

**Content guidelines:**
- Use real product screenshots
- Redact or anonymize any personal decision content from beta users
- Avoid showing sensitive personal information (names, emails, private decision details)
- If showing example decisions, use generic/demo data

---

### 2. iFLYTEK Smart Badge / 科大讯飞智慧工牌

**Priority: MEDIUM** — Secondary project, but **sensitive**.

- `flow-diagram.png` — Abstract workflow diagram showing:
  - Customer needs → Requirement analysis → Prompt & scoring rules → Model output evaluation → Feature launch → Feedback loop

**Content guidelines:**
- **DO NOT** use real internal system screenshots
- **DO NOT** include customer names, recordings, transcripts, or quality inspection data
- **DO NOT** show internal dashboards, admin panels, or proprietary UI
- **ONLY** use abstract flow diagrams, conceptual illustrations, or sanitized mockups
- If creating a diagram, use generic labels like "Sales Script Input", "AI Quality Score", "Golden Script Library"

---

### 3. Danxiansen / 蛋鲜森

**Priority: MEDIUM** — Tertiary project, **sensitive**.

- `content-workflow.png` — AI content production workflow diagram:
  - Topic breakdown → Selling point extraction → AI-generated copy & visuals → Human review → Platform adaptation → A/B testing
- `localization.png` — HK/Macau localization examples (public or redacted samples only)

**Content guidelines:**
- **DO NOT** use backend screenshots, order data, customer information, or unpublished materials
- **DO NOT** show internal tools, dashboards, or proprietary workflows
- **ONLY** use:
  - Abstract workflow diagrams
  - Public-facing content samples (e.g., published social media posts with customer info redacted)
  - Mockups or sanitized examples
- If showing localization examples, redact brand names, customer names, and any identifying information

---

### 4. GAI User Research

**Priority: MEDIUM** — Research highlight.

- `research-model.png` — Research framework, SEM model, or conceptual diagram
- `wordcloud.png` — Word cloud from text mining (10,000+ comments)
- `user-segments.png` — User segmentation chart (5 core + 4 potential segments)

**Content guidelines:**
- Use charts, diagrams, and visualizations from the research report
- Redact any personally identifiable information from survey or interview data
- Ensure visualizations are clear and readable at web resolution
- If showing survey results, use aggregate data only (no individual responses)

---

### 5. Hotan Feast / 和田宴

**Priority: MEDIUM** — Brand Lab lead case.

- `brand-cover.png` — Brand visual, restaurant exterior, or key brand element
- `restaurant-design.png` — Interior design, dining experience, or cultural elements
- `ip-characters.png` — IP characters or brand mascots

**Content guidelines:**
- Use brand visuals, restaurant photos, or design mockups
- Ensure you have permission to use any photos (especially if taken by others)
- If showing customer-facing materials, ensure they are public or approved for portfolio use

---

## What NOT to Include

**Never include:**

1. **Internal system screenshots** — Backend dashboards, admin panels, internal tools
2. **Customer data** — Names, phone numbers, emails, addresses, order details
3. **Proprietary information** — Trade secrets, internal metrics, confidential strategies
4. **Recordings or transcripts** — Sales calls, service recordings, customer conversations
5. **Unpublished materials** — Draft designs, internal documents, unreleased features
6. **Personal information** — Other people's decision logs, beta user data, private messages
7. **Sensitive business data** — Revenue, profit margins, customer acquisition costs (unless public)

**When in doubt:**
- Use abstract diagrams instead of real screenshots
- Redact identifying information
- Create mockups or sanitized examples
- Ask for permission before using any materials

---

## First Batch: Top 5 Images to Prepare

If you can only prepare **5 images** right now, prioritize these:

1. **`/images/projects/yaobai-zhi/cover.png`** — Yaobai Zhi product homepage or dashboard
2. **`/images/projects/yaobai-zhi/ai-analysis.png`** — AI option analysis or historical pattern view
3. **`/images/projects/yaobai-zhi/review-center.png`** — Review center showing past decisions
4. **`/images/projects/gai-research/research-model.png`** — Research framework or SEM model
5. **`/images/projects/hotan-feast/brand-cover.png`** — Hotan Feast brand visual or restaurant photo

**Why these 5?**
- Yaobai Zhi is the primary project and needs the most visual support
- GAI Research and Hotan Feast are the next most important cases
- iFLYTEK and Danxiansen can use abstract diagrams (lower priority for real images)

---

## How to Add Images

1. **Place images in the correct directory** (e.g., `public/images/projects/yaobai-zhi/cover.png`)
2. **Verify the path matches the data** — Check `src/data/projects.ts` or `src/data/brandWorks.ts` to ensure the `cover` field points to the correct path
3. **Test locally** — Run `npm run dev` and verify images load correctly
4. **Optimize file size** — Use TinyPNG, Squoosh, or ImageOptim to compress images before adding them
5. **Commit and push** — Add images to git and push to your repository

---

## Fallback Behavior

If an image is missing or fails to load:
- **Project cards** — Fall back to the editorial placeholder (geometric design with project title and tags)
- **Hero** — Falls back to the meta card (text-based info card)
- **Brand cards** — Falls back to text-only layout

This ensures the site remains functional and visually coherent even without images.

---

## Future Enhancements

- **OG images** — Add social share images for better link previews
- **Profile portrait** — Add a personal photo to the Hero section
- **Notes visuals** — Add cover images for Thinking Notes entries
- **Project detail pages** — Use the `gallery` field to show multiple images per project

---

## Questions?

If you're unsure whether an image is safe to use, err on the side of caution:
- Use abstract diagrams instead of real screenshots
- Redact identifying information
- Create mockups or sanitized examples
- Ask for permission before using any materials

**Remember:** This portfolio is public. Only include images you're comfortable sharing with potential employers, colleagues, and the broader internet.
