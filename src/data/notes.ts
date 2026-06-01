export interface Note {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  reflection: string;
  titleZh?: string;
  summaryZh?: string;
  reflectionZh?: string;
}

export const notes: Note[] = [
  {
    id: "ai-coach-not-decide",
    title: "AI should coach, not decide.",
    summary:
      "The best AI products don't make decisions for users — they help users decide better. AI's role is to surface patterns, challenge assumptions, and ask better questions.",
    tags: ["AI Product", "Decision Intelligence"],
    reflection:
      "For decision-making products, I don't think AI should replace the user's judgment. The more valuable role is to help users slow down, compare options, surface hidden assumptions, and reflect on their own patterns.\n\nThis is also why I built Yaobai Zhi as a decision coach rather than a decision machine. The product is not designed to say “choose A” or “choose B”, but to help users understand why they hesitate, what trade-offs they care about, and what personal principles may guide the decision.",
  
    titleZh: "AI 应该陪用户决策，而不是替用户决策。",
    summaryZh:
      "好的 AI 产品不替用户做决定 — 它帮用户做出更好的决定。AI 的角色是呈现规律、挑战假设、提出更好的问题。",
    reflectionZh:
      "对于决策类产品，我不认为 AI 应该取代用户的判断。更有价值的位置是帮用户慢下来、对比选项、揭示隐藏假设、反思自身的模式。\n\n这也是为什么我把摇摆志做成决策教练，而不是决策机器。产品的目的不是告诉你“选 A”或“选 B”，而是帮你理解自己为什么犹豫、在意哪些取舍、有哪些个人原则可以指引选择。",
  },
  {
    id: "vibe-coding-changed",
    title: "What vibe coding changed for me.",
    summary:
      "Vibe coding isn't just speed — it's lowering the barrier between idea and execution. With Claude Code, I went from \"I wish this existed\" to \"it's live\" in weeks. That changes what's possible for non-traditional builders.",
    tags: ["Vibe Coding", "AI Tools"],
    reflection:
      "Vibe coding changed my relationship with product building. Before, many ideas stopped at wireframes, documents, or imagination. With AI-assisted development, the distance between “I wish this existed” and “I can test this with real users” became much shorter.\n\nBut speed is not the whole point. The real value is that non-traditional builders can now participate more directly in product creation. Product judgment, user understanding, and iteration ability become even more important when execution becomes faster.",
  
    titleZh: "vibe coding 给我带来的改变。",
    summaryZh:
      "vibe coding 不只是变快 — 它降低了想法到落地之间的门槛。用 Claude Code，我从“如果有这个就好了”到“它已经上线”只用了几周。这改变了非传统开发者的可能性边界。",
    reflectionZh:
      "vibe coding 改变了我和产品建设之间的关系。以前，很多想法停在线框图、文档或想象里。借助 AI 辅助开发，“如果有这个就好了”到“我可以让真实用户来试一下”之间的距离变得很短。\n\n但快不是全部。真正的价值在于，非传统出身的构建者也能更直接地参与到产品创造中。当执行变快，产品判断、用户理解和迭代能力反而变得更重要。",
  },
  {
    id: "ai-content-not-just-speed",
    title: "AI content production is not just about speed.",
    summary:
      "AI content workflows aren't just about producing faster — they're about producing smarter. Localization and trust-building still require human judgment. AI accelerates; humans define strategy.",
    tags: ["AI Content", "Cross-Border Growth"],
    reflection:
      "In cross-border content work, AI can dramatically improve production efficiency, but speed alone does not create trust. Good content still depends on localization, product understanding, platform context, and human judgment.\n\nFor me, the important question is not “how many assets can AI produce,” but “how can AI help a small team produce more relevant, consistent, and market-aware content.” The workflow should make human strategy more scalable, not replace it.",
  
    titleZh: "AI 内容生产不只是快。",
    summaryZh:
      "AI 内容工作流不只是产得更快 — 而是产得更准。本地化和信任建设仍然依赖人的判断。AI 负责加速，人定义策略。",
    reflectionZh:
      "在跨境内容工作里，AI 可以大幅提升生产效率，但单靠速度建立不了信任。好的内容仍然依赖本地化、产品理解、平台语境与人的判断。\n\n对我来说，重要的问题不是“AI 能产出多少素材”，而是“AI 如何帮一个小团队产出更相关、更一致、更贴近市场的内容”。工作流应该让人的策略更具规模化能力，而不是替代它。",
  },
  {
    id: "brand-to-ai-product",
    title: "From brand strategy to AI product thinking.",
    summary:
      "Brand strategy taught me to understand people and markets. AI product building taught me to ship fast and iterate. The combination: I know what to build, and I know how to build it.",
    tags: ["Brand Strategy", "AI Product"],
    reflection:
      "Brand strategy trained me to start from people, context, and market signals. AI product building trained me to ship faster, test earlier, and turn fuzzy needs into working experiences.\n\nThe connection between the two is stronger than it first appears. A good AI product still needs positioning, user insight, trust-building, and clear value communication. My current direction is to combine market sensitivity with hands-on AI product execution.",
  
    titleZh: "从品牌策略到 AI 产品思维。",
    summaryZh:
      "品牌策略教会我理解人和市场。AI 产品建设教会我快速发布与迭代。两者叠加：我知道做什么，也知道怎么做。",
    reflectionZh:
      "品牌策略训练我从人、语境和市场信号出发。AI 产品建设训练我更快上线、更早测试、把模糊的需求变成可用的产品体验。\n\n这两者的连接比看起来更紧。一个好的 AI 产品依然需要定位、用户洞察、信任建设和清晰的价值表达。我目前的方向，是把市场敏感度与亲手做 AI 产品的能力结合起来。",
  },
];
