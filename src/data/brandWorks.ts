export interface BrandGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface BrandWork {
  id: string;
  titleEn: string;
  titleZh: string;
  role: string;
  highlight: string;
  tags: string[];
  tier: "main" | "archive";
  cardShort: string;
  cover?: string | null;
  coverAlt?: string;
  gallery?: BrandGalleryItem[];
  visualType?: "image" | "placeholder" | "diagram";
  award?: string;
  roleZh?: string;
  highlightZh?: string;
  cardShortZh?: string;
}

export const brandWorks: BrandWork[] = [
  {
    id: "hotan-feast",
    titleEn: "Hotan Feast: Local Culture × Brand Strategy",
    titleZh: "和田宴：地方文化 × 品牌策略",
    role: "Marketing & Brand Lead",
    highlight:
      "Full brand strategy from market research to integrated marketing plan, connecting Xinjiang cuisine with cultural tourism.",
    tags: [
      "Brand Strategy",
      "Local Culture",
      "Consumer Insight",
      "STP/4P",
    ],
    tier: "main",
    cardShort:
      "Marketing & Brand Lead for Hotan Feast — a cultural dining brand rooted in Xinjiang cuisine and tourism. Designed market research, brand positioning, STP/4P strategy, cultural experience, and integrated marketing planning.",
    cover: "/images/projects/hotan-feast/brand-cover.png",
    coverAlt: "Hotan Feast local culture dining brand visual",
    visualType: "image",
    gallery: [
      {
        src: "/images/projects/hotan-feast/restaurant-design.png",
        alt: "Hotan Feast restaurant interior and brand experience design",
        caption: "Restaurant design and brand experience",
      },
      {
        src: "/images/projects/hotan-feast/ip-characters.png",
        alt: "Hotan Feast IP characters",
        caption: "IP characters",
      },
    ],
  
    roleZh: "市场与品牌负责人",
    highlightZh:
      "完整的品牌策略，从市场调研到整合营销方案，把新疆美食与文化旅游连起来。",
    cardShortZh:
      "和田宴 — 一个根植于新疆美食与文旅的文化餐饮品牌，担任市场与品牌负责人。完成市场调研、品牌定位、STP/4P 策略、文化体验设计与整合营销传播方案。",
  },
  {
    id: "taipo-jiafang",
    titleEn: "Taipo Jiafang: Maternal & Infant Brand Upgrade",
    titleZh: "太婆家方：母婴品牌升级",
    role: "Brand Strategist",
    highlight:
      "Consumer behavior analysis, STP strategy, and 5P framework for a maternal & infant brand upgrade.",
    tags: ["Brand Strategy", "Consumer Insight", "STP/5P"],
    tier: "archive",
    cardShort:
      "Consumer behavior analysis, STP strategy, and 5P framework for a maternal & infant brand upgrade.",
    award: "2024 商业精英挑战赛品牌策划竞赛 · 全国二等奖",
  
    roleZh: "品牌策略师",
    highlightZh:
      "面向母婴品牌升级的消费者行为分析、STP 策略与 5P 框架。",
    cardShortZh:
      "面向母婴品牌升级的消费者行为分析、STP 策略与 5P 框架。",
  },
  {
    id: "huizifang",
    titleEn: "Huizifang: Anhui Cuisine Brand Repositioning",
    titleZh: "徽滋坊：徽菜品牌重定位",
    role: "Brand Strategist",
    highlight:
      "Brand resonance model, cultural storytelling, and experiential marketing for an Anhui cuisine brand.",
    tags: [
      "Brand Strategy",
      "Cultural Narrative",
      "Experiential Marketing",
    ],
    tier: "archive",
    cardShort:
      "Brand resonance model, cultural storytelling, and experiential marketing for an Anhui cuisine brand.",
    award: "2025 商业精英挑战赛品牌策划竞赛 · 全国二等奖",
  
    roleZh: "品牌策略师",
    highlightZh:
      "为徽菜品牌打造的品牌共鸣模型、文化叙事与体验式营销。",
    cardShortZh:
      "为徽菜品牌打造的品牌共鸣模型、文化叙事与体验式营销。",
  },
];
