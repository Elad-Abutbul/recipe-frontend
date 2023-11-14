import { userService } from "../../../services";
import { apiErrors, getUserId } from "../../../Functions";
import { useQuery } from "react-query";

const useGetSavedRecipes = () => {
  const userId = getUserId();
  const savedRecipes = async () => {
    try {
      const res = await userService.savedRecipe(userId);
      if (!res.data.message) return res.data.savedRecipes;
    } catch (error) {
      apiErrors(error);
    }
  };
  const { data: recipes, isLoading } = useQuery({
    queryKey: ["savedRecipes"],
    queryFn: savedRecipes,
  });

  return { recipes, isLoading };
};

export default useGetSavedRecipes;
