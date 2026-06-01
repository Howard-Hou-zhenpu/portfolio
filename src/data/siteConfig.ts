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
      "我从用户需求、市场信号与复杂决策中，\n构建 AI 产品。",
    subtitle:
      "I help teams turn user needs, market signals, and product value into usable AI products, clearer positioning, and scalable growth workflows.",
    subtitleZh:
      "我希望帮助团队把用户需求、市场信号和产品价值转化为可用的 AI 产品、清晰的市场定位与可规模化的增长工作流。",
    openingLine:
      "Somewhere between user insight, market strategy, and AI product building.",
    openingLineZh:
      "介于用户洞察、市场策略与 AI 产品构建之间。",
    identityTags: [
      "AI Product Builder",
      "Global Growth Explorer",
      "Product Marketing Thinker",
    ],
    identityTagsZh: [
      "AI 产品构建者",
      "出海增长探索者",
      "产品市场思考者",
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
      "I'm looking for opportunities in AI Product, Global Growth, and Product Marketing — especially with teams turning user needs, product value, and AI capabilities into real market outcomes.",
    ctaZh:
      "我正在寻找 AI 产品、出海增长和产品市场（PMM）方向的机会，尤其希望参与把用户需求、产品价值与 AI 能力转化为真实市场结果的团队。",
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
