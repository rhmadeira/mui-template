import { TApiResponseModel } from "../response/_base";

const example = async () => {
  const mock: TApiResponseModel<{ nome: string; descricao?: string }[]> = {
    value: [],
    count: 0,
    dataRequisicao: "2024-06-20T12:00:00Z",
    errors: [],
    hasError: false,
    hasSuccess: true,
    httpStatusCode: "200",
  };
  return mock;
};

export const exampleService = {
  example,
};
