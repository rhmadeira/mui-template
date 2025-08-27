import { usePermissionStore } from "@/data/store/permissions";
import { Navigate } from "react-router-dom";

export default function CheckPermissionComponent({
  permissions,
  children,
}: {
  permissions: string[];
  children: React.ReactNode;
}) {
  const hasAnyPermission = usePermissionStore((s) =>
    s.hasAnyPermission(permissions)
  );

  return hasAnyPermission ? (
    <>{children}</>
  ) : (
    <Navigate to="/not-permission" replace />
  );
}
