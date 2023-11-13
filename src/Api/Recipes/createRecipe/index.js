import useRemoveToken from "../../removeToken";
import { recipeService } from "../../../services";
import { ROUTES } from "../../../constants";
import { apiErrors } from "../../../Functions";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const useCreateRecipe = () => {
  const { checkIfInvalidToken } = useRemoveToken();
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token"]);

  const fetchCreateRecipe = async (recipe) => {
    try {
      const res = await recipeService.createRecipe(
        recipe,
        cookies.access_token
      );
      if (checkIfInvalidToken(res.data)) return;
      navigate(ROUTES.HOME);
    } catch (error) {
      apiErrors(error);
    }
  };
  return { fetchCreateRecipe };
};
export default useCreateRecipe;
