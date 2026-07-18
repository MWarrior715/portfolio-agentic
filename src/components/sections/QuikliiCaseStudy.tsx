// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { quikliiData } from '@/data/quiklii';
import { LayerCard } from '@/components/quiklii/LayerCard';
import { CodeTypewriter } from '@/components/hero/CodeTypewriter';
import { fadeInUp, scaleIn, staggerContainer, viewportOnce } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';

export function QuikliiCaseStudy() {
  const t = useTranslation();
  const lang = useLanguageStore((state) => state.lang);
  const { positioning, description, stack, layers, metrics, architectureCode } = quikliiData[lang];

  return (
    <section
      id="quiklii"
      className="min-h-screen bg-gray-50 px-4 py-24 dark:bg-[#0a0a0f] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
          >
            {positioning}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl"
          >
            {t.quiklii.title}{' '}
            <span className="text-cyan-600 dark:text-cyan-400">{t.quiklii.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={scaleIn}
              className="rounded-xl border border-gray-200 bg-white p-5 text-center dark:border-gray-800 dark:bg-gray-900"
            >
              <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {layers.map((layer) => (
            <LayerCard key={layer.id} layer={layer} variants={fadeInUp} />
          ))}
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-bold text-gray-900 dark:text-gray-50"
            >
              {t.quiklii.stackTitle}
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="mt-2 text-sm text-gray-600 dark:text-gray-400"
            >
              {t.quiklii.stackSubtitle}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-5 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-gray-100 px-2.5 py-1 font-mono text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <CodeTypewriter code={architectureCode} typingSpeed={20} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}