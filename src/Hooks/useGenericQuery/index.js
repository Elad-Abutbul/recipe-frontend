import { useQuery } from "react-query";
import { genericApiRequest } from "../../Utils";

export const useGenericQuery = (queryKey, queryKeyParmas, service) => {
  debugger
  const { isLoading, data } = useQuery({
    queryFn: () => genericApiRequest(service, queryKeyParmas),
    queryKey: [queryKey, queryKeyParmas],
  });

  return { isLoading, data };
};

