import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/hero/Hero";
import { PathSection } from "./components/path/PathSection";
import { ProjectSection } from "./components/projects/ProjectSection";
import { ToolkitSection } from "./components/toolkit/ToolkitSection";
import { BrandLabSection } from "./components/brand-lab/BrandLabSection";
import { NotesSection } from "./components/notes/NotesSection";
import { Contact } from "./components/contact/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <PathSection />
        <ProjectSection />
        <ToolkitSection />
        <BrandLabSection />
        <NotesSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
