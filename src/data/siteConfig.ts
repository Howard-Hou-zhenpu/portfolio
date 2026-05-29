export interface SiteConfig {
  name: string;
  hero: {
    title: string;
    subtitle: string;
    openingLine: string;
    identityTags: string[];
    buttons: { text: string; link: string; variant: "primary" | "secondary" }[];
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
    linkedin: string | null;
    resumeLink: string | null;
    demoLink: string;
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
    subtitle:
      "From consumer insight to AI product MVP, I explore how AI tools can turn scattered needs into structured, useful experiences.",
    openingLine:
      "Somewhere between user insight, market strategy, and AI product building.",
    identityTags: [
      "AI Product Builder",
      "Global Growth Explorer",
      "User Research Driven",
    ],
    buttons: [
      { text: "View Projects", link: "#projects", variant: "primary" },
      {
        text: "Try Live Demo",
        link: "https://yaobai-zhi.zhenpu-hou.workers.dev/",
        variant: "secondary",
      },
      { text: "Download Resume", link: "#contact", variant: "secondary" },
    ],
    visual: {
      type: "meta-card",
      // To switch to a portrait image later:
      // type: "image",
      // image: "/images/profile/portrait.jpg",
      // alt: "Zhenpu Hou portrait",
    },
  },
  contact: {
    ctaEn:
      "I'm looking for opportunities in AI Product, AI Global Growth, and Product Operations. Let's talk.",
    ctaZh: "正在寻找 AI 产品、AI 出海、产品运营方向的机会。欢迎交流。",
    email: "zhenpu_hou@foxmail.com",
    github: null,
    linkedin: null,
    resumeLink: null,
    demoLink: "https://yaobai-zhi.zhenpu-hou.workers.dev/",
  },
  seo: {
    title: "Zhenpu Hou — AI Product Builder",
    description:
      "AI Product Builder, Global Growth Explorer, User Research Driven. Building AI products from user insight and market context.",
    keywords:
      "AI Product, Vibe Coding, User Research, Global Growth, Product Operations",
  },
};
