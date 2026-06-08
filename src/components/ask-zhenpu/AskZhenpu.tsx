import { useState } from "react";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";
import { useLang } from "../../i18n/LangContext";

// All bilingual copy for the Ask Zhenpu section lives here. Edit text by
// changing the matching field on either `en` or `zh`. The two arrays must
// stay the same length and same order (the selected index is used to pair
// a question with its answer when the language is switched).

interface QA {
  question: string;
  answer: string;
}

interface AskContent {
  sectionEyebrow: string;
  sectionTitle: string;
  subtitle: string;
  defaultMessage: string;
  pickPrompt: string;
  assistantTag: string;
  qa: QA[];
}

const askContent: { en: AskContent; zh: AskContent } = {
  en: {
    sectionEyebrow: "Ask Zhenpu",
    sectionTitle: "Ask Zhenpu",
    subtitle:
      "Not sure where to start? Ask about my projects, AI product experience, growth work, research background, or internship direction.",
    defaultMessage:
      "Hi, I'm a small interactive layer of Zhenpu's portfolio. I can help you quickly understand his projects, AI product experience, growth work, research background, and career direction.",
    pickPrompt: "Pick a question",
    assistantTag: "Portfolio Assistant",
    qa: [
      {
        question: "What roles are you looking for?",
        answer:
          "I'm looking for internship opportunities in AI Product, Product Operations, Product Marketing, GTM, and Growth. I'm especially interested in teams that turn AI capabilities into real user value, clear product positioning, and scalable workflows.",
      },
      {
        question: "Why AI Product?",
        answer:
          "My path started from marketing, consumer research, and brand strategy, where I learned to understand people, markets, and product value. Later, through AI product practice, GAI user research, and building Yaobai Zhi, I became more interested in turning user needs into working AI product experiences. For me, AI product is where user insight, product judgment, and fast execution meet.",
      },
      {
        question: "What is Yaobai Zhi?",
        answer:
          "Yaobai Zhi is an AI decision coach MVP I built independently. It helps users record decisions, compare options, receive reflective questions, recognize historical decision patterns, and accumulate personal decision principles. I built it with AI-assisted development, React, Supabase, Cloudflare Workers, DeepSeek API, and Kimi API. It has 80+ decision logs, 20+ early testers, and 3 iterations.",
      },
      {
        question: "What did you do at iFLYTEK?",
        answer:
          "At iFLYTEK, I worked on Smart Badge, an AI marketing product for frontline automotive sales teams. I participated in customer needs analysis, requirement documentation, prompt design for AI quality inspection, model output annotation, AI scoring optimization, and the launch of the Golden Script feature.",
      },
      {
        question: "How do you combine marketing and AI product thinking?",
        answer:
          "Marketing trained me to read users, contexts, and market signals. AI product building trained me to ship faster, test earlier, and turn fuzzy needs into working experiences. I see them as connected: good AI products still need user insight, positioning, trust-building, and clear value communication.",
      },
      {
        question: "What makes you different?",
        answer:
          "I'm not only a marketing student who understands users and markets, and not only a builder who can ship prototypes. My strength is connecting both sides: I can research user needs, define product value, design AI workflows, and build or iterate product MVPs with AI-assisted tools.",
      },
      {
        question: "Are you available for internship?",
        answer:
          "I'm open to internship opportunities in Beijing, especially in AI Product, Product Operations, Product Marketing, GTM, and Growth. I can discuss start date, weekly availability, and internship length based on the role and team needs.",
      },
    ],
  },
  zh: {
    sectionEyebrow: "Ask Zhenpu",
    sectionTitle: "Ask Zhenpu｜和我的作品集对话",
    subtitle:
      "不知道从哪里开始看？你可以快速了解我的项目、AI 产品经历、增长实践、研究背景和实习方向。",
    defaultMessage:
      "你好，我是这个作品集里的一个轻量交互层。你可以通过几个问题，快速了解振埔的项目经历、AI 产品实践、增长工作、用户研究背景和职业方向。",
    pickPrompt: "选一个问题开始",
    assistantTag: "作品集助手",
    qa: [
      {
        question: "你在寻找什么方向的机会？",
        answer:
          "我正在寻找 AI 产品、产品运营、产品市场、GTM 和增长相关的实习机会。尤其关注那些能够把 AI 能力转化为真实用户价值、清晰产品定位和可规模化工作流的团队。",
      },
      {
        question: "为什么选择 AI 产品方向？",
        answer:
          "我的路径最早从市场营销、消费者研究和品牌策略开始，这让我学会从用户、市场和产品价值出发理解问题。后来通过 AI 产品实习、生成式 AI 用户研究，以及独立搭建「摇摆志」AI 决策教练 MVP，我逐渐对“如何把用户需求转化为真实可用的 AI 产品体验”更感兴趣。对我来说，AI 产品是用户洞察、产品判断和快速执行交汇的地方。",
      },
      {
        question: "「摇摆志」是什么？",
        answer:
          "「摇摆志」是我独立搭建的 AI 决策教练 MVP，面向职业发展、学习规划、生活消费等“难选择、难追踪、难复盘”的决策场景。它支持决策记录、AI 选项分析、反思追问、历史模式识别和个人原则沉淀。我借助 AI-assisted development 完成产品设计、前端开发、数据库配置和部署，技术栈包括 React、Supabase、Cloudflare Workers、DeepSeek API 和 Kimi API。目前项目累计 80+ 条决策记录，邀请 20+ 位早期用户体验，并完成 3 版迭代。",
      },
      {
        question: "你在科大讯飞做了什么？",
        answer:
          "我在科大讯飞参与过「智慧工牌」相关 AI 营销产品工作，产品主要面向汽车门店一线销售场景。我参与了客户需求分析、需求文档整理、AI 质检 Prompt 设计、模型输出标注、AI 评分优化，以及「金牌话术」功能上线支持。这个经历让我更理解 B 端 AI 产品从业务需求到功能落地的过程。",
      },
      {
        question: "你怎么结合市场和 AI 产品思维？",
        answer:
          "市场和品牌经历训练我理解用户、场景和市场信号；AI 产品实践训练我更快地搭建、测试和迭代产品。我认为两者并不冲突：好的 AI 产品依然需要用户洞察、定位表达、信任建立和清晰的价值传递。我的优势正是在用户理解、产品设计和增长表达之间建立连接。",
      },
      {
        question: "你和普通市场营销学生有什么不同？",
        answer:
          "我不只是一个理解用户和市场的商科学生，也不只是一个能借助 AI 工具做原型的人。我的优势在于能连接两端：既能做用户研究、市场分析和产品价值定义，也能用 AI 工具设计工作流、搭建 MVP，并基于真实反馈持续迭代。",
      },
      {
        question: "你现在可以实习吗？",
        answer:
          "我目前开放北京方向的实习机会，重点关注 AI 产品、产品运营、产品市场、GTM 和增长相关岗位。具体入职时间、每周投入天数和实习周期，可以根据岗位和团队需求进一步沟通。",
      },
    ],
  },
};

export function AskZhenpu() {
  const { lang } = useLang();
  const c = askContent[lang];
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const activeAnswer =
    selectedIdx !== null && c.qa[selectedIdx]
      ? c.qa[selectedIdx].answer
      : c.defaultMessage;
  const isDefault = selectedIdx === null;

  return (
    <Section id="ask-zhenpu" bg="soft">
      <ScrollReveal>
        <div className="mb-10 md:mb-12">
          <div className="font-mono text-[10px] tracking-widish text-accent uppercase mb-3">
            {c.sectionEyebrow}
          </div>
          <h2 className="font-serif text-2xl md:text-[1.75rem] text-ink leading-tight tracking-tightish max-w-[28ch]">
            {c.sectionTitle}
          </h2>
          <p className="mt-4 text-[13.5px] text-ink-soft leading-relaxed max-w-prose">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left column — question list */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] tracking-widish text-muted uppercase mb-3">
              {c.pickPrompt}
            </div>
            <div className="flex flex-col gap-2">
              {c.qa.map((item, i) => {
                const isActive = selectedIdx === i;
                const idx = String(i + 1).padStart(2, "0");
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedIdx(i)}
                    aria-pressed={isActive}
                    className={`text-left flex items-start gap-3 px-4 py-3 rounded-sm border transition-colors duration-200 ${
                      isActive
                        ? "bg-ink text-canvas border-ink"
                        : "bg-card text-ink-soft border-line-soft hover:border-ink-soft hover:bg-canvas"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] tracking-widish shrink-0 mt-0.5 ${
                        isActive ? "text-canvas/60" : "text-muted"
                      }`}
                    >
                      Q.{idx}
                    </span>
                    <span className="text-[13px] leading-relaxed">
                      {item.question}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right column — chat-style answer */}
          <div className="lg:col-span-7">
            <div className="border border-line bg-card rounded-sm p-6 md:p-8 min-h-[280px] flex flex-col">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-line-soft">
                <div className="w-8 h-8 rounded-full bg-ink text-canvas font-serif text-sm flex items-center justify-center shrink-0">
                  Z
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
                    {c.assistantTag}
                  </span>
                  <span className="font-mono text-[9.5px] tracking-widish text-accent uppercase">
                    {isDefault ? "Welcome" : `Q.${String((selectedIdx ?? 0) + 1).padStart(2, "0")}`}
                  </span>
                </div>
              </div>

              {!isDefault && selectedIdx !== null && (
                <p className="font-serif italic text-[14px] text-muted leading-relaxed mb-4">
                  {c.qa[selectedIdx].question}
                </p>
              )}

              <p
                key={`${lang}-${selectedIdx}`}
                className="text-[14px] text-ink-soft leading-relaxed animate-[fadeIn_300ms_ease-out]"
              >
                {activeAnswer}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
