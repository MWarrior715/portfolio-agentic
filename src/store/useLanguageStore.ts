// Generado asistido por Claude Code
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Lang } from '@/types';

interface LanguageState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

export const useLanguageStore = create(
  persist<LanguageState>(
    (set) => ({
      lang: 'es',
      setLang: (lang) => set({ lang }),
      toggleLang: () =>
        set((state) => ({
          lang: state.lang === 'es' ? 'en' : 'es',
        })),
    }),
    {
      name: 'portfolio-agentic-lang',
    }
  )
);