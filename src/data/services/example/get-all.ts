import { api } from "../../libs/axios";
import { TApiResponseModel } from "../../types/default";
import { TExample } from "../../types/example";
import { IPaginationParams } from "../interface/paginationParams";

interface IParams extends IPaginationParams {}

export const getAll = async ({ page, take }: IParams) => {
  const { data } = await api.get<TApiResponseModel<TExample[]>>("/example", {
    params: {
      page,
      take,
    },
  });
  return data;
};
