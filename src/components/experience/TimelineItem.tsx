// Generado asistido por Claude Code
import { motion } from 'framer-motion';
import { type Variants } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { type ExperienceItem, type ExperienceType } from '@/types';

interface TimelineItemProps {
  item: ExperienceItem;
  variants?: Variants;
}

const iconMap: Record<ExperienceType, typeof Briefcase> = {
  work: Briefcase,
  entrepreneurship: Rocket,
  education: GraduationCap,
};

const accentMap: Record<ExperienceType, string> = {
  work: 'text-indigo-600 dark:text-indigo-400',
  entrepreneurship: 'text-cyan-600 dark:text-cyan-400',
  education: 'text-emerald-600 dark:text-emerald-400',
};

export function TimelineItem({ item, variants }: TimelineItemProps) {
  const Icon = iconMap[item.type];
  const accent = accentMap[item.type];

  return (
    <motion.li variants={variants} className="relative pl-10">
      <span
        className={`absolute left-0 top-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white ring-2 ring-gray-200 dark:bg-[#0a0a0f] dark:ring-gray-700 ${accent}`}
      >
        <Icon className="h-4 w-4" />
      </span>

      <p className={`text-xs font-semibold uppercase tracking-wide ${accent}`}>{item.period}</p>
      <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-50">{item.role}</h3>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.organization}</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.impact}</p>
    </motion.li>
  );
}