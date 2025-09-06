import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { QuickFilter, ToolbarButton } from "@mui/x-data-grid";

type OwnerState = {
  expanded: boolean;
};

export const StyledToolbarButton = styled(ToolbarButton)<{
  ownerState: OwnerState;
}>(({ theme, ownerState }) => ({
  gridArea: "1 / 1",
  width: "min-content",
  height: "min-content",
  zIndex: 1,
  opacity: ownerState.expanded ? 0 : 1,
  pointerEvents: ownerState.expanded ? "none" : "auto",
  transition: theme.transitions.create(["opacity"]),
}));

export const StyledTextField = styled(TextField)<{
  ownerState: OwnerState;
}>(({ theme, ownerState }) => ({
  gridArea: "1 / 1",
  overflowX: "clip",
  width: ownerState.expanded ? 260 : "var(--trigger-width)",
  opacity: ownerState.expanded ? 1 : 0,
  transition: theme.transitions.create(["width", "opacity"]),
}));

export const StyledQuickFilter = styled(QuickFilter)({
  display: "grid",
  alignItems: "center",
});
