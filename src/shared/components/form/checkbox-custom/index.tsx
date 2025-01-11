import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

type TCheckBoxCustomProps = CheckboxProps & {
  label: string;
};

export default function CheckBoxCustom(props: TCheckBoxCustomProps) {
  return (
    <FormControlLabel
      control={
        <Checkbox value="remember" color="primary" size="small" {...props} />
      }
      label={props.label}
    />
  );
}
