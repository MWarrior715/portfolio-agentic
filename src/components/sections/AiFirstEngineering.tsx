// Generado asistido por Claude Code
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Layers } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';

const icons = [Layers, Code2, BrainCircuit];

export function AiFirstEngineering() {
  const t = useTranslation();

  return (
    <section
      id="ingenieria-ai-first"
      className="min-h-screen bg-gray-50 px-4 py-24 dark:bg-[#0a0a0f] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
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
            {t.aiFirst.title}{' '}
            <span className="text-indigo-600 dark:text-indigo-400">{t.aiFirst.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            {t.aiFirst.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {t.aiFirst.roles.map((role, index) => {
            const Icon = icons[index] ?? Layers;
            return (
              <motion.div
                key={role.title}
                variants={fadeInUp}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-colors hover:border-indigo-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-500"
              >
                <div className="mb-6 inline-flex rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900/30">
                  <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                  {role.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{role.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}