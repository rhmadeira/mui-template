import { dashboardLoader } from "@/data/actions/dashboard-loader";
import Home from "@/page/authenticated/home";
import { WebLayout } from "@/shared/layouts/web";
import { createBrowserRouter } from "react-router-dom";
import Authenticated from "@/page/authenticated";
import { Login } from "@mui/icons-material";
import NoAuthenticated from "@/page/no-authenticated";

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
            path: "/inicio",
            element: <Home />,
            loader: dashboardLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <NoAuthenticated />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);
