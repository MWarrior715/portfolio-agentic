// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { type Variants } from 'framer-motion';
import { AlertCircle, PiggyBank, TrendingUp, Wrench } from 'lucide-react';
import { type ProjectData } from '@/types';
import { GitHubIcon } from '@/components/ui/GitHubIcon';

interface ProjectCardProps {
  project: ProjectData;
  codeLabel: string;
  variants?: Variants;
}

interface CaseStep {
  icon: typeof AlertCircle;
  label: string;
  text: string;
  accent: string;
}

export function ProjectCard({ project, codeLabel, variants }: ProjectCardProps) {
  const caseSteps: CaseStep[] = [
    { icon: AlertCircle, label: 'Problema', text: project.problem, accent: 'text-rose-600 dark:text-rose-400' },
    { icon: Wrench, label: 'Solución', text: project.solution, accent: 'text-indigo-600 dark:text-indigo-400' },
    { icon: TrendingUp, label: 'Impacto', text: project.impact, accent: 'text-cyan-600 dark:text-cyan-400' },
    { icon: PiggyBank, label: 'Ahorro', text: project.savings, accent: 'text-emerald-600 dark:text-emerald-400' },
  ];

  return (
    <motion.article
      variants={variants}
      className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-colors hover:border-indigo-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-500"
    >
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{project.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{project.tagline}</p>

        <ul className="mt-6 space-y-4">
          {caseSteps.map((step) => (
            <li key={step.label} className="flex gap-3">
              <step.icon className={`mt-0.5 h-5 w-5 shrink-0 ${step.accent}`} />
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wide ${step.accent}`}>
                  {step.label}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{step.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-gray-200 p-6 dark:border-gray-800">
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          {project.metric}
        </span>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          <GitHubIcon className="h-4 w-4" />
          {codeLabel}
        </a>
      </div>
    </motion.article>
  );
}