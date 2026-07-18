// Portafolio agéntico · AI Product Builder
import { lazy, Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';

// Code-splitting: secciones bajo el fold se cargan bajo demanda.
const AiFirstEngineering = lazy(() =>
  import('@/components/sections/AiFirstEngineering').then((m) => ({ default: m.AiFirstEngineering }))
);
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
const Footer = lazy(() =>
  import('@/components/layout/Footer').then((m) => ({ default: m.Footer }))
);

/** Placeholder que reserva altura para evitar CLS mientras carga la sección. */
function SectionFallback() {
  return <div className="min-h-screen" aria-hidden="true" />;
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0f] dark:text-gray-50">
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <AiFirstEngineering />
        </Suspense>

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

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;