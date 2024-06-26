import * as z from "zod";

export const formSchema = z.object({
  id: z.string(),
  name: z.string(),
  idade: z.number().optional(),
  dataNascimento: z.string(),
});

export type FormSchema = z.input<typeof formSchema>;
