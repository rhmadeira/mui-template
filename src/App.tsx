import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./data/libs/queryClient";
import Home from "./page/home";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
