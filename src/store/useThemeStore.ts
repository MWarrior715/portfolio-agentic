// Portafolio agéntico · AI Product Builder
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setDark: (value: boolean) => void;
}

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      isDark: true,
      toggleTheme: () =>
        set((state) => ({
          isDark: !state.isDark,
        })),
      setDark: (value) => set({ isDark: value }),
    }),
    {
      name: 'portfolio-agentic-theme',
    }
  )
);
