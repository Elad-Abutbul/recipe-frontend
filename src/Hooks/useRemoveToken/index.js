import { enqueueSnackbar } from "notistack";
import { ERRORS, ROUTES } from "../../constants";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

export const useRemoveToken = () => {
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const removeToken = () => {
    window.localStorage.removeItem("user");
    setCookies("access_token", "");
    navigate(ROUTES.LOGIN);
    queryClient.clear();
  };

  const checkIfInvalidToken = (response) => {
    if (
      response === "Failed To Authenticate Token." ||
      response === "No Token Provided."
    ) {
      enqueueSnackbar(ERRORS.NO_ACCESS_PROVIDED, { variant: "error" });
      removeToken();
      return true;
    }
    return false;
  };

  const logOut = () => {
    removeToken();
  };

  return { checkIfInvalidToken, logOut, removeToken };
};
