import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TAuthStore = {
  rememberEmail: boolean;
  loginEmail?: string;
  setRememberEmail: (remember: boolean) => void;
  setLoginEmail: (email: string) => void;
};

const store: StateCreator<TAuthStore> = (set) => ({
  rememberEmail: false,
  setRememberEmail: (remember: boolean) => {
    set({ rememberEmail: remember });
  },
  setLoginEmail: (email: string) => {
    set({ loginEmail: email });
  },
});

export const usePreferenceStore = create(
  persist(store, {
    name: "@template/preferences-store",
    version: 1,
  })
);
