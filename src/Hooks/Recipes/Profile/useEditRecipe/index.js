import { useRemoveToken } from "../../../../Hooks";
import { recipeService } from "../../../../services";
import { ROUTES } from "../../../../constants";
import { apiErrors } from "../../../../Functions";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { useCookies } from "react-cookie";

const useEditRecipe = () => {
  const { checkIfInvalidToken } = useRemoveToken();
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const editRecipe = async (recipe, recipeId) => {
    try {
      const res = await recipeService.editRecipe(
        recipe,
        recipeId,
        cookies.access_token
      );
      if (checkIfInvalidToken(res.data)) return;
      enqueueSnackbar(res.data.message, { variant: "success" });
      navigate(`${ROUTES.PROFILE}/${ROUTES.EDIT_RECIPES}`);
    } catch (error) {
      apiErrors(error);
    }
  };
  return { editRecipe };
};
export default useEditRecipe;
