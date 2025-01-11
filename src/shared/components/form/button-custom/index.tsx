import { Button, ButtonProps } from "@mui/material";

type TButtonProps = ButtonProps & {};

export default function ButtonCustom(props: TButtonProps) {
  return <Button fullWidth variant="contained" size="small" {...props} />;
}
