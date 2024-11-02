export interface INewExamplePayload {}

export async function newExample(payload: INewExamplePayload) {
  console.log("newExample", payload);
  return Promise.resolve({} as INewExamplePayload);
}
