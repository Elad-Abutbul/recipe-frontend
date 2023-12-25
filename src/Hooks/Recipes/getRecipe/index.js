import { useQuery } from "react-query";
import { apiErrors } from "../../../Functions";
import { recipeService } from "../../../services";

const useGetRecipe = (recipeId) => {
  const getRecipe = async () => {
    try {
      const res = await recipeService.getRecipe(recipeId);
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
