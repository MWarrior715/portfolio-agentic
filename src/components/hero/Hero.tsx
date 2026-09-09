// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { CodeTypewriter } from './CodeTypewriter';
import { NetworkGraph } from './NetworkGraph';
import { fadeInRight, fadeInUp, staggerContainer } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { quikliiData } from '@/data/quiklii';

export function Hero() {
  const t = useTranslation();
  const lang = useLanguageStore((state) => state.lang);

  return (
    <section
      id="inicio"
      data-od-id="hero"
      className="relative flex min-h-0 items-center overflow-hidden bg-[var(--bg)] px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[calc(100vh-72px)] lg:px-8 lg:py-24"
    >
      {/* Grafo de red decorativo (versión viva del banner) — mitad derecha */}
      <NetworkGraph className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[560px] -translate-y-1/2 opacity-30 lg:block xl:w-[680px] 2xl:w-[820px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 py-0 sm:gap-12 lg:grid-cols-2 lg:gap-16 2xl:max-w-[94rem] 2xl:gap-20">
        <motion.div
          initial={false}
          animate="visible"
          variants={staggerContainer}
          className="min-w-0 max-w-2xl"
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-display mt-4 max-w-full break-words text-4xl font-semibold leading-[0.95] tracking-[-0.02em] text-[var(--fg)] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t.hero.titleLine1}
            <span className="text-[var(--muted)]"> {t.hero.titleSep} </span>
            {t.hero.titleLine2}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-xl break-words text-base leading-relaxed text-[var(--muted)] sm:text-lg sm:mt-6 lg:mt-8"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-start sm:gap-4 lg:mt-10"
          >
            <a
              href="#proyectos"
              data-od-id="hero-cta-primary"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[var(--bg)] transition-transform hover:translate-y-[-2px]"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contacto"
              data-od-id="hero-cta-secondary"
              className="inline-flex items-center justify-center rounded-lg border border-structural px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[var(--fg)] transition-colors hover:bg-surface-raised"
            >
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          data-od-id="hero-terminal"
          className="relative min-w-0"
        >
          {/* Resplandores anclados al terminal: le dan al vidrio esmerilado algo que difuminar */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-14 h-72 w-80 rounded-full bg-[oklch(75%_0.14_65/0.35)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-12 h-80 w-96 rounded-full bg-[oklch(68%_0.18_165/0.30)] blur-3xl"
          />
          <CodeTypewriter code={quikliiData[lang].architectureCode} typingSpeed={18} />
        </motion.div>
      </div>
    </section>
  );
}
