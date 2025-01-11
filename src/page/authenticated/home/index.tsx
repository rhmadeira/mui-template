import { IDashboardData } from "@/data/actions/dashboard-loader";
import { Box, Typography } from "@mui/material";
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
    <>
      {initialData.map((item, index) => (
        <Box width={200} height={200} bgcolor={"red"} key={index}>
          <Typography>{item.name}</Typography>
        </Box>
      ))}
    </>
  );
}
