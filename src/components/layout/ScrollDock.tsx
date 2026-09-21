// Portafolio agéntico · AI Product Builder
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Code2, Home, Mail, Moon, Rocket, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fadeInRight } from '@/lib/animations';
import { useThemeStore } from '@/store/useThemeStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/hooks/useTranslation';
import { type Lang } from '@/types';

const navLinks: { href: string; key: 'home' | 'engineering' | 'projects' | 'quiklii' | 'contact'; Icon: typeof Home }[] = [
  { href: '#inicio', key: 'home', Icon: Home },
  { href: '#ingenieria-ai-first', key: 'engineering', Icon: Code2 },
  { href: '#proyectos', key: 'projects', Icon: Briefcase },
  { href: '#quiklii', key: 'quiklii', Icon: Rocket },
  { href: '#contacto', key: 'contact', Icon: Mail },
];

const langOptions: Lang[] = ['es', 'en'];

const SCROLL_THRESHOLD = 120;

/** Dock flotante que sustituye al navbar en desktop al descender:
 *  tema, idioma y accesos a secciones en vidrio esmerilado. */
export function ScrollDock() {
  const [visible, setVisible] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('#inicio');
  const { isDark, toggleTheme } = useThemeStore();
  const { lang, setLang } = useLanguageStore();
  const t = useTranslation();

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      setVisible(window.scrollY > SCROLL_THRESHOLD);
      // Sección activa: la última cuyo borde superior quedó sobre el centro del viewport.
      let current = navLinks[0]?.href ?? '#inicio';
      for (const { href } of navLinks) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          current = href;
        }
      }
      setActiveHref(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeInRight}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          data-od-id="scroll-dock"
          aria-label={t.dock.ariaLabel}
          className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 rounded-2xl border border-structural bg-[var(--bg)]/60 px-1.5 py-2 shadow-2xl backdrop-blur-md md:flex"
        >
          <button
            type="button"
            aria-label={isDark ? t.nav.themeToLight : t.nav.themeToDark}
            onClick={toggleTheme}
            className="dock-icon group relative flex h-9 w-9 items-center justify-center rounded-xl text-[var(--muted)] transition-colors hover:bg-surface-raised hover:text-[var(--fg)]"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
            <DockTooltip label={isDark ? t.nav.themeToLight : t.nav.themeToDark} />
          </button>

          <div className="dock-lang flex flex-col items-center gap-0.5 rounded-xl border border-structural p-0.5">
            {langOptions.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={lang === option}
                aria-label={option === 'es' ? t.dock.langEs : t.dock.langEn}
                onClick={() => setLang(option)}
                className={`w-7 rounded-md py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] transition-colors ${
                  lang === option ? 'bg-surface-raised text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <hr className="my-1 w-6 border-t border-structural" aria-hidden="true" />

          {navLinks.map(({ href, key, Icon }) => {
            const active = activeHref === href;
            return (
              <a
                key={href}
                href={href}
                aria-label={t.nav[key]}
                aria-current={active ? 'true' : undefined}
                className={`group relative flex h-9 w-9 items-center justify-center rounded-xl transition-colors hover:bg-surface-raised ${
                  active ? 'bg-surface-raised text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`}
              >
                <Icon size={17} />
                <DockTooltip label={t.nav[key]} />
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

/** Tooltip CSS puro: aparece a la izquierda del icono en hover/focus. */
function DockTooltip({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-structural bg-[var(--surface)] px-2 py-1 text-xs font-medium text-[var(--fg)] opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  );
}