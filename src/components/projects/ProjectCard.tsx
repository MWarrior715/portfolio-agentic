// Portafolio agéntico · AI Product Builder
import { motion } from 'framer-motion';
import { type Variants } from 'framer-motion';
import { AlertCircle, ExternalLink, PiggyBank, TrendingUp, Wrench } from 'lucide-react';
import { type ProjectData } from '@/types';
import { GitHubIcon } from '@/components/ui/GitHubIcon';

interface ProjectCardProps {
  project: ProjectData;
  codeLabel: string;
  demoLabel: string;
  caseLabels: {
    problem: string;
    solution: string;
    impact: string;
    savings: string;
  };
  variants?: Variants;
}

interface CaseStep {
  icon: typeof AlertCircle;
  label: string;
  text: string;
}

export function ProjectCard({ project, codeLabel, demoLabel, caseLabels, variants }: ProjectCardProps) {
  const hasDemo = project.demoUrl && project.demoUrl !== '#';

  const caseSteps: CaseStep[] = [
    { icon: AlertCircle, label: caseLabels.problem, text: project.problem },
    { icon: Wrench, label: caseLabels.solution, text: project.solution },
    { icon: TrendingUp, label: caseLabels.impact, text: project.impact },
    { icon: PiggyBank, label: caseLabels.savings, text: project.savings },
  ];

  return (
    <motion.article
      variants={variants}
      data-od-id={`project-card-${project.id}`}
      className="flex flex-col rounded-2xl border border-structural bg-surface"
    >
      <div className="p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-structural px-2.5 py-1 font-mono text-xs text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold tracking-[-0.01em] text-[var(--fg)]">{project.title}</h3>
        <p className="mt-1 text-sm text-[var(--muted)]">{project.tagline}</p>

        <ul className="mt-6 space-y-4">
          {caseSteps.map((step) => (
            <li key={step.label} className="flex gap-3">
              <step.icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                  {step.label}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-[var(--fg)]">{step.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface-raised px-2 py-1 font-mono text-xs text-[var(--muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-structural p-6">
        <p className="mb-4 font-mono text-sm font-medium text-[var(--accent)]">
          {project.metric}
        </p>
        <div className="flex items-center gap-5">
          {hasDemo && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
            >
              <ExternalLink className="h-4 w-4 text-[var(--accent)]" />
              {demoLabel}
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
          >
            <GitHubIcon className="h-4 w-4 text-[var(--accent)]" />
            {codeLabel}
          </a>
        </div>
      </div>
    </motion.article>
  );
}
