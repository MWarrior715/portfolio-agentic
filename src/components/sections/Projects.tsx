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
      data-od-id="projects"
      className="bg-[var(--bg)] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]"
          >
            {t.projects.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display mt-4 text-4xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-5xl"
          >
            {t.projects.title}{' '}
            <span className="text-[var(--muted)]">{t.projects.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {t.projects.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
          initial={false}
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
