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
}

export const brandWorks: BrandWork[] = [
  {
    id: "hotan-feast",
    titleEn: "Hotan Feast: Local Culture × Brand Strategy",
    titleZh: "和田宴",
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
      "Marketing & Brand Lead for Hotan Feast — a cultural dining brand rooted in Xinjiang cuisine and tourism. Designed market research, brand positioning, STP/4P strategy, and cultural experience.",
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
  },
  {
    id: "taipo-jiafang",
    titleEn: "Taipo Jiafang: Maternal & Infant Brand Upgrade",
    titleZh: "太婆家方",
    role: "Brand Strategist",
    highlight:
      "Consumer behavior analysis, STP strategy, and 5P framework for a maternal & infant brand upgrade.",
    tags: ["Brand Strategy", "Consumer Insight", "STP/5P"],
    tier: "archive",
    cardShort:
      "Consumer behavior analysis, STP strategy, and 5P framework for a maternal & infant brand upgrade.",
  },
  {
    id: "huizifang",
    titleEn: "Huizifang: Anhui Cuisine Brand Repositioning",
    titleZh: "徽滋坊",
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
  },
];
