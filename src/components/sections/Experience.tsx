// Generado asistido por Claude Code
import { motion } from 'framer-motion';
import { experienceData } from '@/data/experience';
import { TimelineItem } from '@/components/experience/TimelineItem';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';

export function Experience() {
  const t = useTranslation();
  const lang = useLanguageStore((state) => state.lang);
  const items = experienceData[lang];

  return (
    <section
      id="experiencia"
      className="min-h-screen bg-white px-4 py-24 dark:bg-[#0a0a0f] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl"
          >
            {t.experience.title}{' '}
            <span className="text-indigo-600 dark:text-indigo-400">{t.experience.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            {t.experience.subtitle}
          </motion.p>
        </motion.div>

        <motion.ol
          className="relative space-y-10 border-l border-gray-200 pl-2 dark:border-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {items.map((item) => (
            <TimelineItem key={item.id} item={item} variants={fadeInUp} />
          ))}
        </motion.ol>
      </div>
    </section>
  );
}