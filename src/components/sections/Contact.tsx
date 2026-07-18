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
      className="min-h-screen bg-gray-50 px-4 py-24 dark:bg-[#0a0a0f] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl"
          >
            {t.contact.title}{' '}
            <span className="text-indigo-600 dark:text-indigo-400">{t.contact.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
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
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            {t.contact.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}