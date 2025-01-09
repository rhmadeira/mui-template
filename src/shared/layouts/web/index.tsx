import { Outlet } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

export function WebLayout() {
  return (
    <div>
      teste <Outlet />
    </div>
  );
}
