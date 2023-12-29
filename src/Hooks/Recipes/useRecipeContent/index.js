import { useQuery } from "react-query";
import { apiErrors } from "../../../functions";
import { recipesApiService } from "../../../services";

const useRecipeContent = (recipeId) => {
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
export default useRecipeContent;
