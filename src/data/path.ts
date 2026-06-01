export interface PathStage {
  stage: number;
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh: string;
  shortVersion: string;
  shortVersionZh?: string;
  relatedProjects: string[];
}

export const path: PathStage[] = [
  {
    stage: 1,
    title: "User & Market",
    description:
      "Understanding consumer behavior, market dynamics, and brand strategy.",
    descriptionZh: "从消费者洞察和品牌策略出发，理解人和市场。",
    shortVersion: "Consumer insight, market research, brand strategy.",
    relatedProjects: ["hotan-feast"],
  
    titleZh: "用户与市场",
    shortVersionZh:
      "消费者洞察、市场调研、品牌策略。",
  },
  {
    stage: 2,
    title: "GAI Research",
    description:
      "Exploring generative AI adoption, user needs, and market opportunities through mixed-method research.",
    descriptionZh:
      "通过混合方法研究理解生成式 AI 用户需求和市场机会。",
    shortVersion: "Understanding GAI users, adoption barriers, and market fit.",
    relatedProjects: ["gai-research"],
  
    titleZh: "GAI 研究",
    shortVersionZh:
      "理解 GAI 用户、采用障碍与市场契合度。",
  },
  {
    stage: 3,
    title: "AI × Global Content",
    description:
      "Building AI-assisted content workflows for cross-border e-commerce and localized growth.",
    descriptionZh: "把 AI 工具落到跨境内容生产和本地化运营中。",
    shortVersion: "AI content production, cross-border growth, localization.",
    relatedProjects: ["danxiansen"],
  
    titleZh: "AI × 全球内容",
    shortVersionZh:
      "AI 内容生产、跨境增长、本地化。",
  },
  {
    stage: 4,
    title: "AI Product Practice",
    description:
      "Participating in real-world AI product development: from customer needs to prompt design, model evaluation, and feature launch.",
    descriptionZh:
      "在真实企业 AI 产品场景中参与需求、Prompt、标注和功能上线。",
    shortVersion:
      "AI product ops, prompt engineering, model output evaluation.",
    relatedProjects: ["iflytek-smart-badge"],
  
    titleZh: "AI 产品实践",
    shortVersionZh:
      "AI 产品运营、Prompt 工程、模型输出评估。",
  },
  {
    stage: 5,
    title: "AI Product Building",
    description:
      "Building AI product MVP from 0 to 1, independently. Vibe coding in practice.",
    descriptionZh: "独立从 0 到 1 搭建 AI 产品 MVP。",
    shortVersion: "0-to-1 AI product, full-stack delivery, vibe coding.",
    relatedProjects: ["yaobai-zhi"],
  
    titleZh: "AI 产品搭建",
    shortVersionZh:
      "0 到 1 AI 产品、全栈交付、vibe coding。",
  },
];
