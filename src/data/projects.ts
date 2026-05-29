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
      "80 decision records",
      "20 beta users",
      "3 iterations shipped",
    ],
    tags: ["AI Product", "Vibe Coding", "0-to-1 MVP", "Decision Intelligence"],
    techStack: [
      "Claude Code",
      "React",
      "Supabase",
      "Cloudflare Workers",
      "DeepSeek API",
      "Kimi API",
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
  },
  {
    id: "danxiansen",
    titleEn: "Danxiansen: AI Content × Cross-Border Growth",
    titleZh: "蛋鲜森 AI 内容生产与跨境增长",
    subtitle:
      "Cross-border e-commerce internship. AI-assisted content workflow and localized growth.",
    story:
      "I built an AI content workflow that cut single-platform material production from 4h to 30min, producing 500+ assets per month and supporting simultaneous content updates for 3 brands. Participated in HK/Macau localization, A/B testing, and trust-building initiatives.",
    role:
      "Cross-border operations assistant — workflow design, content production, localization, growth.",
    highlightsLabel: "Workflow",
    highlights: [
      "Topic breakdown and selling point extraction",
      "AI-generated copywriting and visual drafts",
      "Manual review and platform compliance adaptation",
      "Localized content optimization for HK/Macau markets",
      "A/B testing and trust-building (traceability QR codes, origin stories)",
    ],
    metrics: [
      "4h → 30min per cycle",
      "500+ assets / month",
      "3 brands supported",
      "5% sales lift",
      "15% QR scan rate",
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
    cover: "/images/projects/danxiansen/content-workflow.png",
    coverAlt:
      "AI-assisted content production workflow for cross-border e-commerce",
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
      "Joined Danxiansen as operations assistant for HK/Macau e-commerce platforms. Challenge: high-frequency, multi-brand content that couldn't scale manually.\n\nI designed an AI workflow covering topic breakdown, selling point extraction, AI-generated copy and visuals, manual review, and platform compliance. Reduced production time from 4h to 30min, enabling 500+ assets/month across 3 brands.\n\nBeyond speed, I focused on localization — adapting tone, cultural references, and trust signals for HK/Macau audiences. Ran A/B tests on content formats. Contributed to trust-building via traceability QR codes linking to origin stories, achieving 15% scan rate and 5% monthly sales increase.",
  },
  {
    id: "gai-research",
    titleEn: "GAI User Research: Adoption, Needs & Market Opportunities",
    titleZh: "GAI 用户研究",
    subtitle:
      "National First Prize. Mixed-method research on generative AI adoption.",
    story:
      "What drives or hinders young users' adoption of GAI tools? This research won the National First Prize in the National Market Research and Analysis Competition by combining text mining, surveys, interviews, and structural equation modeling to map user segments and adoption drivers.",
    role:
      "Lead researcher — research design, data collection, analysis, report writing.",
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
      "This research project won the National First Prize in the National Market Research and Analysis Competition. Goal: understand young users' GAI adoption drivers, barriers, and market opportunities.\n\nMixed-method approach: collected 10,000+ comments via Python, conducted text mining and sentiment analysis with ROSTCM6, surveyed 532 users, interviewed 15 participants. Used SPSS and SmartPLS for reliability/validity tests, path analysis, and structural equation modeling.\n\nIdentified 5 core user segments (early adopters, productivity seekers, creative explorers, cautious learners, passive observers) and 4 potential segments. Key findings: trust is critical, value proposition is unclear to many, high-demand scenarios are content creation, learning, and decision support. Developed STP + 4P market expansion strategy. 30,000-word report.",
  },
];
