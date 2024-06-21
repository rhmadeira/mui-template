import { z } from "zod";
import { formSchema } from "../schemas/example";

export type TExample = z.input<typeof formSchema>;
