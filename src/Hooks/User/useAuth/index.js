import { apiErrors } from "../../../Functions";
import { usersApiService } from "../../../services";
import { ROUTES } from "../../../constants";
import { enqueueSnackbar } from "notistack";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const checkIfUserAuth = () => {
    if (cookies.access_token) return true;
    return false;
  };

  const register = async (username, password) => {
    try {
      const res = await usersApiService.register(username, password);
      if (res.data.message === "User Already Exists!") {
        return enqueueSnackbar(res.data.message, { variant: "error" });
      }
      enqueueSnackbar(res.data.message, { variant: "success" });
      navigate(ROUTES.LOGIN);
    } catch (error) {
      apiErrors(error);
    }
  };

  const login = async (username, password) => {
    try {
      const res = await usersApiService.login(username, password);
      if (res.data.message) {
        return enqueueSnackbar(res.data.message, { variant: "error" });
      }
      setCookies("access_token", res.data.token);
      window.localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate(ROUTES.HOME);
    } catch (error) {
      apiErrors(error);
    }
  };

  return { register, login, checkIfUserAuth };
};

export default useAuth;
