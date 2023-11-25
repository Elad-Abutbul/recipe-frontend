import { recipeService } from "../../../services";
import { apiErrors } from "../../../Functions";
import { useQuery } from "react-query";

const useGetRecipesCategory = (recipesSelected, page) => {
  const getRecipesCategory = async () => {
    try {
      const res = await recipeService.getRecipes(recipesSelected, page);
      return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };
  const { isLoading, data } = useQuery({
    queryFn: getRecipesCategory,
    queryKey: [recipesSelected, page],
  });

  return { isLoading, data };
};

export default useGetRecipesCategory;
