import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = true;
  return token ? <Outlet /> : <Navigate to={"/login"} />;
}
