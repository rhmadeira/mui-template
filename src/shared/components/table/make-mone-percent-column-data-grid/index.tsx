/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridColDef, GridValueFormatter } from "@mui/x-data-grid";
import { MoneyPercentEditCell } from "../money-percent-edit-cell";
import { Box } from "@mui/material";
import {
  moneyStringToNumber,
  numberToPercentString,
  numberToMoneyString,
} from "@/shared/utils/money";

type Base = {
  field: string;
  headerName?: string;
  width?: number;
  storeAs?: "string" | "number";
  allowNegativeCurrency?: boolean;
};

type WithOperatorField = Base & {
  operatorField: string; // ex.: 'operador' no row
  operador?: never;
};

type WithFixedOperador = Base & {
  operador: "Monetario" | "Percentual";
  operatorField?: never;
};

type Options = WithOperatorField | WithFixedOperador;

function resolveIsPercentFromRow(row: any, operatorField: string): boolean {
  const raw = row?.[operatorField];
  return String(raw ?? "")
    .toUpperCase()
    .startsWith("PERCENT");
}

export function makeMoneyPercentColumnDataGrid({
  field,
  headerName = "Valor",
  width = 140,
  storeAs = "string",
  allowNegativeCurrency = false,
  ...rest
}: Options): GridColDef {
  return {
    field,
    headerName,
    width,
    editable: true,
    align: "center",
    valueFormatter: ((value: any, row: any) => {
      const isPercent =
        "operador" in rest
          ? rest.operador === "Percentual"
          : resolveIsPercentFromRow(
              row,
              (rest as WithOperatorField).operatorField
            );

      if (value === null || value === undefined || value === "") {
        return isPercent ? "0 %" : "0";
      }

      if (typeof value === "string") {
        if (isPercent && !/%/.test(value)) {
          const n = moneyStringToNumber(value);
          return numberToPercentString(n);
        }
        return value;
      }

      if (typeof value === "number") {
        return isPercent
          ? numberToPercentString(value)
          : numberToMoneyString(value);
      }

      return String(value);
    }) as GridValueFormatter<any, any, any, any>,

    valueParser: (val: any, row: any) => {
      const isPercent =
        "operador" in rest
          ? rest.operador === "Percentual"
          : resolveIsPercentFromRow(
              row,
              (rest as WithOperatorField).operatorField
            );

      if (storeAs === "string") {
        const str = String(val ?? "").trim();
        const n = moneyStringToNumber(str);
        return isPercent ? numberToPercentString(n) : numberToMoneyString(n);
      }
      return moneyStringToNumber(String(val));
    },

    renderEditCell: (p) => {
      const row: any = p.row;
      const isPercent =
        "operador" in rest
          ? rest.operador === "Percentual"
          : resolveIsPercentFromRow(
              row,
              (rest as WithOperatorField).operatorField
            );

      return (
        <Box display="flex" justifyContent="center" alignItems="center">
          <MoneyPercentEditCell
            {...p}
            operator={isPercent ? "Percentual" : "Monetario"}
            allowNegativeCurrency={allowNegativeCurrency}
          />
        </Box>
      );
    },

    // 👇 Novo: zera o valor se o operador mudar
    preProcessEditCellProps: (params) => {
      const { props, row } = params;

      const currentIsPercent =
        "operador" in rest
          ? rest.operador === "Percentual"
          : resolveIsPercentFromRow(
              row,
              (rest as WithOperatorField).operatorField
            );

      const newIsPercent =
        "operador" in rest
          ? rest.operador === "Percentual"
          : resolveIsPercentFromRow(
              {
                ...row,
                [(rest as WithOperatorField).operatorField]:
                  row[rest.operatorField],
              },
              (rest as WithOperatorField).operatorField
            );

      // se operador mudou, força o valor para '0'
      if (currentIsPercent !== newIsPercent) {
        return { ...props, value: storeAs === "string" ? "0" : 0 };
      }

      return props;
    },
  };
}
