import { useRemoveToken } from "../../../../Hooks";
import { recipesApiService } from "../../../../services";
import { ROUTES } from "../../../../constants";
import { apiErrors } from "../../../../functions";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { useCookies } from "react-cookie";

const useEditRecipe = () => {
  const { checkIfInvalidToken } = useRemoveToken();
  const [cookies, _] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const editRecipe = async (recipe, recipeId) => {
    try {
      const res = await recipesApiService.editRecipe(
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
