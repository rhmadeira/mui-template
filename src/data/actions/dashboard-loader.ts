export interface IDashboardData {
  name: string;
}

export const dashboardLoader = async () => {
  // const response = await fetch("/api/dashboard.json");
  // return response.json();

  const response: IDashboardData[] = [
    { name: "client" },
    { name: "product" },
    { name: "test" },
    { name: "test2" },
    { name: "test3" },
    { name: "test4" },
    { name: "test5" },
    { name: "test6" },
    { name: "test7" },
    { name: "test8" },
    { name: "test9" },
    { name: "test10" },
    { name: "test11" },
    { name: "test12" },
    { name: "test13" },
  ];
  return response;
};
