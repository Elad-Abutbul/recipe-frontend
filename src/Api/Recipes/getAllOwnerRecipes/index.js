import { useQuery } from "react-query";
import { localStorageService, recipeService } from "../../../services";
import { enqueueSnackbar } from "notistack";

const useGetAllOwnerRecipes = () => {

  const userId = localStorageService.getItem("userId");
  
  const getAllOwnerRecipes = async () => {
    try {
      const res = await recipeService.getAllOwnerRecipes(userId);
      if (res.data.message)
        return enqueueSnackbar(res.data.message, { variant: "error" });
      return res.data.ownerRecipes ? res.data.ownerRecipes : [];
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Try Later", { variant: "error" });
    }
  };
  const { isLoading, data: ownerRecipes } = useQuery(
    ["allOwnerRecipes"],
    getAllOwnerRecipes
  );
  return { isLoading, ownerRecipes };
};
export default useGetAllOwnerRecipes;
