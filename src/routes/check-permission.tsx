import CheckPermissionComponent from "@/shared/components/check-permission-component";
import { JSX } from "react";

export function checkPermission(permissions: string[], Component: JSX.Element) {
  return (
    <CheckPermissionComponent permissions={permissions}>
      {Component}
    </CheckPermissionComponent>
  );
}
