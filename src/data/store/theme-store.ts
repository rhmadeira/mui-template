import { create } from "zustand";
import { persist } from "zustand/middleware";

type TThemeApp = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const useThemeApp = create(
  persist<TThemeApp>(
    (set) => ({
      isDark: true,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: "theme",
    }
  )
);
