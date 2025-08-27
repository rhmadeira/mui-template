import { Theme, useMediaQuery } from "@mui/material";

export default function useMediaQueryCustom() {
  const smUp = useMediaQuery((t: Theme) => t.breakpoints.up("sm"));
  const mdUp = useMediaQuery((t: Theme) => t.breakpoints.up("md"));
  const lgUp = useMediaQuery((t: Theme) => t.breakpoints.up("lg"));
  const xlUp = useMediaQuery((t: Theme) => t.breakpoints.up("xl"));

  return {
    smUp,
    mdUp,
    lgUp,
    xlUp,
  };
}
