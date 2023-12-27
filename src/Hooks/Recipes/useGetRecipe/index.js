import { useQuery } from "react-query";
import { apiErrors } from "../../../Functions";
import { recipesApiService } from "../../../services";

const useGetRecipe = (recipeId) => {
  const getRecipe = async () => {
    try {
      const res = await recipesApiService.getRecipe(recipeId);
      return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: getRecipe,
  });
  return { isLoading, data };
};

export default useGetRecipe;
