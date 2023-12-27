import useRemoveToken from "../../useRemoveToken";
import { usersApiService } from "../../../services";
import { apiErrors, getUser } from "../../../Functions";
import { enqueueSnackbar } from "notistack";
import { useCookies } from "react-cookie";

const useEditUser = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { checkIfInvalidToken } = useRemoveToken();
  const user = getUser();

  const editUser = async (username, password) => {
    try {
      const res = await usersApiService.editUser(
        user.id,
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
  return { editUser };
};

export default useEditUser;
