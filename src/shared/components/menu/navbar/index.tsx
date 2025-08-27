import { useDrawerStore } from "@/data/store/drawer";
import { AppBar, Toolbar, useTheme } from "@mui/material";

export default function Navbar() {
  const theme = useTheme();
  const drawerOpened = useDrawerStore((state) => state.drawerOpened);
  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: theme.palette.primary.main,
        transition: drawerOpened ? theme.transitions.create("width") : "none",
      }}
      aria-label="appBar-x"
    >
      <Toolbar
        aria-label="toolbar-x"
        sx={{
          "&.MuiToolbar-root": {
            paddingLeft: 1,
          },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores
        nostrum officia, vitae perspiciatis eum libero officiis repellendus
        facere quos reprehenderit ex exercitationem voluptate obcaecati sit
        totam odio repellat enim?
        {/* <AppHeader /> */}
      </Toolbar>
    </AppBar>
  );
}
