/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxProps, Paper, Skeleton, Stack, useTheme } from "@mui/material";
import {
  DataGrid as MuiDataGrid,
  DataGridProps,
  GridFilterItem,
  GridLogicOperator,
  GridRowId,
  GridRowModesModel,
  GridRowModes,
  GridActionsCellItem,
  GridEventListener,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { ContainerDataGrid } from "./styled";
import { useState } from "react";
import { Cancel, Delete, Edit, Save } from "@mui/icons-material";
import { usePreferenceStore } from "@/data/store/preference";

interface ICustomDataGridProps extends DataGridProps {
  containerProps?: BoxProps;
  slotTopComponent?: React.ReactNode;
  onSaveRow?: (row: any) => void;
  onDeleteRow?: (id: GridRowId) => void;
  enableEditActions?: boolean;
}

export interface IFilterModel {
  items: GridFilterItem[];
  logicOperator?: GridLogicOperator | undefined;
  quickFilterValues?: string[] | undefined;
  quickFilterLogicOperator?: GridLogicOperator | undefined;
}

export default function DataGrid({
  containerProps,
  slotTopComponent,
  onSaveRow,
  onDeleteRow,
  enableEditActions = false,
  ...props
}: ICustomDataGridProps) {
  const theme = useTheme();
  const {
    sx,
    slots,
    initialState,
    columns: propColumns = [],
    editMode: propEditMode,
    processRowUpdate: propProcessRowUpdate,
    rowModesModel: propRowModesModel,
    onRowModesModelChange: propOnRowModesModelChange,
    ...rest
  } = props;
  const { sx: sxContainer } = containerProps || {};
  const density = usePreferenceStore((state) => state.densityDataGrid);
  const setDensityDataGrid = usePreferenceStore(
    (state) => state.setDensityDataGrid
  );

  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const processRowUpdateInternal = (newRow: any) => {
    onSaveRow?.(newRow);
    return newRow;
  };

  const defaultActionColumn = {
    field: "__actions",
    type: "actions",
    headerName: "Ações",
    width: 100,
    getActions: ({ id }: { id: GridRowId }) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
      return isInEditMode
        ? [
            <GridActionsCellItem
              icon={<Save />}
              label="Salvar"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<Cancel />}
              label="Cancelar"
              onClick={handleCancelClick(id)}
            />,
          ]
        : [
            <GridActionsCellItem
              icon={<Edit />}
              label="Editar"
              onClick={handleEditClick(id)}
            />,
            <GridActionsCellItem
              icon={<Delete />}
              label="Excluir"
              onClick={() => onDeleteRow?.(id)}
            />,
          ];
    },
  } as const;

  const hasActions = propColumns.some(
    (c) => c.type === "actions" || c.field === "__actions"
  );
  const mergedColumns =
    enableEditActions && !hasActions
      ? [...propColumns, defaultActionColumn]
      : propColumns;

  const finalEditMode = enableEditActions
    ? propEditMode ?? "row"
    : propEditMode;
  const finalProcessRowUpdate = enableEditActions
    ? processRowUpdateInternal
    : propProcessRowUpdate;
  const finalRowModesModel = enableEditActions
    ? rowModesModel
    : propRowModesModel;
  const finalOnRowModesModelChange = enableEditActions
    ? setRowModesModel
    : propOnRowModesModelChange;

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };
  const finalOnRowEditStop =
    enableEditActions && !props.onRowEditStop
      ? handleRowEditStop
      : props.onRowEditStop;

  const finalGetRowId = props.getRowId ?? ((row: any) => row.id);

  return (
    <ContainerDataGrid
      component={Paper}
      sx={{
        width: "100%",
        ...sxContainer,
      }}
      {...containerProps}
    >
      {slotTopComponent}
      <MuiDataGrid
        columns={mergedColumns}
        editMode={finalEditMode}
        processRowUpdate={finalProcessRowUpdate}
        rowModesModel={finalRowModesModel}
        onRowModesModelChange={finalOnRowModesModelChange}
        onRowEditStop={finalOnRowEditStop}
        disableColumnMenu
        hideFooterSelectedRowCount
        filterDebounceMs={1000}
        getRowId={finalGetRowId}
        showToolbar={true}
        pageSizeOptions={[15, 20, 50, 100]}
        onDensityChange={(density) => {
          setDensityDataGrid(density);
        }}
        slots={{
          loadingOverlay() {
            return (
              <Stack
                spacing={0}
                padding={0.5}
                direction={"column"}
                bgcolor={"#fff"}
              >
                {[...Array(rest.paginationModel?.pageSize || 10)].map(
                  (_, index) => (
                    <Stack key={index}>
                      <Skeleton
                        key={index}
                        height={
                          density == "compact"
                            ? 40
                            : density == "standard"
                            ? 50
                            : 70
                        }
                      />
                    </Stack>
                  )
                )}
              </Stack>
            );
          },
          ...slots,
        }}
        initialState={{
          density,
          ...initialState,
        }}
        sx={{
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .super-app-theme--header": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
          width: "100%",
          "--DataGrid-overlayHeight": "500px",
          border: "none",
          ...sx,
        }}
        {...rest}
      />
    </ContainerDataGrid>
  );
}
