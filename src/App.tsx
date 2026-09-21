// Portafolio agéntico · AI Product Builder
import { Navbar } from '@/components/layout/Navbar';
import { ScrollDock } from '@/components/layout/ScrollDock';
import { Hero } from '@/components/hero/Hero';
import { AiFirstEngineering } from '@/components/sections/AiFirstEngineering';
import { Projects } from '@/components/sections/Projects';
import { QuikliiCaseStudy } from '@/components/sections/QuikliiCaseStudy';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />
      <ScrollDock />

      <main>
        <Hero />
        <AiFirstEngineering />
        <Projects />
        <QuikliiCaseStudy />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
