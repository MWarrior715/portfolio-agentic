// Portafolio agéntico · AI Product Builder
import { lazy, Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { AiFirstEngineering } from '@/components/sections/AiFirstEngineering';
import { Footer } from '@/components/layout/Footer';

// Code-splitting: solo las secciones bajo el fold se cargan bajo demanda.
// Navbar, Hero, Ingeniería AI-First y Footer quedan sincrónicos (LCP crítico).
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

/** Placeholder con pulse que reserva altura para evitar CLS mientras carga la sección. */
function SectionFallback() {
  return (
    <div
      className="min-h-[400px] animate-pulse rounded-2xl bg-gray-50 dark:bg-gray-900"
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0f] dark:text-gray-50">
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