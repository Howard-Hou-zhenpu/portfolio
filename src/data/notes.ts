export interface Note {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  status: "draft" | "published";
}

export const notes: Note[] = [
  {
    id: "ai-coach-not-decide",
    title: "AI should coach, not decide.",
    summary:
      "The best AI products don't make decisions for users — they help users decide better. AI's role is to surface patterns, challenge assumptions, and ask better questions.",
    tags: ["AI Product", "Decision Intelligence"],
    status: "draft",
  },
  {
    id: "vibe-coding-changed",
    title: "What vibe coding changed for me.",
    summary:
      "Vibe coding isn't just speed — it's lowering the barrier between idea and execution. With Claude Code, I went from \"I wish this existed\" to \"it's live\" in weeks. That changes what's possible for non-traditional builders.",
    tags: ["Vibe Coding", "AI Tools"],
    status: "draft",
  },
  {
    id: "ai-content-not-just-speed",
    title: "AI content production is not just about speed.",
    summary:
      "AI content workflows aren't just about producing faster — they're about producing smarter. Localization and trust-building still require human judgment. AI accelerates; humans define strategy.",
    tags: ["AI Content", "Cross-Border Growth"],
    status: "draft",
  },
  {
    id: "brand-to-ai-product",
    title: "From brand strategy to AI product thinking.",
    summary:
      "Brand strategy taught me to understand people and markets. AI product building taught me to ship fast and iterate. The combination: I know what to build, and I know how to build it.",
    tags: ["Brand Strategy", "AI Product"],
    status: "draft",
  },
];
