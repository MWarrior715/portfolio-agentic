// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Layers } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';

interface RoleStyle {
  icon: typeof Layers;
  iconBg: string;
  iconText: string;
  hoverBorder: string;
}

const defaultStyle: RoleStyle = {
  icon: Layers,
  iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
  iconText: 'text-indigo-500',
  hoverBorder: 'hover:border-indigo-500',
};

const roleStyles: RoleStyle[] = [
  {
    icon: Layers,
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconText: 'text-indigo-500',
    hoverBorder: 'hover:border-indigo-500',
  },
  {
    icon: Code2,
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconText: 'text-cyan-500',
    hoverBorder: 'hover:border-cyan-500',
  },
  {
    icon: BrainCircuit,
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconText: 'text-emerald-500',
    hoverBorder: 'hover:border-emerald-500',
  },
];

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
            const style = roleStyles[index] ?? defaultStyle;
            const Icon = style.icon;
            return (
              <motion.div
                key={role.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900 ${style.hoverBorder}`}
              >
                <div className={`mb-6 inline-flex rounded-lg p-3 ${style.iconBg}`}>
                  <Icon className={`h-6 w-6 ${style.iconText}`} />
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