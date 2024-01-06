import { recipesApiService } from "../../../services";
import { apiErrors } from "../../../Utils";
import { useQuery } from "react-query";

export const useRecipeContent = (recipeId) => {
  const getRecipeContnet = async () => {
    try {
      const res = await recipesApiService.recipeContent(recipeId);
      return res.data.recipeContent;
    } catch (error) {
      apiErrors(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["recipeContent", recipeId],
    queryFn: getRecipeContnet,
  });

  return { data };
};
