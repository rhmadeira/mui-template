import { drawerWidth } from "@/shared/constants/default";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Box, List, useMediaQuery } from "@mui/material";
import { useDrawerStore } from "@/data/store/drawer-store";
import { useNavigate } from "react-router-dom";
import Item from "./item";
import { SIDEBAR_MENU } from "@/shared/constants/sidebar-menu";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  borderRight: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(5)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const drawerOpen = useDrawerStore((state) => state.drawerOpened);
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
      aria-label="mailbox folders"
    >
      <Drawer
        id="drawer-left"
        variant={matchUpMd ? "permanent" : "temporary"}
        open={drawerOpen}
        sx={{
          "& .MuiDrawer-paper": {
            background: theme.palette.primary.main,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "68px",
            },
          },
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          {SIDEBAR_MENU.map((opt) => (
            <Item
              key={opt.name}
              name={opt.name}
              path={opt.path}
              icon={opt.icon}
              iconComponent={opt.iconComponent}
              onClick={() => navigate(opt.path)}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
