import { keyExample } from "@/shared/constants/key";
import {
  keepPreviousData,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { exampleService } from "../services/example";
import { TApiResponseModel } from "../response/_base";

interface IUseGetEnumExample {
  nome?: string;
  documento?: string;
  options?: Omit<
    UseQueryOptions<
      TApiResponseModel<any[]>,
      Error,
      TApiResponseModel<any[]>,
      [keyExample.example]
    >,
    "queryKey" | "queryFn"
  >;
}

export default function useGetEnumExample({ options }: IUseGetEnumExample) {
  const enumExample = useQuery({
    queryKey: [keyExample.example],
    queryFn: exampleService.example,
    staleTime: 1000 * 60 * 60,
    placeholderData: keepPreviousData,
    enabled: true,
    ...options,
  });
  return enumExample;
}
