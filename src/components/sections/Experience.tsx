// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { experienceData } from '@/data/experience';
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
      data-od-id="experience"
      className="bg-[var(--bg)] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]"
          >
            {t.experience.title}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display mt-4 text-4xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-5xl"
          >
            {t.experience.title}{' '}
            <span className="text-[var(--muted)]">{t.experience.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {t.experience.subtitle}
          </motion.p>
        </motion.div>

        <motion.ul
          className="grid gap-6 sm:grid-cols-2"
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {items.map((item) => (
            <motion.li
              key={item.id}
              variants={fadeInUp}
              data-od-id={`experience-${item.id}`}
              className="rounded-xl border border-structural bg-surface p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--accent)]">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-[-0.01em] text-[var(--fg)]">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--muted)]">{item.organization}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.impact}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
