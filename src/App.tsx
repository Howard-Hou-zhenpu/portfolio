import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { LangHint } from "./components/layout/LangHint";
import { Hero } from "./components/hero/Hero";
import { AskZhenpu } from "./components/ask-zhenpu/AskZhenpu";
import { PathSection } from "./components/path/PathSection";
import { ProjectSection } from "./components/projects/ProjectSection";
import { ToolkitSection } from "./components/toolkit/ToolkitSection";
import { BrandLabSection } from "./components/brand-lab/BrandLabSection";
import { WhyGlobalGrowth } from "./components/why-global/WhyGlobalGrowth";
import { NotesSection } from "./components/notes/NotesSection";
import { Contact } from "./components/contact/Contact";
import { RainCurtainBand } from "./components/p5/RainCurtainBand";
import { SwallowBand } from "./components/p5/SwallowBand";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink antialiased">
      <Header />
      <LangHint />
      <main>
        <Hero />
        <SwallowBand />
        <AskZhenpu />
        <PathSection />
        <ProjectSection />
        <ToolkitSection />
        <BrandLabSection />
        <WhyGlobalGrowth />
        <RainCurtainBand />
        <NotesSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
