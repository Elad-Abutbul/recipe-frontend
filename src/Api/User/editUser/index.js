import axios from '../../../axiosConfig'
import { enqueueSnackbar } from 'notistack'
import { useCookies } from 'react-cookie'
import { ROUTES } from '../../../constants';
import { getUser } from '../getUser';

const useEditUser = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const user = getUser();
  const editUser = async (username, password) => {
    try {
    const res = await axios.put(`/users/editUser/${user._id}`, {
      username,
      password 
    }, { headers: { authorization: cookies.access_token } });
    if (res.data.message === "User Already Exists!") {
         return enqueueSnackbar(res.data.message, { variant: 'error' });
         } 
    window.localStorage.setItem("user", res.data.user);
    enqueueSnackbar(res.data.message, { variant: 'success' })
  } catch (error) {
      console.error(error);
      enqueueSnackbar("Try Later",{variant:'error'})
  }
  }

  
  return { editUser };
}

export default useEditUser;
