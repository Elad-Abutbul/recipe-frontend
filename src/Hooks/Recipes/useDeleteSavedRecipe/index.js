import { recipesApiService } from "../../../services";
import { apiErrors, getUser } from "../../../functions";
import { useCookies } from "react-cookie";
import { enqueueSnackbar } from "notistack";
import { useRemoveToken } from "../../../Hooks";

const useDeleteSavedRecipe = () => {
  const [cookies, _] = useCookies(["access_token"]);
  const { checkIfInvalidToken } = useRemoveToken();
  const user = getUser();

  const deleteSavedRecipe = async (recipeId) => {
    try {
      const res = await recipesApiService.deleteSavedRecipe(
        recipeId,
        user.id,
        cookies.access_token
      );
      if (checkIfInvalidToken(res.data)) return;
      enqueueSnackbar(res.data.message, { variant: "success" });
    } catch (error) {
      apiErrors();
    }
  };

  return { deleteSavedRecipe };
};

export default useDeleteSavedRecipe;
