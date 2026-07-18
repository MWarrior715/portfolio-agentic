// Generado asistido por Claude Code
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
      className="flex min-h-screen items-center justify-center bg-white px-4 dark:bg-[#0a0a0f] sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold leading-tight text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl"
          >
            {t.hero.titleLine1}{' '}
            <span className="text-indigo-600 dark:text-indigo-400">{t.hero.titleSep}</span>{' '}
            {t.hero.titleLine2}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
          >
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-50 dark:hover:bg-gray-800"
            >
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInRight}>
          <CodeTypewriter code={quikliiData[lang].architectureCode} typingSpeed={24} />
        </motion.div>
      </div>
    </section>
  );
}