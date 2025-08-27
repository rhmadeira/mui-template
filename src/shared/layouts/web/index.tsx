import Navbar from "@/shared/components/menu/navbar";
import Sidebar from "@/shared/components/menu/sidebar";
import { Box, CssBaseline, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Main } from "./styles";
import { useDrawerStore } from "@/data/store/drawer";

export function WebLayout() {
  const theme = useTheme();
  const drawerOpened = useDrawerStore((state) => state.drawerOpened);
  return (
    <Box
      sx={{
        display: "flex",
        background: theme.palette.primary.main,
      }}
    >
      <CssBaseline enableColorScheme />
      <Navbar />
      <Sidebar />
      <Main open={drawerOpened}>
        <Outlet />
      </Main>
    </Box>
  );
}
