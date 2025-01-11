import { dashboardLoader } from "@/data/actions/dashboard-loader";
import Login from "@/page/auth/login";
import Home from "@/page/authenticated/home";
import { WebLayout } from "@/shared/layouts/web";
import { createBrowserRouter } from "react-router-dom";
import Authenticated from "@/page/authenticated";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Authenticated />,
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
