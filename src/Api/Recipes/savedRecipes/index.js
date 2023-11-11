import { localStorageService, userService } from "../../../services";
import { enqueueSnackbar } from "notistack";
import { useQuery } from "react-query";

const userId = localStorageService.getItem("userId");

const useGetSavedRecipes = () => {
  const fetchSavedRecipes = async () => {
    try {
      const res = await userService.savedRecipe(userId);
      if (!res.data.message) return res.data.savedRecipes;
    } catch (error) {
      enqueueSnackbar("Try Later", { variant: "warning" });
      console.error(error);
    }
  };
  const { data: savedRecipes, isLoading } = useQuery({
    queryKey: ["savedRecipes"],
    queryFn: fetchSavedRecipes,
  });

  return { savedRecipes, isLoading };
};

export default useGetSavedRecipes;
