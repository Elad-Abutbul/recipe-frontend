import useRemoveToken from "../../removeToken";
import { recipeService } from "../../../services";
import { apiErrors, getUserId } from "../../../Functions";
import { useCookies } from "react-cookie";
import { enqueueSnackbar } from "notistack";

const useDeleteSavedRecipe = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { checkIfInvalidToken } = useRemoveToken();
  const userId = getUserId();

  const fetchDeleteSavedRecipe = async (recipeId) => {
    try {
      const res = await recipeService.deleteSavedRecipe(
        recipeId,
        userId,
        cookies.access_token
      );

      if (checkIfInvalidToken(res.data)) return;
      enqueueSnackbar(res.data.message, { variant: "success" });
    } catch (error) {
      apiErrors();
    }
  };

  return { fetchDeleteSavedRecipe };
};

export default useDeleteSavedRecipe;
