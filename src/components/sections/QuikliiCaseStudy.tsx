// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { quikliiData } from '@/data/quiklii';
import { LayerCard } from '@/components/quiklii/LayerCard';
import { fadeInUp, scaleIn, staggerContainer, viewportOnce } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';

export function QuikliiCaseStudy() {
  const t = useTranslation();
  const lang = useLanguageStore((state) => state.lang);
  const { positioning, description, stack, layers, metrics, flowSteps } = quikliiData[lang];

  return (
    <section
      id="quiklii"
      data-od-id="quiklii"
      className="border-y border-structural bg-surface px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]"
          >
            {positioning}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display mt-4 text-4xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-5xl"
          >
            {t.quiklii.title}{' '}
            <span className="text-[var(--muted)]">{t.quiklii.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              data-od-id={`quiklii-metric-${index}`}
              className="rounded-xl border border-structural bg-[var(--bg)] p-5"
            >
              <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-[var(--accent)] sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-[var(--muted)]">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {layers.map((layer) => (
            <LayerCard key={layer.id} layer={layer} variants={fadeInUp} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-2"
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <div>
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-semibold tracking-[-0.01em] text-[var(--fg)]"
            >
              {t.quiklii.stackTitle}
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="mt-2 text-sm leading-relaxed text-[var(--muted)]"
            >
              {t.quiklii.stackSubtitle}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-5 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-structural bg-[var(--bg)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-xl border border-structural bg-[var(--bg)] p-6"
            data-od-id="quiklii-diagram"
          >
            <QuikliiFlowDiagram steps={flowSteps} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function QuikliiFlowDiagram({ steps }: { steps: string[] }) {
  const row1 = steps.slice(0, 3);
  const row2 = steps.slice(3);

  return (
    <div className="space-y-2 sm:grid sm:grid-cols-5 sm:gap-3 sm:space-y-0">
      {[
        { items: row1, showArrowAfterLast: true },
        { items: row2, showArrowAfterLast: false },
      ].map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-center justify-center gap-2 sm:hidden">
          {row.items.map((step, index) => {
            const globalIndex = rowIndex === 0 ? index : index + 3;
            return (
              <div key={globalIndex} className="flex items-center gap-2">
                <div className="min-w-[88px] rounded-md border border-structural bg-surface px-2 py-2 text-center">
                  <span className="block text-[9px] font-medium uppercase tracking-wider text-[var(--muted)]">
                    Paso {globalIndex + 1}
                  </span>
                  <span className="block font-mono text-[10px] leading-tight text-[var(--fg)]">{step}</span>
                </div>
                {(index < row.items.length - 1 || row.showArrowAfterLast) && (
                  <span className="shrink-0 text-xs text-[var(--accent)]">→</span>
                )}
              </div>
            );
          })}
        </div>
      ))}

      {/* Desktop: single row */}
      {steps.map((step, index) => (
        <div key={`desktop-${index}`} className="hidden items-center gap-3 sm:flex">
          <div className="flex-1 rounded-lg border border-structural bg-surface px-3 py-2.5 text-center">
            <span className="block font-mono text-xs text-[var(--fg)]">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <span className="shrink-0 text-[var(--accent)]">→</span>
          )}
        </div>
      ))}
    </div>
  );
}
