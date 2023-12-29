import { useQuery } from "react-query";
import { genericApiFunction } from "../../functions";

const useGenericQuery = (queryKey, queryKeyParmas, service) => {
  const { isLoading, data } = useQuery({
    queryFn: () => genericApiFunction(service, queryKeyParmas),
    queryKey: [queryKey, queryKeyParmas],
  });

  return { isLoading, data };
};

export default useGenericQuery;
