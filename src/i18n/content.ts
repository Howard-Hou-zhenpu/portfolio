// UI dictionary for the bilingual site. Keys are stable identifiers; values
// hold the EN and ZH variants. The dictionary is written by hand (no auto
// translation) and grows with the site. Project / brand / note CONTENT
// translations live next to their data in src/data/*.ts as `*Zh` fields,
// not here — this file is for navigation, button, and section labels only.

export interface DictEntry {
  en: string;
  zh: string;
}

export const content = {
  // Navigation
  "nav.path": { en: "Path", zh: "成长路径" },
  "nav.projects": { en: "Projects", zh: "项目" },
  "nav.toolkit": { en: "Toolkit", zh: "工具箱" },
  "nav.brandLab": { en: "Brand Lab", zh: "品牌实验室" },
  "nav.notes": { en: "Notes", zh: "思考笔记" },
  "nav.contact": { en: "Contact", zh: "联系我" },
  "nav.menu": { en: "Menu", zh: "菜单" },
  "nav.close": { en: "Close", zh: "关闭" },
  "nav.langToZh": { en: "中文", zh: "中文" },
  "nav.langToEn": { en: "EN", zh: "EN" },

  // Hero
  "hero.indexLabel": { en: "00 / Index", zh: "00 / 目录" },
  "hero.portfolioLabel": { en: "Portfolio", zh: "作品集" },
  "hero.viewProjects": { en: "View Projects", zh: "查看项目" },
  "hero.tryLiveDemo": { en: "Try Live Demo", zh: "体验 Demo" },
  "hero.downloadResume": { en: "View Resume", zh: "查看简历" },

  // Hero meta-card fallback fields
  "hero.metaRole": { en: "role", zh: "role" },
  "hero.metaFocus": { en: "focus", zh: "focus" },
  "hero.metaBased": { en: "based", zh: "based" },
  "hero.metaStack": { en: "stack", zh: "stack" },
  "hero.metaStatus": { en: "status", zh: "status" },

  // Path
  "path.eyebrow": { en: "The Path", zh: "成长路径" },
  "path.title": {
    en: "From understanding people to building AI products.",
    zh: "从理解人，到构建 AI 产品。",
  },
  "path.description": {
    en: "Five stages — from consumer insight and brand strategy to AI product practice and 0-to-1 building.",
    zh: "五个阶段——从消费者洞察和品牌策略出发，逐步走向 AI 产品实践与 0 到 1 搭建。",
  },
  "path.stage": { en: "Stage", zh: "Stage" },
  "path.relatedProjectArrow": { en: "↓", zh: "↓" },

  // Projects
  "projects.eyebrow": { en: "Selected Projects", zh: "精选项目" },
  "projects.title": {
    en: "Selected work in AI products, research, and growth.",
    zh: "在 AI 产品、研究与增长方向上的精选作品。",
  },
  "projects.description": {
    en: "Each project is a different angle on the same question — how do we build AI tools that fit real human needs?",
    zh: "每个项目是同一个问题的不同切面——如何构建真正贴合人类需求的 AI 工具。",
  },
  "project.role": { en: "Role", zh: "我的角色" },
  "project.businessValue": { en: "Business Value", zh: "业务价值" },
  "project.keyMetrics": { en: "Key Metrics", zh: "关键指标" },
  "project.tags": { en: "Tags", zh: "标签" },
  "project.techStack": { en: "Tech Stack", zh: "技术栈" },
  "project.methods": { en: "Methods", zh: "方法" },
  "project.workflow": { en: "Workflow", zh: "工作流" },
  "project.whatIBuilt": { en: "What I Built", zh: "我做了什么" },
  "project.whatIWorkedOn": { en: "What I Worked On", zh: "我参与的工作" },
  "project.tierPrimary": { en: "Hero Project", zh: "主项目" },
  "project.tierSecondary": { en: "Selected · 02", zh: "精选 · 02" },
  "project.tierTertiary": { en: "Selected · 03", zh: "精选 · 03" },
  "project.tierResearch": { en: "Research Highlight", zh: "研究亮点" },
  "project.tierBrand": { en: "Brand Work", zh: "品牌作品" },
  "project.tierArchive": { en: "Archive", zh: "归档" },
  "project.shippedFeature": { en: "Shipped Feature", zh: "上线功能" },
  "project.caseNote": { en: "Case Note", zh: "案例笔记" },
  "project.award": { en: "奖项", zh: "奖项" },

  // Toolkit
  "toolkit.eyebrow": { en: "AI Product Toolkit", zh: "AI 产品工具箱" },
  "toolkit.title": {
    en: "Methods and tools I use to build, research, and ship.",
    zh: "我用于构建、研究和交付的方法与工具。",
  },
  "toolkit.description": {
    en: "Not every tool needs a master — but every method needs a reason.",
    zh: "方法决定我如何理解问题，工具帮助我把想法转化为可验证的产品与结果。",
  },
  "toolkit.methodsLabel": { en: "Methods", zh: "方法" },
  "toolkit.toolsLabel": { en: "Tools", zh: "工具" },
  "toolkit.usedIn": { en: "Used in", zh: "应用于" },

  // Brand Lab
  "brand.eyebrow": { en: "Brand & Strategy Foundation", zh: "品牌与策略基础" },
  "brand.title": {
    en: "Where my brand thinking comes from.",
    zh: "品牌策略，是我理解用户与市场的起点。",
  },
  "brand.description": {
    en: "Before AI, I worked on brand strategy and consumer research. These cases shaped how I read users, markets, and culture.",
    zh: "在 AI 之前，我专注于品牌策略和消费者研究。这些案例塑造了我对用户、市场和文化的理解方式。",
  },
  "brand.leadCase": { en: "Lead Case", zh: "主案例" },
  "brand.archive": { en: "Archive", zh: "归档" },
  "brand.role": { en: "Role", zh: "我的角色" },

  // Notes
  "notes.eyebrow": { en: "Thinking Notes", zh: "思考笔记" },
  "notes.title": {
    en: "Short notes on AI products, vibe coding, and what I'm learning.",
    zh: "关于 AI 产品、Vibe Coding 与我在学习的事情的简短笔记。",
  },
  "notes.description": {
    en: "Small reflections from building, researching, and learning with AI products.",
    zh: "在 AI 产品实践、用户研究和持续学习中沉淀的一些思考。",
  },
  "notes.productNote": { en: "Product Note", zh: "产品笔记" },
  "notes.readReflection": { en: "Read reflection ↓", zh: "阅读思考 ↓" },
  "notes.collapse": { en: "Collapse ↑", zh: "收起 ↑" },

  // Contact
  "contact.eyebrow": { en: "Contact", zh: "联系我" },
  "contact.title": { en: "Let's talk.", zh: "欢迎交流。" },
  "contact.emailMe": { en: "Email me", zh: "发送邮件" },
  "contact.tryLiveDemo": { en: "Try Live Demo", zh: "体验 Demo" },
  "contact.downloadResume": { en: "View Resume", zh: "查看简历" },
  "contact.channelsLabel": { en: "Channels", zh: "联系方式" },
  "contact.educationLabel": { en: "Education", zh: "教育背景" },
  "contact.statusLabel": { en: "status", zh: "状态" },
  "contact.statusValue": { en: "open to work", zh: "正在寻找机会" },
  "contact.email": { en: "email", zh: "email" },
  "contact.github": { en: "github", zh: "github" },
  "contact.demo": { en: "demo", zh: "demo" },
  "contact.endOfPage": { en: "— end of page", zh: "— 页面尾声" },

  // Footer
  "footer.endOfPage": { en: "— end of page", zh: "— 页面尾声" },
  "footer.fineprint": {
    en: "Built with React + Tailwind. Vibe coded with Claude Code.",
    zh: "由 React 与 Tailwind 构建。与 Claude Code 协同编写。",
  },
} as const;

export type LangDict = typeof content;
