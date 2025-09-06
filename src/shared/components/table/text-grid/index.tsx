import { Stack, Typography } from "@mui/material";

export default function TextGrid({
  text,
  disabled,
}: {
  text: string;
  disabled?: boolean;
}) {
  return (
    <Stack
      direction={"row"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={0}
    >
      <Typography
        variant="body1"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
          color: disabled ? "text.disabled" : "text.primary",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
}
