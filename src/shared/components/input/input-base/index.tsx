import { forwardRef } from "react";
import { Skeleton, TextField, TextFieldProps, useTheme } from "@mui/material";

type CustomInputProps = TextFieldProps & {
  isLoading?: boolean;
};

const InputBase = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ isLoading, ...rest }, ref) => {
    const theme = useTheme();

    if (isLoading)
      return (
        <Skeleton variant="rectangular" width="100%">
          <TextField
            variant="outlined"
            fullWidth
            color="primary"
            size="small"
          />
        </Skeleton>
      );

    return (
      <TextField
        variant="outlined"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            { borderColor: theme.palette.secondary.main },
        }}
        color="primary"
        size="small"
        // o ref do NumberFormat precisa chegar no <input/>
        inputRef={ref}
        {...rest}
      />
    );
  }
);

export default InputBase;
