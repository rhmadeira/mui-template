import { api } from "../../libs/axios";
import { TApiResponseModel } from "../../types/default";
import { TExample } from "../../types/example";

interface IParams {
  id: string;
}
export const getById = async ({ id }: IParams) => {
  const { data } = await api.get<TApiResponseModel<TExample>>(`/example/${id}`);
  return data;
};
