import { Navigate, Outlet } from "react-router-dom";

export default function Authenticated() {
  const token = false;
  return token ? <Outlet /> : <Navigate to={"/login"} />;
}
