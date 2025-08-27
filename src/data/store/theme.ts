import { create } from "zustand";
import { persist } from "zustand/middleware";

type TThemeStore = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create(
  persist<TThemeStore>(
    (set) => ({
      isDark: true,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: "@template/theme",
      version: 1,
    }
  )
);
