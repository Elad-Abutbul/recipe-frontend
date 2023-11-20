import useRemoveToken from "../../removeToken";
import { recipeService } from "../../../services";
import { ROUTES } from "../../../constants";
import { apiErrors } from "../../../Functions";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { enqueueSnackbar } from "notistack";

const useCreateRecipe = () => {
  const { checkIfInvalidToken } = useRemoveToken();
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token"]);

  const createRecipe = async (recipe) => {
    try {
      const res = await recipeService.createRecipe(
        recipe,
        cookies.access_token
      );
      if (checkIfInvalidToken(res.data)) return;
      enqueueSnackbar(res.data.message, { variant: "success" });
      navigate(ROUTES.HOME);
    } catch (error) {
      apiErrors(error);
    }
  };
  return { createRecipe };
};
export default useCreateRecipe;
