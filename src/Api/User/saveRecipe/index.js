import { useRemoveToken } from "../..";
import { apiErrors, getUserId } from "../../../Functions";
import { userService } from "../../../services";
import { enqueueSnackbar } from "notistack";
import { useCookies } from "react-cookie";

const useSaveRecipe = () => {
  let userId = getUserId();
  const { checkIfInvalidToken } = useRemoveToken();
  const [cookies, setCookies] = useCookies(["access_token"]);
  const saveRecipe = async (recipeId) => {
    try {
      const res = await userService.saveRecipe(
        recipeId,
        userId,
        cookies.access_token
      );
      if (checkIfInvalidToken(res.data)) return;
      else if (res.data.message === "Recipe Saved Already.")
        return enqueueSnackbar(res.data.message, { variant: "warning" });
      enqueueSnackbar(res.data.message, { variant: "success" });
    } catch (error) {
      apiErrors(error);
    }
  };
  return { saveRecipe };
};
export default useSaveRecipe;
