// Portafolio agéntico · AI Product Builder
import { GitHubIcon } from '@/components/ui/GitHubIcon';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-od-id="footer"
      className="border-t border-structural bg-[var(--bg)] px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-[var(--muted)]">
          © {year} Manuel Guerrero. AI Product Builder.
        </p>
        <a
          href="https://github.com/MWarrior715"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          <GitHubIcon className="h-4 w-4" />
          github.com/MWarrior715
        </a>
      </div>
    </footer>
  );
}
