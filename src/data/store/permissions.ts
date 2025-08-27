import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TPermissionsMeStore = {
  permissions: string[];
  setPermissions: (permissions: string[]) => void;
  getPermissions: () => string[];
  hasPermission: (permission: string) => boolean;
  hasAnyPermission: (permissions: string[]) => boolean;
  reset: () => void;
};

const store: StateCreator<TPermissionsMeStore> = (set, get) => ({
  permissions: [],
  lastUpdate: null,
  setPermissions: (permissions) => {
    set({
      permissions,
    });
  },
  getPermissions: () => {
    return get().permissions;
  },
  hasPermission: (permission) => {
    return get().permissions.includes(permission);
  },
  hasAnyPermission: (permissions) => {
    return permissions.some((permission) =>
      get().permissions.includes(permission)
    );
  },
  reset: () => {
    set({
      permissions: [],
    });
  },
});

export const usePermissionStore = create(
  persist(store, { name: "@template/permissions", version: 1 })
);
