import { getUserId } from '../getUserId';
import useRemoveToken from '../../removeToken';
import axios from '../../../axiosConfig'
import { enqueueSnackbar } from 'notistack'
import { useCookies } from 'react-cookie'

const useEditUser = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { checkIfInvalidToken } = useRemoveToken();
    const userId = getUserId();
  const axiosEditUser = async (username, password) => {
    try {
    const res = await axios.put(`/auth/editUser/${userId}`, {
      username,
      password 
    }, { headers: { authorization: cookies.access_token } });
    if (checkIfInvalidToken(res.data)) return enqueueSnackbar("No Access Provaided.", { variant: 'error' });
      if (res.data.message === "Edit User Was Complete!") {
        return enqueueSnackbar(res.data.message, { variant: 'success' });
      }
      enqueueSnackbar(res.data.message, { variant: 'warning' });
  } catch (error) {
      console.error(error);
      enqueueSnackbar("Try Later",{variant:'error'})
  }
  }
  return { axiosEditUser };
}

export default useEditUser;
