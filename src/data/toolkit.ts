export interface Method {
  name: string;
  description: string;
  descriptionZh: string;
  usedIn: string[]; // project ids
}

export interface Tool {
  name: string;
  description: string;
}

export const methods: Method[] = [
  {
    name: "Prompt Design",
    description:
      "Designing structured prompts for AI quality inspection, decision analysis, and content generation.",
    descriptionZh:
      "用于智慧工牌质检规则、摇摆志 AI 分析和内容生成场景的 Prompt 设计。",
    usedIn: ["iflytek-smart-badge", "yaobai-zhi"],
  },
  {
    name: "Model Output Evaluation",
    description:
      "Annotating and evaluating model outputs to improve accuracy and business fit.",
    descriptionZh:
      "用于大模型输出标注和效果判断，提升 AI 输出的准确性和业务适配度。",
    usedIn: ["iflytek-smart-badge"],
  },
  {
    name: "Vibe Coding",
    description:
      "Building products from 0 to 1 using natural language-driven development with AI tools.",
    descriptionZh: "用自然语言驱动开发，从 0 到 1 搭建产品原型。",
    usedIn: ["yaobai-zhi"],
  },
  {
    name: "AI-assisted Research",
    description:
      "Using AI for text mining, sentiment analysis, and user insight extraction.",
    descriptionZh: "用 AI 工具辅助文本挖掘、情感分析和用户洞察提取。",
    usedIn: ["gai-research"],
  },
  {
    name: "Global Content Workflow",
    description:
      "Designing AI-assisted content production for cross-border e-commerce.",
    descriptionZh: "为跨境电商设计 AI 辅助内容生产流程。",
    usedIn: ["danxiansen"],
  },
  {
    name: "Brand Strategy",
    description:
      "Market research, consumer insight, STP/4P strategy, and cultural brand building.",
    descriptionZh:
      "市场调研、消费者洞察、STP/4P 策略和文化品牌构建。",
    usedIn: ["hotan-feast"],
  },
];

export const tools: Tool[] = [
  {
    name: "Claude Code",
    description: "Vibe coding and rapid prototyping.",
  },
  {
    name: "ChatGPT",
    description: "Brainstorming, drafting, and research.",
  },
  {
    name: "DeepSeek",
    description: "LLM API powering decision analysis in Yaobai Zhi.",
  },
  {
    name: "Kimi",
    description: "LLM API for reflective questioning in Yaobai Zhi.",
  },
  {
    name: "Gemini",
    description: "Exploratory research and content generation.",
  },
  {
    name: "Supabase",
    description: "Backend-as-a-service for Yaobai Zhi.",
  },
  {
    name: "React",
    description: "Frontend UI for Yaobai Zhi.",
  },
  {
    name: "Cloudflare Workers",
    description: "Serverless deployment.",
  },
  {
    name: "Python",
    description: "Data collection, text mining, and analysis.",
  },
  {
    name: "SPSS",
    description: "Statistical analysis and hypothesis testing.",
  },
  {
    name: "SmartPLS",
    description: "Structural equation modeling and path analysis.",
  },
  {
    name: "Power BI",
    description: "Data visualization and reporting.",
  },
];
