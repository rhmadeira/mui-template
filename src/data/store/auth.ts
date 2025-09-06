import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { usePermissionStore } from "./permission";

type TAuthStore = {
  accessToken: string | null;
  login: (accessToken: string) => void;
  logout: () => void;
  getUniqueName: () => string | null;
  getAdmin: () => string | null;
  getProfile: () => string | null;
  getAllDecoded: () => IJwtDecode | null;
};

export interface IJwtDecode {
  unique_name: string;
  jti: string;
  id: string;
  admin: string;
  profile: string;
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}

const store: StateCreator<TAuthStore> = (set) => ({
  accessToken: "",
  login: (accessToken: string) => {
    set({ accessToken });
  },
  logout: () => {
    usePermissionStore.getState().reset();
    set({ accessToken: "" });
  },
  getUniqueName: () => {
    const accessToken = useAuthStore.getState().accessToken;
    if (!accessToken) return null;

    try {
      const decoded: IJwtDecode = jwtDecode(accessToken);
      return decoded.unique_name || null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  },
  getAdmin: () => {
    const accessToken = useAuthStore.getState().accessToken;
    if (!accessToken) return null;

    try {
      const decoded: IJwtDecode = jwtDecode(accessToken);
      return decoded.admin || null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  },
  getProfile: () => {
    const accessToken = useAuthStore.getState().accessToken;
    if (!accessToken) return null;

    try {
      const decoded: IJwtDecode = jwtDecode(accessToken);
      return decoded.profile || null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  },
  getAllDecoded: () => {
    const accessToken = useAuthStore.getState().accessToken;
    if (!accessToken) return null;

    try {
      const decoded: IJwtDecode = jwtDecode(accessToken);
      return decoded;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  },
});

export const useAuthStore = create(
  persist(store, {
    name: "@template/auth-store",
    version: 1,
  })
);
