import { api } from "../libs/axios";
import { TApiResponseModel } from "../types/default";
import { TExample } from "../types/example";
import { IExampleParams } from "./interfaces/example";

async function getExample({ page = 0, take }: IExampleParams) {
  const { data } = await api.get<TApiResponseModel<TExample[]>>("/example", {
    params: {
      take,
      offset: page * take,
    },
  });
  return data;
}

export const exampleService = {
  getExample,
};
