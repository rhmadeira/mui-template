/* eslint-disable @typescript-eslint/no-explicit-any */
import useGetEnumExample from "@/data/hooks/get-enumExample";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { GridRenderEditCellParams } from "@mui/x-data-grid";

export const OperadorSelectEditCell = (
  params: GridRenderEditCellParams<any, string>
) => {
  const { id, field, value = "", api } = params;
  const example = useGetEnumExample({});

  return (
    <Box display="flex" alignItems="center" width={"100%"}>
      <FormControl fullWidth size="small" focused={false}>
        <InputLabel id="operador">Operador</InputLabel>
        <Select
          size="small"
          fullWidth
          labelId="operador"
          label="Operador"
          value={value}
          onChange={(e) =>
            api.setEditCellValue({ id, field, value: e.target.value })
          }
          onBlur={() => api.stopCellEditMode({ id, field })}
          MenuProps={{
            PaperProps: { sx: { borderRadius: 1.5, mt: 0.5, boxShadow: 3 } },
          }}
        >
          <MenuItem value="">
            <em>Sem valor</em>
          </MenuItem>
          {example.data?.value.map((op) => (
            <MenuItem
              key={op.nome}
              value={op.nome}
              sx={{ fontSize: 14, py: 0.75 }}
            >
              {op.descricao ?? op.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
