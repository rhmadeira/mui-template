import { create } from "zustand";

interface IDrawerStore {
  drawerOpened: boolean;
  toggleDrawer: () => void;
  setDrawerOpened: (opened: boolean) => void;
  close: () => void;
}

export const useDrawerStore = create<IDrawerStore>((set) => ({
  drawerOpened: false,
  toggleDrawer: () => set((state) => ({ drawerOpened: !state.drawerOpened })),
  setDrawerOpened: (opened) => set(() => ({ drawerOpened: opened })),
  close: () => set(() => ({ drawerOpened: false })),
}));
