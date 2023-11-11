import useRemoveToken from "../../removeToken";
import { localStorageService, userService } from "../../../services";
import { enqueueSnackbar } from "notistack";
import { useCookies } from "react-cookie";

const useEditUser = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { checkIfInvalidToken } = useRemoveToken();
  const userId = localStorageService.getItem("userId");

  const fetchEditUser = async (username, password) => {
    try {
      const res = await userService.editUser(
        userId,
        username,
        password,
        cookies.access_token
      );
      if (checkIfInvalidToken(res.data))
        return enqueueSnackbar("No Access Provaided.", { variant: "error" });
      if (res.data.message === "Edit User Was Complete!")
        return enqueueSnackbar(res.data.message, { variant: "success" });
      enqueueSnackbar(res.data.message, { variant: "warning" });
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Try Later", { variant: "error" });
    }
  };
  return { fetchEditUser };
};

export default useEditUser;
