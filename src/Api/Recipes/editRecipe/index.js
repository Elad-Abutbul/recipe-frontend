import { useNavigate } from "react-router-dom";
import useRemoveToken from "../../removeToken";
import { recipeService } from "../../../services";
import { ROUTES } from "../../../constants";
import { enqueueSnackbar } from "notistack";
import { useCookies } from "react-cookie";

const useEditRecipe = () => {
  const { checkIfInvalidToken } = useRemoveToken();
  const [cookies, setCookies] = useCookies(["access_token"]);

  const axiosEditRecipe = async (recipe, recipeId) => {
    console.log("recipe:", recipe, "recipeId:",recipeId)
       try {
      const res = await recipeService.editRecipe(
        recipe,
        recipeId,
        cookies.access_token
      );
      if (checkIfInvalidToken(res.data))
        return enqueueSnackbar("No Access Provaided.", { variant: "error" });
      enqueueSnackbar(res.data.message, { variant: "success" });
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Try Later", { variant: "error" });
    }
  };
  return { axiosEditRecipe };
};
export default useEditRecipe;
