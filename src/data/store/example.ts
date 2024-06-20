import { create } from "zustand";
import { TExample } from "../types/example";

interface IExampleStore {
  example: TExample[];
  setExample: (example: TExample[]) => void;
}

export const useExampleStore = create<IExampleStore>((set) => ({
  example: [],
  setExample: (example) => set({ example }),
}));
