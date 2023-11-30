import { userService } from "../../../services";
import { apiErrors, getUser } from "../../../Functions";
import { useQuery } from "react-query";

const useGetSavedRecipes = (category = "all-recipes", page = 1) => {
  const user = getUser();
  const savedRecipes = async () => {
    try {
      const res = await userService.savedRecipe(user.id, category, page);
      if (!res.data.message) return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["savedRecipes", category, page],
    queryFn: savedRecipes,
  });

  return { data, isLoading };
};

export default useGetSavedRecipes;
