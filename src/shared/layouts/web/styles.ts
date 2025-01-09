import { drawerWidth, mainContent } from "@/shared/constants/default";
import { styled } from "@mui/material/styles";

interface AppBarProps {
  open?: boolean;
}

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  ...mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    "margin",
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }
  ),
  [theme.breakpoints.up("md")]: {
    marginLeft: open ? 2 : -(drawerWidth - 50),
    width: `calc(100% - ${drawerWidth + 5}px)`,
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 10,
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "8px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 5,
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "8px",
    marginRight: 5,
  },
}));
