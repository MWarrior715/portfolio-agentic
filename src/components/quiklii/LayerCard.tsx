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
      className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-cyan-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-cyan-500 sm:p-8"
    >
      <div className="mb-5 inline-flex w-fit rounded-lg bg-cyan-100 p-3 dark:bg-cyan-900/30">
        <Icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
      </div>

      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
        {layer.subtitle}
      </p>
      <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-gray-50">{layer.title}</h3>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{layer.description}</p>

      <ul className="mt-5 space-y-2">
        {layer.capabilities.map((capability) => (
          <li key={capability} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
            {capability}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}