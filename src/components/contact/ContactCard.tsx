// Generado asistido por Claude Code
import { motion } from 'framer-motion';
import { type Variants } from 'framer-motion';
import { type ComponentType } from 'react';
import { Languages, Mail, MapPin, Phone } from 'lucide-react';
import { type ContactIcon, type ContactItem } from '@/types';
import { GitHubIcon } from '@/components/ui/GitHubIcon';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface ContactCardProps {
  item: ContactItem;
  variants?: Variants;
}

const iconMap: Record<ContactIcon, ComponentType<{ className?: string }>> = {
  mail: Mail,
  phone: Phone,
  whatsapp: WhatsAppIcon,
  github: GitHubIcon,
  map: MapPin,
  languages: Languages,
};

export function ContactCard({ item, variants }: ContactCardProps) {
  const Icon = iconMap[item.icon];
  const cardClass =
    'flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-colors dark:border-gray-800 dark:bg-gray-900';
  const hoverClass = item.href
    ? 'hover:border-indigo-300 dark:hover:border-indigo-500'
    : '';
  const iconClass =
    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400';

  const content = (
    <>
      <span className={iconClass}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {item.label}
        </span>
        <span className="block truncate text-sm font-medium text-gray-900 dark:text-gray-50">
          {item.value}
        </span>
      </span>
    </>
  );

  return (
    <motion.div variants={variants}>
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cardClass} ${hoverClass}`}
        >
          {content}
        </a>
      ) : (
        <div className={cardClass}>{content}</div>
      )}
    </motion.div>
  );
}