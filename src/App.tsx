import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./data/libs/queryClient";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ThemeAppProvider from "./shared/theme/provider";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeAppProvider>
        <RouterProvider router={router} />
      </ThemeAppProvider>
    </QueryClientProvider>
  );
}

export default App;
