import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.string(),
  password: z.string().min(6).max(100),
});

export type TLoginFormSchema = z.input<typeof loginFormSchema>;
