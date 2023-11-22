import { recipeService } from "../../../services";
import { apiErrors } from "../../../Functions";
import { useQuery } from "react-query";

const useGetRecipes = (recipesSelected) => {
  const getRecipes = async () => {
    try {
      const res = await recipeService.getRecipes(recipesSelected);
      return res.data.recipes;
    } catch (error) {
      apiErrors(error);
    }
  };

  const { isLoading, data: recipes } = useQuery(
    ["allOwnerRecipes"],
    getRecipes
  );

  return { isLoading, recipes };
};

export default useGetRecipes;
