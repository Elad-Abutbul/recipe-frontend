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

  const { data } = useQuery({
    queryKey: ["recipeContent", recipeId],
    queryFn: getRecipeContnet,
  });

  return { data };
};
export default useRecipeContent;
