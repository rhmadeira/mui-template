import { dashboardLoader } from "@/data/actions/dashboard-loader";
import Login from "@/page/auth/login";
import Home from "@/page/home";
import ProtectedRoute from "@/shared/layouts/protected";
import { WebLayout } from "@/shared/layouts/web";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <WebLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
            loader: dashboardLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
