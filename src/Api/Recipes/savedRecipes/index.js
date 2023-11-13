import { userService } from "../../../services";
import { apiErrors, getUserId } from "../../../Functions";
import { useQuery } from "react-query";

const useGetSavedRecipes = () => {
  const userId = getUserId();
  const fetchSavedRecipes = async () => {
    try {
      const res = await userService.savedRecipe(userId);
      if (!res.data.message) return res.data.savedRecipes;
    } catch (error) {
      apiErrors(error);
    }
  };
  const { data: savedRecipes, isLoading } = useQuery({
    queryKey: ["savedRecipes"],
    queryFn: fetchSavedRecipes,
  });

  return { savedRecipes, isLoading };
};

export default useGetSavedRecipes;
