/* eslint-disable @typescript-eslint/no-explicit-any */
// MoneyPercentEditCell.tsx
import { GridRenderEditCellParams, GridValidRowModel } from "@mui/x-data-grid";
import InputMoneyPercent from "../../input/input-money-percent";

type BaseProps = {
  allowNegativeCurrency?: boolean;
};

// A) operador fixo via prop
type WithFixedOperator = BaseProps & {
  operator: "Percentual" | "Monetario";
  operatorField?: never;
};

// B) operador lido do row (ex.: row.operador)
type WithOperatorField = BaseProps & {
  operatorField: string;
  operator?: never;
};

type CellParams<R extends GridValidRowModel = GridValidRowModel> =
  GridRenderEditCellParams<R, string>;

type Props<R extends GridValidRowModel = GridValidRowModel> = CellParams<R> &
  (WithFixedOperator | WithOperatorField);

function resolveModeFromRow(
  row: GridValidRowModel,
  operatorField: string
): "percent" | "currency" {
  const raw = (row as any)?.[operatorField];
  const upper = String(raw ?? "").toUpperCase();
  return upper.startsWith("PERCENT") ? "percent" : "currency";
}

export function MoneyPercentEditCell<
  R extends GridValidRowModel = GridValidRowModel
>(props: Props<R>) {
  const { id, field, value, api, row, allowNegativeCurrency = false } = props;

  const mode: "percent" | "currency" =
    "operator" in props
      ? props.operator === "Percentual"
        ? "percent"
        : "currency"
      : resolveModeFromRow(row, (props as WithOperatorField).operatorField);

  return (
    <InputMoneyPercent
      mode={mode}
      allowNegativeCurrency={allowNegativeCurrency}
      value={value ?? ""}
      autoFocus
      onValueChange={(v) => {
        api.setEditCellValue({ id, field, value: v.formattedValue ?? "" });
      }}
      onBlur={() => api.stopCellEditMode({ id, field })}
      size="small"
      fullWidth
    />
  );
}
