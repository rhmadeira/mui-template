import { createTheme } from "@mui/material";
import { cyan, grey } from "@mui/material/colors";
import { ptBR } from "@mui/material/locale";
import { ptBR as pickerBR } from "@mui/x-data-grid/locales";

export const darkTheme = createTheme(
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#02BDDA",
        dark: "#03263a",
        light: "#49769a",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#49769a",
        dark: "#49769a",
        light: cyan[500],
        contrastText: "#ffffff",
      },
      background: {
        default: grey[800],
        paper: grey[900],
      },
    },
    typography: {
      h6: {
        fontWeight: 500,
        color: "#ffffff",
        fontSize: "0.75rem",
      },
      h5: {
        fontSize: "0.875rem",
        color: "#ffffff",
        fontWeight: 500,
      },
      h4: {
        fontSize: "1rem",
        color: "#ffffff",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.25rem",
        color: "#ffffff",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.5rem",
        color: "#ffffff",
        fontWeight: 700,
      },
      h1: {
        fontSize: "2.125rem",
        color: "#ffffff",
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: "#ffffff",
      },
      subtitle2: {
        fontSize: "0.75rem",
        fontWeight: 400,
        color: "#ffffff",
      },
      caption: {
        fontSize: "0.75rem",
        color: "#ffffff",
        fontWeight: 400,
      },
      body1: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "1.334em",
        color: "#ffffff",
      },
      body2: {
        letterSpacing: "0em",
        fontWeight: 400,
        lineHeight: "1.5em",
        color: "#ffffff",
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
            background: "#2a2a2a",
            borderRadius: 8,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4a4a4a",
            },
            "&:hover $notchedOutline": {
              borderColor: "#5a5a5a",
            },
            "&.MuiInputBase-multiline": {
              padding: 1,
            },
          },
          input: {
            fontWeight: 500,
            background: "#2a2a2a",
            padding: "15.5px 14px",
            height: "0.2rem",
            borderRadius: 8,
            "&.MuiInputBase-inputSizeSmall": {
              // padding: "10px 14px",
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
            // borderColor: "#4a4a4a",
            // opacity: 1,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            color: "#ffffff",
            background: "#2a2a2a",
          },
        },
      },
    },
  },
  ptBR,
  pickerBR
);
