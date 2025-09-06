import {
  Badge,
  Box,
  Button,
  ButtonProps,
  Divider,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";

import {
  ColumnsPanelTrigger,
  ToolbarButton,
  Toolbar,
  FilterPanelTrigger,
  ToolbarButtonProps,
} from "@mui/x-data-grid";
import ExportNative from "./export-native";
import QuickFilterPersistNative from "./quick-filter-persist-native";
import { Undo } from "@mui/icons-material";

interface IToolbarIconButtonProps extends ToolbarButtonProps {
  icon: React.ReactNode;
  tooltip: string;
}
interface IToolbarButtonProps extends ToolbarButtonProps {
  children: React.ReactNode;
  buttonProps?: ButtonProps;
}

interface IToolbarCustomProps {
  title?: string;
  slotToolbarButtons?: IToolbarButtonProps[];
  slotToolbarIconButtons?: IToolbarIconButtonProps[];
  slotComponent?: React.ReactNode;
  showExportNative?: boolean | undefined;
  showFilterNative?: boolean | undefined;
  showChangeColumns?: boolean | undefined;
  showBackButton?: boolean;
  backButtonCallback?: () => void;
  quickFilter?: React.ReactNode;
  showQuickFilterNative?: boolean | undefined;
}

export default function CustomToolbar({
  title,
  showExportNative = false,
  slotToolbarButtons,
  slotToolbarIconButtons,
  slotComponent,
  showChangeColumns = true,
  showFilterNative = false,
  showBackButton = false,
  quickFilter,
  backButtonCallback,
  showQuickFilterNative = false,
}: IToolbarCustomProps) {
  const theme = useTheme();
  return (
    <Toolbar>
      <Box display={"flex"} gap={1} alignItems="center">
        {showBackButton && (
          <IconButton
            size="small"
            onClick={() => {
              if (backButtonCallback) {
                backButtonCallback();
                return;
              }
              window.history.back();
            }}
          >
            <Undo fontSize="small" />
          </IconButton>
        )}
        <Typography
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            fontSize: { sm: 12, md: 16 },
          }}
        >
          {title}
        </Typography>
        <Box
          style={{
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
          }}
        >
          {slotComponent && slotComponent}
        </Box>
      </Box>
      {slotToolbarButtons?.map((button, index) => {
        return (
          <ToolbarButton
            key={index}
            render={
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 1,
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                }}
                {...button.buttonProps}
              >
                {button.children}
              </Button>
            }
          />
        );
      })}
      <Box sx={{ flexGrow: 1 }} />
      {showChangeColumns && (
        <Tooltip title="Columns">
          <ColumnsPanelTrigger render={<ToolbarButton />}>
            <ViewColumnIcon fontSize="small" />
          </ColumnsPanelTrigger>
        </Tooltip>
      )}
      {showFilterNative && (
        <Tooltip title="Filters">
          <FilterPanelTrigger
            render={(props, state) => (
              <ToolbarButton {...props} color="default">
                <Badge
                  badgeContent={state.filterCount}
                  color="primary"
                  variant="dot"
                >
                  <FilterListIcon fontSize="small" />
                </Badge>
              </ToolbarButton>
            )}
          />
        </Tooltip>
      )}
      {showExportNative && <ExportNative />}
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ mx: 0.5 }}
      />
      {slotToolbarIconButtons?.map((button, index) => {
        return (
          <Tooltip key={index} title={button.tooltip}>
            <ToolbarButton size="small" {...button}>
              {button.icon}
            </ToolbarButton>
          </Tooltip>
        );
      })}
      {quickFilter && quickFilter}
      {showQuickFilterNative && <QuickFilterPersistNative />}
    </Toolbar>
  );
}
