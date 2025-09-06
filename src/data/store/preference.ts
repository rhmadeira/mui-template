import { GridDensity } from "@mui/x-data-grid";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TLayoutDataGrid = "table" | "card" | "list";

type TAuthStore = {
  isRememberLogin: boolean;
  login: string;
  densityDataGrid: GridDensity;
  layoutDataGrid: TLayoutDataGrid;
};
type TActions = {
  setRememberLogin: (bool: boolean) => void;
  setLogin: (login: string) => void;
  setDensityDataGrid: (density: GridDensity) => void;
  setLayoutDataGrid: (layout: TLayoutDataGrid) => void;
};

const store: StateCreator<TAuthStore & TActions> = (set) => ({
  isRememberLogin: false,
  login: "",
  densityDataGrid: "standard",
  layoutDataGrid: "table",
  setRememberLogin: (bool) => set(() => ({ isRememberLogin: bool })),
  setLogin: (login) => set(() => ({ login })),
  setDensityDataGrid: (density) => set(() => ({ densityDataGrid: density })),
  setLayoutDataGrid: (layout) => set(() => ({ layoutDataGrid: layout })),
});

export const usePreferenceStore = create(
  persist(store, {
    name: "@template/preferences-store",
    version: 2,
  })
);
