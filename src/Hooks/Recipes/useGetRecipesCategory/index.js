import { recipeService } from "../../../services";
import { apiErrors } from "../../../Functions";
import { useQuery } from "react-query";

const useGetRecipesCategory = (category, page) => {
  const getRecipesCategory = async () => {
    debugger;
    try {
      const res = await recipeService.getRecipes(category, page);
      return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };
  const { isLoading, data } = useQuery({
    queryFn: getRecipesCategory,
    queryKey: ["home", category, page],
  });

  return { isLoading, data };
};

export default useGetRecipesCategory;
