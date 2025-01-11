import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { LogoLight } from "@/shared/icons/logo-ligth";
import useMediaQuery from "@/data/hooks/use-media-query";
import { useThemeApp } from "@/data/store/theme-store";
import { LogoDark } from "@/shared/icons/logo-dark";
import InputCustom from "../form/input-custom";
import ButtonCustom from "../form/button-custom";
import CheckBoxCustom from "../form/checkbox-custom";
import { Controller, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { CardStyled, SignInContainer } from "./styles";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Senha Obrigatória" }),
});

export type TLoginSchema = Zod.input<typeof loginSchema>;

interface ISignInProps {
  form: UseFormReturn<TLoginSchema>;
  login: (payload: TLoginSchema) => void;
}

export default function SignIn({ login, form }: ISignInProps) {
  const isDak = useThemeApp((x) => x.isDark);
  const { smUp } = useMediaQuery();

  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <CssBaseline />
      <CardStyled variant="outlined">
        <Box margin={"0 auto"}>
          {isDak ? (
            <LogoDark width={64} height={34} />
          ) : (
            <LogoLight width={64} height={34} />
          )}
        </Box>
        <Box
          component="form"
          onSubmit={form.handleSubmit(login)}
          noValidate
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
