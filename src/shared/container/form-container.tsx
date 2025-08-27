import { Box } from "@mui/material";

interface IFormContainerProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export default function FormContainer({
  onSubmit,
  children,
}: IFormContainerProps) {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      {children}
    </Box>
  );
}
