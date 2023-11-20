import { userService } from "../../../services";
import { apiErrors, getUser } from "../../../Functions";
import { useQuery } from "react-query";

const useGetSavedRecipes = () => {
  const user = getUser();
  const savedRecipes = async () => {
    try {
      const res = await userService.savedRecipe(user.id);
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
