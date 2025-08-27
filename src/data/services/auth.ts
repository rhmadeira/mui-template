import { api } from "../libs/axios";
import { ILoginRequest } from "../request/auth";
import { TApiResponseModel } from "../response/_base";
import { TLoginResponse } from "../response/auth";

const login = async (payload: ILoginRequest) => {
  const { data } = await api.post<TApiResponseModel<TLoginResponse>>("/login", {
    email: payload.email,
    password: payload.password,
  });
  return data;
};

export const authService = {
  login,
};
