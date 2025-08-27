import { useThemeStore } from "@/data/store/theme";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";
import { ThemeProvider } from "@mui/material";

export default function ThemeAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDark = useThemeStore((state) => state.isDark);
  const theme = isDark ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
