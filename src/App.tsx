import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./data/libs/queryClient";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
