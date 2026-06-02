import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { LangHint } from "./components/layout/LangHint";
import { Hero } from "./components/hero/Hero";
import { PathSection } from "./components/path/PathSection";
import { ProjectSection } from "./components/projects/ProjectSection";
import { ToolkitSection } from "./components/toolkit/ToolkitSection";
import { BrandLabSection } from "./components/brand-lab/BrandLabSection";
import { WhyGlobalGrowth } from "./components/why-global/WhyGlobalGrowth";
import { NotesSection } from "./components/notes/NotesSection";
import { Contact } from "./components/contact/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink antialiased">
      <Header />
      <LangHint />
      <main>
        <Hero />
        <PathSection />
        <ProjectSection />
        <ToolkitSection />
        <BrandLabSection />
        <WhyGlobalGrowth />
        <NotesSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
