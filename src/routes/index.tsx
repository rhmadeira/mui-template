import { createBrowserRouter } from "react-router-dom";
import Home from "../page/authenticated/home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
