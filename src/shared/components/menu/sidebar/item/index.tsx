import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { useDrawerStore } from "@/data/store/drawer";

interface IItemProps {
  name: string;
  path: string;
  icon: string | undefined;
  iconComponent: SvgIconComponent;
  onClick?: () => void;
}

export default function Item(item: IItemProps) {
  const theme = useTheme();
  const resolvedPath = useResolvedPath(item.name || "/");
  const match = useMatch({ path: resolvedPath.pathname, end: false });
  const drawerOpen = useDrawerStore((state) => state.drawerOpened);

  return (
    <Link to={item.path} style={{ textDecoration: "none" }}>
      <ListItem
        key={item.name}
        disablePadding
        sx={{ display: "block", pl: drawerOpen ? 0.2 : 1 }}
      >
        <ListItemButton
          selected={!!match}
          title={item.name}
          sx={{
            minHeight: 28,
            justifyContent: drawerOpen ? "initial" : "center",
            // px: 2.5,
            borderRadius: "4px",
            "& .MuiListItemIcon-root": {
              color: theme.palette.primary.contrastText,
              "& .MuiIcon-root": {
                color: theme.palette.primary.contrastText,
              },
            },
            "&:hover": {
              bgcolor: theme.palette.primary.light,
              "& .MuiListItemIcon-root": {
                color: theme.palette.primary.main,
                "& .MuiIcon-root": {
                  color: theme.palette.primary.main,
                },
              },
              "& .MuiListItemText-root": {
                color: theme.palette.primary.main,
              },
            },
            "&.Mui-selected": {
              bgcolor: theme.palette.primary.main,
              borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
              borderTop: `1px solid ${theme.palette.primary.contrastText}`,
              "& .MuiListItemIcon-root": {
                color: theme.palette.primary.contrastText,
                "& .MuiIcon-root": {
                  color: theme.palette.primary.contrastText,
                },
              },
              "& .MuiListItemText-root": {
                color: theme.palette.primary.contrastText,
              },
              "&:hover": {
                bgcolor: theme.palette.primary.light,
                "& .MuiListItemIcon-root": {
                  color: theme.palette.primary.main,
                  "& .MuiIcon-root": {
                    color: theme.palette.primary.main,
                  },
                },
                "& .MuiListItemText-root": {
                  color: theme.palette.primary.main,
                },
              },
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: drawerOpen ? 2 : "auto",
              justifyContent: "center",
            }}
          >
            {<item.iconComponent fontSize={match ? "medium" : "small"} />}
          </ListItemIcon>
          {drawerOpen && (
            <ListItemText
              primary={<Typography variant="body1">{item.name}</Typography>}
              sx={{
                opacity: drawerOpen ? 1 : 0,
                color: theme.palette.primary.light,
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
