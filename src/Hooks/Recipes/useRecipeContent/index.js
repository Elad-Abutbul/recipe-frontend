import { useQuery } from "react-query";
import { apiErrors } from "../../../Functions";
import { recipeService } from "../../../services";

const useRecipeContent = (recipeId) => {
  const getRecipeContnet = async () => {
    try {
      const res = await recipeService.recipeContent(recipeId);
      return res.data.recipeContent;
    } catch (error) {
      apiErrors(error);
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["recipeContent", recipeId],
    queryFn: getRecipeContnet,
  });

  return { isLoading, data };
};
export default useRecipeContent;
