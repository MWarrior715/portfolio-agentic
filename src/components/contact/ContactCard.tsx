// Portafolio agéntico · AI Product Builder
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
  const Wrapper = item.href ? motion.a : motion.div;

  const content = (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-raised text-[var(--accent)]">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
          {item.label}
        </span>
        <span className="block truncate text-sm font-medium text-[var(--fg)]">{item.value}</span>
      </span>
    </>
  );

  return (
    <motion.div variants={variants} data-od-id={`contact-${item.id}`}>
      {item.href ? (
        <Wrapper
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-structural bg-[var(--bg)] p-5 transition-colors hover:border-[var(--accent)]"
        >
          {content}
        </Wrapper>
      ) : (
        <Wrapper className="flex items-center gap-4 rounded-xl border border-structural bg-[var(--bg)] p-5">{content}</Wrapper>
      )}
    </motion.div>
  );
}
