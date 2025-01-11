export type TApiResponseModel<T> = {
  value: T;
  count: number;
  hasSuccess: boolean;
  hasError: boolean;
  errors: unknown[];
  httpStatusCode: string;
  dataRequisicao: Date;
};

export type ISvg = {
  width: number;
  height: number;
};
