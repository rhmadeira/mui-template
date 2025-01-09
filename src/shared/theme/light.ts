import { createTheme } from "@mui/material";
import { cyan, grey } from "@mui/material/colors";
import { ptBR } from "@mui/material/locale";
import { ptBR as pickerBR } from "@mui/x-data-grid/locales";

export const lightTheme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#0590D1",
        dark: "#03263a",
        light: "#49769a",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#f7efd8",
        dark: cyan[800],
        light: cyan[500],
        contrastText: "#ffffff",
      },
      background: {
        default: grey[300],
        paper: grey[200],
      },
    },
    typography: {
      h6: {
        fontWeight: 500,
        color: "#121926",
        fontSize: "0.75rem",
      },
      h5: {
        fontSize: "0.875rem",
        color: "#121926",
        fontWeight: 500,
      },
      h4: {
        fontSize: "1rem",
        color: "#121926",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.25rem",
        color: "#121926",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.5rem",
        color: "#121926",
        fontWeight: 700,
      },
      h1: {
        fontSize: "2.125rem",
        color: "#121926",
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: "#121926",
      },
      subtitle2: {
        fontSize: "0.75rem",
        fontWeight: 400,
        color: "#697586",
      },
      caption: {
        fontSize: "0.75rem",
        color: "#697586",
        fontWeight: 400,
      },
      body1: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "1.334em",
      },
      body2: {
        letterSpacing: "0em",
        fontWeight: 400,
        lineHeight: "1.5em",
        color: "#364152",
      },
      button: {
        textTransform: "capitalize",
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
          rounded: {
            borderRadius: 8,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            background: "#f8fafc",
            borderRadius: 8,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#b7c2d1",
            },
            "&:hover $notchedOutline": {
              borderColor: "#eef2f6",
            },
            "&.MuiInputBase-multiline": {
              padding: 1,
            },
          },
          input: {
            fontWeight: 500,
            background: "#f8fafc",
            padding: "15.5px 14px",
            height: "0.2rem",
            borderRadius: 8,
            "&.MuiInputBase-inputSizeSmall": {
              // padding: "6px 10px",
              "&.MuiInputBase-inputAdornedStart": {
                paddingLeft: 0,
              },
            },
          },
          inputAdornedStart: {
            paddingLeft: 4,
          },
          notchedOutline: {
            borderRadius: 8,
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            ".MuiAutocomplete-input": {
              fontSize: "0.7  5rem",
              height: "1.1rem",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            ".MuiSelect-select": {
              padding: "7px 14px",
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            // borderColor: "#e3e8ef",
            // opacity: 1,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            color: "#ffffff",
            background: "#364152",
          },
        },
      },
    },
  },
  ptBR,
  pickerBR
);
