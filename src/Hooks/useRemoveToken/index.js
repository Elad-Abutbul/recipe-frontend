import { enqueueSnackbar } from "notistack";
import { ERRORS, ROUTES } from "../../constants";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useRemoveToken = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const removeToken = () => {
    window.localStorage.removeItem("user");
    setCookies("access_token", "");
    navigate(ROUTES.LOGIN);
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

  return { checkIfInvalidToken, logOut };
};
export default useRemoveToken;
