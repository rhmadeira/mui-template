import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./data/libs/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React TypeScript App</h1>
        <p>React TypeScript App</p>
      </div>
    </QueryClientProvider>
  );
}

export default App;
