export type ProjectTier =
  | "primary"
  | "secondary"
  | "tertiary"
  | "research"
  | "brand"
  | "archive";

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  titleEn: string;
  titleZh: string;
  subtitle: string;
  story: string;
  role: string;
  highlights: string[];
  highlightsLabel: string;
  metrics: string[];
  tags: string[];
  techStack: string[];
  image: string | null;
  link: string | null;
  linkLabel?: string;
  tier: ProjectTier;
  cardShort: string;
  detailLong: string;
  featureHighlight?: { label: string; text: string };
  cover?: string | null;
  coverAlt?: string;
  gallery?: ProjectGalleryItem[];
  visualType?: "image" | "placeholder" | "diagram";
  award?: string;
  businessValue?: string;
  businessValueZh?: string;
  subtitleZh?: string;
  storyZh?: string;
  roleZh?: string;
  highlightsLabelZh?: string;
  highlightsZh?: string[];
  metricsZh?: string[];
  cardShortZh?: string;
  detailLongZh?: string;
  featureHighlightZh?: { label: string; text: string };
}

export const projects: Project[] = [
  {
    id: "yaobai-zhi",
    titleEn: "Yaobai Zhi: AI Decision Coach",
    titleZh: "摇摆志 AI 决策教练",
    subtitle: "Personal AI product MVP. Built from 0 to 1, independently.",
    story:
      "I built Yaobai Zhi to help myself and friends make better decisions. It supports quick logging, deep analysis, AI option comparison, historical pattern recognition, reflective questioning, decision personality reports, and personal principle accumulation. Deployed live, with 80 personal records, 20 beta users, and 3 iterations.",
    role:
      "Solo builder — product design, prompt engineering, full-stack development, deployment.",
    businessValue:
      "Validated an AI coaching MVP for complex personal decisions through real usage records, early testers, and iterative feedback.",
    businessValueZh:
      "通过真实决策记录、早期测试用户和持续反馈，验证了一个面向复杂个人决策场景的 AI coaching 产品原型。",
    highlightsLabel: "What I Built",
    highlights: [
      "Quick decision logging and deep decision mode",
      "AI option analysis with DeepSeek and Kimi API",
      "Historical decision pattern recognition",
      "Reflective questioning system",
      "Decision personality report",
      "Review center and personal principle library",
      "Deployed on Cloudflare Workers with Supabase backend",
    ],
    metrics: [
      "80+ decision logs from personal use and early testing",
      "20+ early testers from friends, classmates, and extended networks",
      "3 iterations based on feedback and usage friction",
    ],
    tags: ["AI Product", "Vibe Coding", "0-to-1 MVP", "Decision Intelligence"],
    techStack: [
      "Claude Code",
      "React",
      "Supabase",
      "Cloudflare Workers",
      "DeepSeek API",
      "Kimi API",
      "LocalStorage",
      "IndexedDB",
    ],
    image: null,
    link: "https://yaobai-zhi.zhenpu-hou.workers.dev/",
    linkLabel: "Try Live Demo",
    tier: "primary",
    cover: "/images/projects/yaobai-zhi/cover.png",
    coverAlt: "Yaobai Zhi AI decision coach product interface",
    visualType: "image",
    gallery: [
      {
        src: "/images/projects/yaobai-zhi/dashboard.png",
        alt: "Yaobai Zhi dashboard with decision overview",
        caption: "Dashboard — decision overview and recent activity",
      },
      {
        src: "/images/projects/yaobai-zhi/ai-analysis.png",
        alt: "AI option analysis and historical pattern view",
        caption: "AI option analysis with historical pattern recognition",
      },
      {
        src: "/images/projects/yaobai-zhi/review-center.png",
        alt: "Review center for past decisions",
        caption: "Review center — revisit past decisions, extract principles",
      },
      {
        src: "/images/projects/yaobai-zhi/personality-report.png",
        alt: "Decision personality report",
        caption: "Decision personality report",
      },
    ],
    cardShort:
      "Personal AI decision coach. Built from 0 to 1 with vibe coding. 80 records, 20 users, 3 iterations.",
    detailLong:
      "Yaobai Zhi is a personal AI product I built to help people make better decisions. The idea came from my own struggle with decision-making — I wanted a tool that could log choices, surface patterns, challenge assumptions, and help build a personal decision framework over time.\n\nI designed and built it independently using vibe coding with Claude Code. Two modes: quick logging for everyday decisions, deep mode for complex choices. The AI engine uses DeepSeek and Kimi APIs to compare options, surface trade-offs, and ask reflective questions.\n\nThe historical pattern recognition system connects current decisions to past ones. The decision personality report gives users a snapshot of their style. The review center lets users revisit past decisions and extract principles.\n\nDeployed on Cloudflare Workers with Supabase backend. 80 decisions logged, 20 friends invited, 3 iterations shipped based on feedback.",
  
    subtitleZh: "个人 AI 产品 MVP，0 到 1 独立搭建。",
    storyZh:
      "我做摇摆志，是为了帮自己和身边的朋友把决策做得更好。它支持快速记录、深度分析、AI 选项对比、历史模式识别、反思提问、决策人格报告和个人原则沉淀。已上线，累计 80 条个人决策记录、20 位种子用户、3 次产品迭代。",
    roleZh:
      "独立开发者 — 产品设计、Prompt 工程、全栈开发、部署上线。",
    highlightsLabelZh: "我做了什么",
    highlightsZh: [
      "快速决策记录与深度决策模式",
      "基于 DeepSeek 与 Kimi API 的 AI 选项分析",
      "历史决策模式识别",
      "反思提问系统",
      "决策人格报告",
      "复盘中心与个人原则库",
      "Cloudflare Workers 部署，Supabase 作为后端",
    ],
    metricsZh: [
      "80+ 条决策记录，来自个人长期使用与早期测试",
      "20+ 位早期测试者，来自朋友、同学与扩展人脉",
      "3 次基于反馈与使用阻力的产品迭代",
    ],
    cardShortZh:
      "个人 AI 决策教练，用 vibe coding 从 0 到 1 搭建。80 条记录，20 位用户，3 次迭代。",
    detailLongZh:
      "摇摆志是我做的一款个人 AI 产品，希望帮人把决策做得更好。灵感来自我自己面对选择时的纠结 — 我想要一个能记录选择、呈现规律、挑战假设、并随时间沉淀个人决策框架的工具。\n\n我用 Claude Code，以 vibe coding 的方式独立完成设计与开发。两种模式：日常决策的快速记录，和复杂选择的深度模式。AI 引擎调用 DeepSeek 与 Kimi API，用于对比选项、揭示取舍、抛出反思问题。\n\n历史模式识别系统会把当前决策与过往决策连起来。决策人格报告给用户一份关于自身风格的速写。复盘中心让用户回看过去的决策、提炼出原则。\n\n部署在 Cloudflare Workers，后端使用 Supabase。已记录 80 条决策、邀请 20 位朋友试用、根据反馈完成 3 次迭代。",
  },
  {
    id: "iflytek-smart-badge",
    titleEn: "iFLYTEK Smart Badge: AI Marketing Product",
    titleZh: "科大讯飞智慧工牌",
    subtitle:
      "AI product internship. Real-world AI product ops for automotive sales teams.",
    story:
      "I joined iFLYTEK's Consumer BG AI Marketing team as an AI Product Assistant, working on Smart Badge for frontline automotive sales teams. Participated in the full product cycle: customer needs analysis, prompt design for quality inspection, model output annotation, and the launch of the 'Golden Script' feature.",
    role:
      "AI Product Assistant — customer needs analysis, prompt engineering, model output evaluation, feature design.",
    businessValue:
      "Helped turn top-performing sales recordings into reusable scripts while supporting AI quality inspection and service improvement.",
    businessValueZh:
      "支持销售团队将优秀录音中的经验沉淀为可复用话术，并辅助 AI 质检与服务质量提升。",
    highlightsLabel: "What I Worked On",
    highlights: [
      "Customer needs interviews and requirement documentation",
      "Quality inspection rule design and prompt engineering",
      "Large model output annotation and evaluation",
      "AI scoring optimization for sales scripts and service quality",
      "'Golden Script' feature — auto-extracting reusable scripts from top recordings",
    ],
    metrics: [
      "Full product cycle",
      "Prompt engineering",
      "Model evaluation",
    ],
    tags: [
      "AI Product Ops",
      "Prompt Engineering",
      "Model Evaluation",
      "B2B AI Product",
    ],
    techStack: [
      "Prompt Engineering",
      "Model Output Evaluation",
      "AI Product Ops",
    ],
    image: null,
    link: null,
    tier: "secondary",
    cover: "/images/projects/iflytek-smart-badge/flow-diagram.png",
    coverAlt:
      "Abstract workflow diagram for AI smart badge product process",
    visualType: "diagram",
    gallery: [],
    featureHighlight: {
      label: "Shipped Feature",
      text: "Golden Script — auto-extracts reusable scripts from top-performing sales and service recordings into a searchable team library.",
    },
    cardShort:
      "AI product internship at iFLYTEK. Designed prompts, evaluated model outputs, launched 'Golden Script' for automotive sales teams.",
    detailLong:
      "I joined iFLYTEK's Consumer BG AI Marketing team as an AI Product Assistant, working on Smart Badge — an AI-powered tool for frontline automotive sales and service teams. The product covers performance tracking, customer profiling, sales quality inspection, and script accumulation.\n\nMy role covered the full cycle. I conducted customer needs interviews, organized requirements, and designed feature workflows. Major focus: sales quality inspection — designing evaluation rules, writing prompts for inspection scenarios, annotating model outputs to improve accuracy.\n\nThe key challenge was ensuring AI scoring matched real business needs. I iterated on prompts and criteria to make outputs accurate and actionable. I also contributed to 'Golden Script,' which auto-extracts reusable sales scripts from top-performing recordings into a searchable library.\n\nThis taught me how AI products work in enterprise settings: aligning model outputs with business logic, iterative prompt design, and balancing automation with human judgment.",
  
    subtitleZh: "AI 产品实习。面向汽车销售一线团队的真实 AI 产品运营。",
    storyZh:
      "我加入科大讯飞消费者 BG AI 营销团队担任 AI 产品助理，负责面向汽车销售一线的智慧工牌产品。参与了完整的产品周期：客户需求分析、质检 Prompt 设计、模型输出标注，以及“金牌话术”功能的上线。",
    roleZh:
      "AI 产品助理 — 客户需求分析、Prompt 工程、模型输出评估、功能设计。",
    highlightsLabelZh: "我参与的工作",
    highlightsZh: [
      "客户需求访谈与需求文档整理",
      "质检规则设计与 Prompt 工程",
      "大模型输出标注与评估",
      "销售话术与服务质检的 AI 评分优化",
      "“金牌话术”功能 — 从优秀录音中自动提取可复用话术",
    ],
    metricsZh: [
      "完整产品周期",
      "Prompt 工程",
      "模型评估",
    ],
    featureHighlightZh: {
      label: "上线功能",
      text: "金牌话术 — 从优秀的销售与服务录音中自动抽取可复用话术，沉淀到团队可检索的话术库。",
    },
    cardShortZh:
      "在科大讯飞做 AI 产品实习。设计 Prompt、评估模型输出，参与“金牌话术”功能上线，服务汽车销售一线团队。",
    detailLongZh:
      "我加入科大讯飞消费者 BG AI 营销团队担任 AI 产品助理，负责智慧工牌 — 一款面向汽车销售与服务一线团队的 AI 工具。产品覆盖业绩跟进、客户画像、销售质检与话术沉淀。\n\n我的工作覆盖完整的产品周期。我做客户需求访谈、整理需求、设计功能流程。重点放在销售质检 — 设计评估规则、为质检场景写 Prompt、对模型输出做标注，以提升准确性。\n\n核心挑战是让 AI 评分契合真实业务需求。我反复打磨 Prompt 与判定标准，让输出既准确又能落到行动上。我也参与了“金牌话术” — 从优秀录音中自动抽取可复用话术，沉淀到团队可检索的话术库。\n\n这段经历让我看到 AI 产品在企业场景里的真实运转方式：让模型输出与业务逻辑对齐、Prompt 的迭代式设计，以及自动化与人工判断之间的取舍。",
  },
  {
    id: "danxiansen",
    titleEn: "Danxiansen: AI Content × Cross-Border Growth",
    titleZh: "蛋鲜森 AI 内容生产与跨境增长",
    subtitle:
      "Cross-border e-commerce internship. AI-assisted content workflow and localized growth.",
    story:
      "I built an AI content workflow that cut single-platform material production from 4h to 30min, producing 500+ assets per month and supporting simultaneous content updates for 3 brands. Focused on HK/Macau localization, A/B testing, and content optimization for cross-border growth.",
    role:
      "Cross-border operations assistant — workflow design, content production, localization, growth.",
    businessValue:
      "Reduced content production time from 4 hours to 30 minutes and supported scalable cross-border content operations across multiple brands.",
    businessValueZh:
      "将单次内容生产从 4 小时压缩到 30 分钟，支持多个品牌的跨境内容规模化生产。",
    highlightsLabel: "Workflow",
    highlights: [
      "Topic breakdown and selling point extraction",
      "AI-generated copywriting and visual drafts",
      "Manual review and platform compliance adaptation",
      "Localized content optimization for HK/Macau markets",
      "A/B testing on content formats and conversion paths",
    ],
    metrics: [
      "4h → 30min per cycle",
      "500+ assets / month",
      "3 brands supported",
      "Sales performance improved by around 5% during the optimization period",
    ],
    tags: [
      "AI Content Workflow",
      "Cross-Border Growth",
      "Localization",
      "E-commerce Ops",
    ],
    techStack: [
      "AI Content Workflow",
      "Global Growth",
      "Localization",
    ],
    image: null,
    link: null,
    tier: "tertiary",
    cover: "/images/projects/danxiansen/content-workflow.svg",
    coverAlt:
      "AI 内容生产与跨境增长工作流 — 商品输入、AI 内容生成、本地化适配、内容落地四步",
    visualType: "diagram",
    gallery: [
      {
        src: "/images/projects/danxiansen/localization.png",
        alt: "HK/Macau localization examples",
        caption: "HK/Macau localization — public/redacted samples only",
      },
    ],
    cardShort:
      "AI content workflow for cross-border e-commerce. Cut production from 4h to 30min. 500+ assets/month, 3 brands, 5% sales lift.",
    detailLong:
      "Joined Danxiansen as operations assistant for HK/Macau e-commerce platforms. Challenge: high-frequency, multi-brand content that couldn't scale manually.\n\nI designed an AI workflow covering topic breakdown, selling point extraction, AI-generated copy and visuals, manual review, and platform compliance. Reduced production time from 4h to 30min, enabling 500+ assets/month across 3 brands.\n\nBeyond speed, I focused on localization — adapting tone, cultural references, and trust signals for HK/Macau audiences. Ran A/B tests on content formats and conversion paths, optimizing detail-page copy and localized selling points. Contributed 5% monthly sales lift across the supported brands.\n\nA secondary trust-building track involved traceability QR codes linking to product origin stories — a small piece of the broader brand-trust effort, separate from the AI content workflow itself.",
  
    subtitleZh: "跨境电商实习。AI 内容生产工作流与本地化增长。",
    storyZh:
      "我搭建了一套 AI 内容生产工作流，把单平台素材生产从 4h 压缩到 30min，月产 500+ 素材，同时支持 3 个品牌的内容更新。聚焦港澳本地化、A/B 测试与跨境增长内容优化。",
    roleZh:
      "跨境运营助理 — 工作流设计、内容生产、本地化、增长。",
    highlightsLabelZh: "工作流",
    highlightsZh: [
      "选题拆解与卖点提取",
      "AI 文案与视觉初稿生成",
      "人工审核与平台合规适配",
      "面向港澳市场的本地化内容优化",
      "针对内容形式与转化路径的 A/B 测试",
    ],
    metricsZh: [
      "4h → 30min 单次生产",
      "500+ 素材 / 月",
      "3 个品牌支持",
      "优化周期内相关产品销售表现提升约 5%",
    ],
    cardShortZh:
      "面向跨境电商的 AI 内容生产工作流，将单次内容生产从 4 小时压缩到 30 分钟，支持 3 个品牌，月产 500+ 素材，并带来 5% 销量提升。",
    detailLongZh:
      "在蛋鲜森担任港澳电商平台运营助理。挑战很明确：高频、多品牌的内容产出，靠人工无法规模化。\n\n我设计了一套 AI 工作流，覆盖选题拆解、卖点提取、AI 文案与视觉生成、人工审核与平台合规。把生产时间从 4h 压缩到 30min，月产 500+ 素材覆盖 3 个品牌。\n\n速度之外，我更看重本地化 — 调整语调、文化指代和信任要素，贴近港澳受众。围绕内容形式和转化路径做 A/B 测试，优化详情页文案与本地化卖点，在所支持的品牌中带来 5% 的月度销量提升。\n\n另一条信任建设的支线是溯源二维码，连接产品的产地故事 — 这是更宏观的品牌信任工作中的一小块，与 AI 内容工作流本身相互独立。",
  },
  {
    id: "gai-research",
    titleEn: "GAI User Research: Adoption, Needs & Market Opportunities",
    titleZh: "GAI 用户研究",
    subtitle:
      "Mixed-method research on generative AI adoption.",
    award:
      "第14届全国市场调查与分析大赛 · 全国一等奖",
    story:
      "What drives or hinders young users' adoption of GAI tools? This research won the National First Prize in the National Market Research and Analysis Competition by combining text mining, surveys, interviews, and structural equation modeling to map user segments and adoption drivers.",
    role:
      "Lead researcher — research design, data collection, analysis, report writing.",
    businessValue:
      "Identified GAI user segments, adoption drivers, and market opportunities to inform product positioning and market strategy.",
    businessValueZh:
      "识别 GAI 用户分群、采用驱动因素和潜在市场机会，为产品定位与市场策略提供依据。",
    highlightsLabel: "Methods",
    highlights: [
      "Python-based collection of 10,000+ user comments",
      "Text mining and sentiment analysis with ROSTCM6",
      "Survey of 532 valid responses",
      "15 in-depth user interviews",
      "SPSS + SmartPLS for reliability, validity, path analysis, SEM",
    ],
    metrics: [
      "10,000+ comments",
      "532 surveys",
      "15 interviews",
      "5 core + 4 potential segments",
      "National First Prize",
    ],
    tags: [
      "User Research",
      "GAI Adoption",
      "Text Mining",
      "Market Strategy",
      "Mixed Methods",
    ],
    techStack: ["Python", "ROSTCM6", "SPSS", "SmartPLS"],
    image: null,
    link: null,
    tier: "research",
    cover: "/images/projects/gai-research/research-model.png",
    coverAlt:
      "Research model and user segmentation for GAI adoption study",
    visualType: "image",
    gallery: [
      {
        src: "/images/projects/gai-research/wordcloud.png",
        alt: "Word cloud from text mining of GAI user comments",
        caption: "Text mining — word cloud (10,000+ comments)",
      },
      {
        src: "/images/projects/gai-research/user-segments.png",
        alt: "GAI user segmentation chart",
        caption: "5 core + 4 potential user segments",
      },
    ],
    cardShort:
      "National First Prize. 10,000+ comments, 532 surveys, 15 interviews. Identified GAI user segments, adoption barriers, and market opportunities.",
    detailLong:
      "This research project won the National First Prize in the National Market Research and Analysis Competition. Goal: understand young users' GAI adoption drivers, barriers, and market opportunities.\n\nMixed-method approach: collected 10,000+ comments via Python, conducted text mining and sentiment analysis with ROSTCM6, surveyed 532 users, interviewed 15 participants. Used SPSS and SmartPLS for reliability/validity tests, path analysis, and structural equation modeling.\n\nIdentified 5 core user segments (early adopters, productivity seekers, creative explorers, cautious learners, passive observers) and 4 potential segments. Key findings: trust is critical, value proposition is unclear to many, high-demand scenarios are content creation, learning, and decision support. Developed STP + 4P market expansion strategy. 30,000-word report.\n\nThe research later informed iFLYTEK Spark brand strategy and seeding creative proposals, earning two National Third Prizes in the College Advertising Art Festival.",
  
    subtitleZh: "面向生成式 AI 用户采用行为的混合方法研究。",
    storyZh:
      "什么在推动或阻碍年轻用户使用 GAI 工具？这项研究获得全国市场调查与分析大赛全国一等奖，结合文本挖掘、问卷、访谈与结构方程模型，绘制用户分群与采用驱动因素地图。",
    roleZh:
      "项目负责人 — 研究设计、数据采集、分析、报告撰写。",
    highlightsLabelZh: "方法",
    highlightsZh: [
      "用 Python 采集 10,000+ 用户评论",
      "用 ROSTCM6 做文本挖掘与情感分析",
      "532 份有效问卷",
      "15 位用户深度访谈",
      "用 SPSS + SmartPLS 完成信效度、路径分析与 SEM",
    ],
    metricsZh: [
      "10,000+ 用户评论",
      "532 份问卷",
      "15 位访谈",
      "5 个核心 + 4 个潜在分群",
      "全国一等奖",
    ],
    cardShortZh:
      "全国一等奖。10,000+ 评论、532 份问卷、15 位访谈。识别 GAI 用户分群、采用障碍与市场机会。",
    detailLongZh:
      "这项研究获得全国市场调查与分析大赛全国一等奖。目标是理解年轻用户使用 GAI 的驱动因素、阻碍与市场机会。\n\n采用混合方法：用 Python 抓取 10,000+ 评论，用 ROSTCM6 做文本挖掘与情感分析，发放 532 份问卷，完成 15 位深度访谈。用 SPSS 与 SmartPLS 完成信效度检验、路径分析和结构方程建模。\n\n识别出 5 个核心用户分群（早期采用者、效率诉求者、创意探索者、谨慎学习者、被动观望者）和 4 个潜在分群。关键发现：信任是核心、价值主张对很多人仍不清晰、高需求场景集中在内容创作、学习与决策支持。基于 STP + 4P 提出市场拓展策略。完成 3 万字研究报告。\n\n这份研究后来支持了科大讯飞星火品牌策略与种草创意提案，获得大学生广告艺术节全国三等奖两项。",
  },
];
