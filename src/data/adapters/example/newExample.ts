import { INewExamplePayload } from "@/data/services/example/newExample";

interface IExampleToAdapter {}

export function newExample(
  input: IExampleToAdapter
): Promise<INewExamplePayload> {
  console.log("newExample", input);
  return Promise.resolve({} as INewExamplePayload);
}
