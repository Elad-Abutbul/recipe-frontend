import useRemoveToken from "../../removeToken";
import { recipeService } from "../../../services";
import { ROUTES } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
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
      if (checkIfInvalidToken(res.data))
        return enqueueSnackbar("No Access Provaided.", { variant: "error" });

      enqueueSnackbar(res.data.message, { variant: "success" });
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Try Later", { variant: "error" });
    }
  };
  return { fetchCreateRecipe };
};
export default useCreateRecipe;
