import { useQuery } from "react-query";
import { recipesApiService } from "../../../services";

const useGetComments = (recipeId) => {
  const getComments = async () => {
    const res = await recipesApiService.getComments(recipeId);
    return res.data;
  };
  const { isLoading, data } = useQuery(
    ["recipeComments", recipeId],
    getComments
  );
  return { isLoading, data };
};

export default useGetComments;
