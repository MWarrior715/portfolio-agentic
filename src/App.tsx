// Portafolio agéntico · AI Product Builder
import { lazy, Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { AiFirstEngineering } from '@/components/sections/AiFirstEngineering';
import { Footer } from '@/components/layout/Footer';

const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({ default: m.Projects }))
);
const QuikliiCaseStudy = lazy(() =>
  import('@/components/sections/QuikliiCaseStudy').then((m) => ({ default: m.QuikliiCaseStudy }))
);
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience }))
);
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact }))
);

function SectionFallback() {
  return (
    <div
      className="min-h-[400px] rounded-2xl border border-structural bg-surface"
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />

      <main>
        <Hero />
        <AiFirstEngineering />

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <QuikliiCaseStudy />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>

        <Footer />
      </main>
    </div>
  );
}

export default App;
