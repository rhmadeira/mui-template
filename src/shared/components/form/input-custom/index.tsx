import { TextField, TextFieldProps } from "@mui/material";

type TInputCustomProps = TextFieldProps & {};

export default function InputCustom(props: TInputCustomProps) {
  return <TextField size="small" {...props} />;
}
