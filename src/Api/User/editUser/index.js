import useRemoveToken from "../../removeToken";
import { userService } from "../../../services";
import { apiErrors, getUserId } from "../../../Functions";
import { enqueueSnackbar } from "notistack";
import { useCookies } from "react-cookie";

const useEditUser = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { checkIfInvalidToken } = useRemoveToken();
  const userId = getUserId();

  const fetchEditUser = async (username, password) => {
    try {
      const res = await userService.editUser(
        userId,
        username,
        password,
        cookies.access_token
      );
      if (checkIfInvalidToken(res.data)) return;
      if (res.data.message === "Edit User Was Complete!")
        return enqueueSnackbar(res.data.message, { variant: "success" });
      enqueueSnackbar(res.data.message, { variant: "warning" });
    } catch (error) {
      apiErrors(error);
    }
  };
  return { fetchEditUser };
};

export default useEditUser;
