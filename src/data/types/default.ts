export type TApiResponseModel<T> = {
  value: T;
  count: number;
  hasSuccess: boolean;
  hasError: boolean;
  errors: unknown[];
  httpStatusCode: string;
  dataRequisicao: Date;
};
