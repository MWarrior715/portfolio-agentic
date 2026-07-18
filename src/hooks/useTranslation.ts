// Generado asistido por Claude Code
import { useLanguageStore } from '@/store/useLanguageStore';
import { translations, type Dictionary } from '@/data/translations';

/**
 * Devuelve el diccionario del idioma actual.
 * Uso: `const t = useTranslation(); t.hero.titleLine1`
 * Type-safe: autocomplete y verificación de claves en compile-time.
 */
export function useTranslation(): Dictionary {
  const lang = useLanguageStore((state) => state.lang);
  return translations[lang];
}