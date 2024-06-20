import { z } from "zod";
import { exampleSchema } from "../schemas/example";

export type TExample = z.input<typeof exampleSchema>;
