// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { CodeTypewriter } from './CodeTypewriter';
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
      className="flex min-h-[calc(100vh-72px)] items-center bg-[var(--bg)] px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-display mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-[var(--fg)] sm:text-6xl md:text-7xl"
          >
            {t.hero.titleLine1}
            <span className="text-[var(--muted)]"> {t.hero.titleSep} </span>
            {t.hero.titleLine2}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
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
        >
          <CodeTypewriter code={quikliiData[lang].architectureCode} typingSpeed={18} />
        </motion.div>
      </div>
    </section>
  );
}
