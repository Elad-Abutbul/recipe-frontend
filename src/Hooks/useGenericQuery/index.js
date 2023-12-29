import { useQuery } from "react-query";
import { genericApiFunction } from "../../Functions";

const useGenericQuery = (queryKey, queryKeyParmas, service) => {
  debugger
  const { isLoading, data } = useQuery({
    queryFn: () => genericApiFunction(service, queryKeyParmas),
    queryKey: [queryKey, { ...queryKeyParmas }],
  });

  return { isLoading, data };
};

export default useGenericQuery;
