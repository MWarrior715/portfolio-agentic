// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { contactData } from '@/data/contact';
import { ContactCard } from '@/components/contact/ContactCard';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';

export function Contact() {
  const t = useTranslation();
  const lang = useLanguageStore((state) => state.lang);
  const items = contactData[lang];

  return (
    <section
      id="contacto"
      data-od-id="contact"
      className="border-t border-structural bg-surface px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]"
          >
            {t.contact.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display mt-4 text-4xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-5xl"
          >
            {t.contact.title}{' '}
            <span className="text-[var(--muted)]">{t.contact.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {items.map((item) => (
            <ContactCard key={item.id} item={item} variants={fadeInUp} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.a
            variants={fadeInUp}
            href="mailto:mguerrerom715@gmail.com"
            data-od-id="contact-cta"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-sm font-semibold tracking-[0.02em] text-[var(--bg)] transition-transform hover:translate-y-[-2px]"
          >
            {t.contact.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
