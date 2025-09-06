export type TApiResponseModel<T> = {
  value: T;
  count: number;
  hasSuccess: boolean;
  hasError: boolean;
  errors: unknown[];
  httpStatusCode: string;
  dataRequisicao: string;
};

export type ISvg = {
  width: number;
  height: number;
};
