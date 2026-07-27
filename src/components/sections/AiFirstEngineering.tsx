// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';

const roles = [
  {
    eyebrow: 'Orquestación',
    titleKey: 0,
  },
  {
    eyebrow: 'Generación',
    titleKey: 1,
  },
  {
    eyebrow: 'Razonamiento',
    titleKey: 2,
  },
];

export function AiFirstEngineering() {
  const t = useTranslation();

  return (
    <section
      id="ingenieria-ai-first"
      data-od-id="ai-first"
      className="border-y border-structural bg-[var(--bg)] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]"
          >
            AI-First Engineering
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display mt-4 text-4xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-5xl"
          >
            {t.aiFirst.title}{' '}
            <span className="text-[var(--muted)]">{t.aiFirst.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {t.aiFirst.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {roles.map((role, index) => {
            const item = t.aiFirst.roles[index]!;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                data-od-id={`ai-role-${index}`}
                className="rounded-xl border border-structural bg-surface p-8 transition-colors hover:border-[var(--accent)]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
                  {role.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em] text-[var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
