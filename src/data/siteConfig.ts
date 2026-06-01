export interface SiteConfig {
  name: string;
  hero: {
    title: string;
    titleZh: string;
    subtitle: string;
    subtitleZh: string;
    openingLine: string;
    openingLineZh: string;
    identityTags: string[];
    identityTagsZh: string[];
    buttons: { text: string; textZh: string; link: string; variant: "primary" | "secondary" }[];
    visual: {
      type: "meta-card" | "image";
      image?: string;
      alt?: string;
    };
  };
  contact: {
    ctaEn: string;
    ctaZh: string;
    email: string;
    github: string | null;
    resumeLink: string | null;
    demoLink: string;
    education?: {
      master: string;
      masterZh: string;
      bachelor: string;
      bachelorZh: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Zhenpu Hou",
  hero: {
    title:
      "I build AI products from user needs, market signals, and messy decisions.",
    titleZh:
      "我从用户需求、市场信号和复杂决策中构建 AI 产品。",
    subtitle:
      "From consumer insight to AI product MVP, I explore how AI tools can turn scattered needs into structured, useful experiences.",
    subtitleZh:
      "从消费者洞察到 AI 产品 MVP，我探索如何用 AI 工具把分散的需求转化为结构化、可用的产品体验。",
    openingLine:
      "Somewhere between user insight, market strategy, and AI product building.",
    openingLineZh:
      "介于用户洞察、市场策略与 AI 产品构建之间。",
    identityTags: [
      "AI Product Builder",
      "Global Growth Explorer",
      "User Research Driven",
    ],
    identityTagsZh: [
      "AI 产品构建者",
      "出海增长探索者",
      "用户研究驱动",
    ],
    buttons: [
      { text: "View Projects", textZh: "查看项目", link: "#projects", variant: "primary" },
      {
        text: "Try Live Demo",
        textZh: "体验 Demo",
        link: "https://yaobai-zhi.zhenpu-hou.workers.dev/",
        variant: "secondary",
      },
      { text: "View Resume", textZh: "查看简历", link: "#contact", variant: "secondary" },
    ],
    visual: {
      type: "image",
      image: "/images/profile/avatar.png",
      alt: "Zhenpu Hou portrait",
    },
  },
  contact: {
    ctaEn:
      "I'm looking for opportunities in AI Product, AI Global Growth, and Product Operations. Let's talk.",
    ctaZh:
      "我正在寻找 AI 产品、AI 出海增长和产品运营方向的机会，欢迎联系。",
    email: "zhenpu_hou@foxmail.com",
    github: "https://github.com/howard-hou-zhenpu",
    resumeLink: "/resume/zhenpu-hou-resume.pdf",
    demoLink: "https://yaobai-zhi.zhenpu-hou.workers.dev/",
    education: {
      master: "Beijing Normal University · International Business, Export Control",
      masterZh: "北京师范大学 · 国际商务（出口管制方向）",
      bachelor: "Anhui University · Marketing, Consumer Behavior",
      bachelorZh: "安徽大学 · 市场营销（消费者行为方向）",
    },
  },
  seo: {
    title: "Zhenpu Hou — AI Product Builder",
    description:
      "AI Product Builder, Global Growth Explorer, User Research Driven. Building AI products from user insight and market context.",
    keywords:
      "AI Product, Vibe Coding, User Research, Global Growth, Product Operations",
  },
};
