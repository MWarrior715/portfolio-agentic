// Portafolio agéntico · AI Product Builder
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/hooks/useTranslation';
import { type Lang } from '@/types';

const navLinks: { href: string; key: 'home' | 'engineering' | 'projects' | 'quiklii' | 'contact' }[] = [
  { href: '#inicio', key: 'home' },
  { href: '#ingenieria-ai-first', key: 'engineering' },
  { href: '#proyectos', key: 'projects' },
  { href: '#quiklii', key: 'quiklii' },
  { href: '#contacto', key: 'contact' },
];

const langOptions: Lang[] = ['es', 'en'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const { lang, setLang } = useLanguageStore();
  const t = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <header
      data-od-id="navbar"
      className="sticky top-0 z-50 border-b border-structural bg-[var(--bg)]/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="font-display text-xl font-semibold tracking-[-0.02em] text-[var(--fg)]"
        >
          MGuerrero
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-[0.01em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 rounded-lg border border-structural p-0.5">
            {langOptions.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={lang === option}
                onClick={() => setLang(option)}
                className={`rounded-md px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.06em] transition-colors ${
                  lang === option
                    ? 'bg-surface-raised text-[var(--accent)]'
                    : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label={isDark ? t.nav.themeToLight : t.nav.themeToDark}
            className="rounded-md p-2 text-[var(--muted)] transition-colors hover:bg-surface-raised hover:text-[var(--fg)]"
            onClick={toggleTheme}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? t.nav.menuClose : t.nav.menuOpen}
          className="rounded-md p-2 text-[var(--muted)] hover:bg-surface-raised hover:text-[var(--fg)] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div
          data-od-id="mobile-menu"
          className="border-t border-structural bg-[var(--bg)] px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-[var(--muted)] hover:text-[var(--accent)]"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-lg border border-structural p-0.5">
              {langOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={lang === option}
                  onClick={() => setLang(option)}
                  className={`rounded-md px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.06em] transition-colors ${
                    lang === option
                      ? 'bg-surface-raised text-[var(--accent)]'
                      : 'text-[var(--muted)] hover:text-[var(--fg)]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label={isDark ? t.nav.themeToLight : t.nav.themeToDark}
              className="rounded-md p-2 text-[var(--muted)] hover:bg-surface-raised hover:text-[var(--fg)]"
              onClick={toggleTheme}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
