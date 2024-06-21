import * as z from "zod";

export const formSchema = z.object({
  id: z.string(),
  name: z.string(),
  idade: z.number().optional(),
  dataNascimento: z.string(),
});

// const example = exampleSchemaTransform.safeParse({
//     id: "1",
//     name: "John Doe",
//     idade: 30,
//     dataNascimento: "1990-01-01",
//   });
//   if (example.success) console.log(example);
