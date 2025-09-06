import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerDataGrid = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));
