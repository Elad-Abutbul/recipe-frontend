import { recipeService } from "../../../services";
import { apiErrors, getUserId } from "../../../Functions";
import { useQuery } from "react-query";
import { enqueueSnackbar } from "notistack";

const useGetAllOwnerRecipes = () => {
  const userId = getUserId();
  const getAllOwnerRecipes = async () => {
    try {
      const res = await recipeService.getAllOwnerRecipes(userId);
      if (res.data.message)
        return enqueueSnackbar(res.data.message, { variant: "error" });
      return res.data.ownerRecipes ? res.data.ownerRecipes : [];
    } catch (error) {
      apiErrors(error);
    }
  };
  const { isLoading, data: ownerRecipes } = useQuery(
    ["allOwnerRecipes"],
    getAllOwnerRecipes
  );
  return { isLoading, ownerRecipes };
};
export default useGetAllOwnerRecipes;
