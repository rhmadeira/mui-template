import { Navigate, Outlet } from "react-router-dom";

export default function NoAuthenticated() {
  const token = false;
  return !token ? <Outlet /> : <Navigate to={"/inicio"} />;
}
