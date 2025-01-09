export interface IDashboardData {
  name: string;
}

export const dashboardLoader = async () => {
  // const response = await fetch("/api/dashboard.json");
  // return response.json();

  const response = [{ name: "client" }, { name: "product" }];
  return response as IDashboardData[];
};
