import { createTheme } from "@mui/material";
import { ptBR } from "@mui/material/locale";
import { ptBR as pickerBR } from "@mui/x-data-grid/locales";

export const darkTheme = createTheme(
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#81C784", // Verde claro
        dark: "#4CAF50", // Verde médio (originalmente main no light)
        light: "#A5D6A7", // Verde mais suave
        contrastText: "#000000", // Texto preto para contraste em verde claro
      },
      secondary: {
        main: "#FFB74D", // Laranja claro
        dark: "#FF9800", // Laranja médio (originalmente main no light)
        light: "#FFD180", // Laranja mais suave
        contrastText: "#000000", // Texto preto para contraste
      },
      background: {
        default: "#121212", // Fundo bem escuro (padrão para modo dark)
        paper: "#1E1E1E", // Fundo ligeiramente mais claro para cartões/papéis
      },
    },
  },
  ptBR,
  pickerBR
);
