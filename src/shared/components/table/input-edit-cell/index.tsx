/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridRenderEditCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import InputBase from "../../input/input-base";

export const InputEditCell = (
  params: GridRenderEditCellParams<any, string>
) => {
  const { id, field, value = "", api } = params;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <InputBase
        value={value}
        onChange={(e) =>
          api.setEditCellValue({ id, field, value: e.target.value })
        }
        onBlur={() => api.stopCellEditMode({ id, field })}
      />
    </Box>
  );
};
