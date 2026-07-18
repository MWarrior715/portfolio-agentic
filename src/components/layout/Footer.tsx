// Portafolio agéntico · AI Product Builder
import { GitHubIcon } from '@/components/ui/GitHubIcon';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-4 py-8 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {year} Manuel Guerrero. AI Product Builder.
        </p>
        <a
          href="https://github.com/MWarrior715"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
        >
          <GitHubIcon className="h-4 w-4" />
          github.com/MWarrior715
        </a>
      </div>
    </footer>
  );
}