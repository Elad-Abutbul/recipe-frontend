import { useRemoveToken } from "../../../Hooks";
import { apiErrors, getUser } from "../../../functions";
import { usersApiService } from "../../../services";
import { enqueueSnackbar } from "notistack";
import { useCookies } from "react-cookie";

const useSaveRecipe = () => {
  let user = getUser();
  const { checkIfInvalidToken } = useRemoveToken();
  const [cookies, _] = useCookies(["access_token"]);
  const saveRecipe = async (recipeId) => {
    try {
      const res = await usersApiService.saveRecipe(
        recipeId,
        user.id,
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
