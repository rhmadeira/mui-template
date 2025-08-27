import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { LogoLight } from "@/shared/icons/logo-ligth";
import { LogoDark } from "@/shared/icons/logo-dark";
import InputCustom from "../form/input-custom";
import ButtonCustom from "../form/button-custom";
import CheckBoxCustom from "../form/checkbox-custom";
import { CardStyled, SignInContainer } from "./styles";
import { useThemeStore } from "@/data/store/theme";
import { Controller, useFormContext } from "react-hook-form";
import { TLoginFormSchema } from "@/data/schemas/auth";

export default function SignIn() {
  const form = useFormContext<TLoginFormSchema>();
  const isDark = useThemeStore((x) => x.isDark);

  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <CssBaseline />
      <CardStyled variant="outlined">
        <Box margin={"0 auto"}>
          {isDark ? (
            <LogoDark width={64} height={34} />
          ) : (
            <LogoLight width={64} height={34} />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Controller
              name="email"
              control={form.control}
              defaultValue=""
              render={({ field }) => (
                <InputCustom
                  id="email"
                  error={!!form.formState.errors.email}
                  helperText={form.formState.errors.email?.message}
                  type="email"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={!!form.formState.errors.email ? "error" : "primary"}
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Controller
              name="password"
              control={form.control}
              defaultValue=""
              render={({ field }) => (
                <InputCustom
                  error={!!form.formState.errors.password}
                  helperText={form.formState.errors.password?.message}
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={!!form.formState.errors.password ? "error" : "primary"}
                  {...field}
                />
              )}
            />
          </FormControl>
          <CheckBoxCustom label="Lembrar-me" />
          <ButtonCustom type="submit" children="Entrar" />
        </Box>
      </CardStyled>
    </SignInContainer>
  );
}
