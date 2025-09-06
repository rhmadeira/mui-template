import React, { forwardRef } from "react";
import { TextFieldProps } from "@mui/material";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import InputBase from "../input-base";

type Mode = "currency" | "percent";

type InputMoneyPercentProps = Omit<
  NumericFormatProps<TextFieldProps>,
  | "customInput"
  | "thousandSeparator"
  | "decimalSeparator"
  | "decimalScale"
  | "prefix"
  | "suffix"
> & {
  mode: Mode;
  maxPercent?: number; // default 100
  allowNegativeCurrency?: boolean; // default false
};

const InputMoneyPercent = forwardRef<HTMLInputElement, InputMoneyPercentProps>(
  ({ mode, maxPercent = 100, allowNegativeCurrency = false, ...rest }, ref) => {
    const common = {
      customInput: InputBase,
      thousandSeparator: ".",
      decimalSeparator: ",",
      decimalScale: 2,
      fixedDecimalScale: true,
      // faz o ref do Controller chegar ao <input>
      getInputRef: (el: HTMLInputElement | null) => {
        if (!ref) return;
        if (typeof ref === "function") ref(el);
        else
          (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
      },
    } as const;

    if (mode === "percent") {
      return (
        <NumericFormat
          {...common}
          {...rest}
          allowNegative={false}
          suffix=" %"
          isAllowed={(values) => {
            const v = values.floatValue;
            return v === undefined || (v >= 0 && v <= maxPercent);
          }}
        />
      );
    }

    // currency
    return (
      <NumericFormat
        {...common}
        {...rest}
        allowNegative={allowNegativeCurrency}
        prefix="R$ "
      />
    );
  }
);

export default InputMoneyPercent;
