import { recipesApiService } from "../../../../services";
import { useCookies } from "react-cookie";
import { enqueueSnackbar } from "notistack";
import { useRemoveToken } from "../../../../Hooks";
import { apiErrors } from "../../../../Utils";
export const useDeleteOwnerRecipe = () => {
  const [cookies, _] = useCookies(["access_token"]);
  const { checkIfInvalidToken } = useRemoveToken();
  const deleteOwnerRecipe = async (recipeId) => {
    try {
      const res = await recipesApiService.deleteOwnerRecipe(
        recipeId,
        cookies.access_token
      );
      if (checkIfInvalidToken(res.data)) return;
      if (res.data.message === "Recipe Deleted Successfully.") {
        return enqueueSnackbar(res.data.message, { variant: "success" });
      }
      return enqueueSnackbar(res.data.message, { variant: "error" });
    } catch (error) {
      apiErrors(error);
    }
  };

  return { deleteOwnerRecipe };
};

