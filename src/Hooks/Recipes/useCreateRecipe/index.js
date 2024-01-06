import { useRemoveToken } from "../../../Hooks";
import { recipesApiService } from "../../../services";
import { apiErrors } from "../../../Utils";
import { ROUTES } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { enqueueSnackbar } from "notistack";

export const useCreateRecipe = () => {
  const { checkIfInvalidToken } = useRemoveToken();
  const navigate = useNavigate();
  const [cookies, _] = useCookies(["access_token"]);

  const createRecipe = async (recipe) => {
    try {
      const res = await recipesApiService.createRecipe(
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
