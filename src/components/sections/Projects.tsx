// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';

export function Projects() {
  const t = useTranslation();
  const lang = useLanguageStore((state) => state.lang);
  const items = projectsData[lang];

  return (
    <section
      id="proyectos"
      className="min-h-screen bg-white px-4 py-24 dark:bg-[#0a0a0f] sm:px-6 lg:px-8"
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
            {t.projects.title}{' '}
            <span className="text-indigo-600 dark:text-indigo-400">{t.projects.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            {t.projects.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              codeLabel={t.projects.codeLabel}
              demoLabel={t.projects.demoLabel}
              caseLabels={t.projects.caseLabels}
              variants={fadeInUp}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}