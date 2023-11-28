import { recipeService } from "../../../../services";
import { apiErrors } from "../../../../Functions";
import { useRemoveToken } from "../../../../Hooks";
import { useCookies } from "react-cookie";
import { enqueueSnackbar } from "notistack";

const useDeleteOwnerRecipe = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { checkIfInvalidToken } = useRemoveToken();
  const deleteOwnerRecipe = async (recipeId) => {
    try {
      const res = await recipeService.deleteOwnerRecipe(
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

export default useDeleteOwnerRecipe;
