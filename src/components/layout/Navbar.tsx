// Generado asistido por Claude Code
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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-[#0a0a0f]/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          MGuerrero
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-0.5 dark:border-gray-800">
            {langOptions.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={lang === option}
                onClick={() => setLang(option)}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  lang === option
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label={isDark ? t.nav.themeToLight : t.nav.themeToDark}
            className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            onClick={toggleTheme}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? t.nav.menuClose : t.nav.menuOpen}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-[#0a0a0f] md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-0.5 dark:border-gray-800">
              {langOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={lang === option}
                  onClick={() => setLang(option)}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                    lang === option
                      ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label={isDark ? t.nav.themeToLight : t.nav.themeToDark}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
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