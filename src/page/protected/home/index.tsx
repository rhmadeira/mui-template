import { IDashboardData } from "@/data/actions/dashboard-loader";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const initialData = useLoaderData<IDashboardData[]>();

  // const teste = useQuery({
  //   queryKey: ["teste"],
  //   queryFn: () => {
  //     return { nome: "a" };
  //   },
  //   initialData: { nome: "a" },
  // });

  return (
    <div>
      <h1>Home</h1>
      {initialData.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
