// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { type Variants } from 'framer-motion';
import { Cpu, Hammer, Rocket } from 'lucide-react';
import { type QuikliiLayer } from '@/types';

interface LayerCardProps {
  layer: QuikliiLayer;
  variants?: Variants;
}

const iconMap = {
  hammer: Hammer,
  cpu: Cpu,
  rocket: Rocket,
} as const;

export function LayerCard({ layer, variants }: LayerCardProps) {
  const Icon = iconMap[layer.icon];

  return (
    <motion.article
      variants={variants}
      data-od-id={`quiklii-layer-${layer.id}`}
      className="flex flex-col rounded-2xl border border-structural bg-[var(--bg)] p-6 transition-colors hover:border-[var(--accent)] sm:p-8"
    >
      <div className="mb-5 inline-flex w-fit rounded-lg bg-surface-raised p-3">
        <Icon className="h-6 w-6 text-[var(--accent)]" />
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
        {layer.subtitle}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em] text-[var(--fg)]">{layer.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{layer.description}</p>

      <ul className="mt-5 space-y-2">
        {layer.capabilities.map((capability) => (
          <li key={capability} className="flex items-start gap-2 text-sm text-[var(--fg)]">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
            {capability}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
