export interface Method {
  name: string;
  nameZh?: string;
  description: string;
  descriptionZh: string;
  usedIn: string[]; // project ids
  usedInZh?: string[];
}

export interface Tool {
  name: string;
  description: string;
  descriptionZh?: string;
}

export const methods: Method[] = [
  {
    name: "Prompt Design",
    nameZh: "Prompt 设计",
    description:
      "Designing structured prompts for AI quality inspection, decision analysis, and content generation.",
    descriptionZh:
      "用于智慧工牌质检规则、摇摆志 AI 分析和内容生成场景的 Prompt 设计。",
    usedIn: ["iflytek-smart-badge", "yaobai-zhi"],
    usedInZh: ["智慧工牌", "摇摆志"],
  },
  {
    name: "Model Output Evaluation",
    nameZh: "模型输出评估",
    description:
      "Annotating and evaluating model outputs to improve accuracy and business fit.",
    descriptionZh:
      "用于大模型输出标注和效果判断，提升 AI 输出的准确性和业务适配度。",
    usedIn: ["iflytek-smart-badge"],
    usedInZh: ["智慧工牌"],
  },
  {
    name: "Vibe Coding",
    nameZh: "Vibe Coding",
    description:
      "Building products from 0 to 1 using natural language-driven development with AI tools.",
    descriptionZh: "用自然语言驱动开发，从 0 到 1 搭建产品原型。",
    usedIn: ["yaobai-zhi"],
    usedInZh: ["摇摆志"],
  },
  {
    name: "AI-assisted Research",
    nameZh: "AI 辅助研究",
    description:
      "Using AI for text mining, sentiment analysis, and user insight extraction.",
    descriptionZh: "用 AI 工具辅助文本挖掘、情感分析和用户洞察提取。",
    usedIn: ["gai-research"],
    usedInZh: ["GAI 用户研究"],
  },
  {
    name: "Global Content Workflow",
    nameZh: "出海内容工作流",
    description:
      "Designing AI-assisted content production for cross-border e-commerce.",
    descriptionZh: "为跨境电商设计 AI 辅助内容生产流程。",
    usedIn: ["danxiansen"],
    usedInZh: ["蛋鲜森"],
  },
  {
    name: "Product Positioning & GTM",
    nameZh: "产品定位与 GTM",
    description:
      "Market research, consumer insight, product narrative, launch positioning, and go-to-market thinking.",
    descriptionZh:
      "市场研究、消费者洞察、产品价值表达、上市定位与进入市场策略。",
    usedIn: ["hotan-feast"],
    usedInZh: ["和田宴"],
  },
];

export const tools: Tool[] = [
  {
    name: "Claude Code",
    description: "Vibe coding and rapid prototyping.",
    descriptionZh: "Vibe coding 与快速原型开发。",
  },
  {
    name: "ChatGPT",
    description: "Brainstorming, drafting, and research.",
    descriptionZh: "头脑风暴、起草与研究。",
  },
  {
    name: "DeepSeek",
    description: "LLM API powering decision analysis in Yaobai Zhi.",
    descriptionZh: "为摇摆志的决策分析提供大模型 API。",
  },
  {
    name: "Kimi",
    description: "LLM API for reflective questioning in Yaobai Zhi.",
    descriptionZh: "为摇摆志的反思提问提供大模型 API。",
  },
  {
    name: "Gemini",
    description: "Exploratory research and content generation.",
    descriptionZh: "探索性研究与内容生成。",
  },
  {
    name: "Supabase",
    description: "Backend-as-a-service for Yaobai Zhi.",
    descriptionZh: "摇摆志的后端即服务方案。",
  },
  {
    name: "React",
    description: "Frontend UI for Yaobai Zhi.",
    descriptionZh: "摇摆志的前端 UI 框架。",
  },
  {
    name: "Cloudflare Workers",
    description: "Serverless deployment.",
    descriptionZh: "无服务器部署。",
  },
  {
    name: "Python",
    description: "Data collection, text mining, and analysis.",
    descriptionZh: "数据采集、文本挖掘与分析。",
  },
  {
    name: "SPSS",
    description: "Statistical analysis and hypothesis testing.",
    descriptionZh: "统计分析与假设检验。",
  },
  {
    name: "SmartPLS",
    description: "Structural equation modeling and path analysis.",
    descriptionZh: "结构方程建模与路径分析。",
  },
  {
    name: "Power BI",
    description: "Data visualization and reporting.",
    descriptionZh: "数据可视化与报告。",
  },
];
