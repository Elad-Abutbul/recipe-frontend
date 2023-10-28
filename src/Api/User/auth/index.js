import axios from '../../../axiosConfig'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import { ROUTES } from '../../../constants';

const useAuth = () => {
   
   const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const register = async ( username, password ) => {
    try {
    const res = await axios.post('/auth/register', {
      username,
      password
    });
    if (res.data.message === "User Already Exists!") {
       return enqueueSnackbar(res.data.message ,{variant:'error'})
    } 
    enqueueSnackbar(res.data.message, { variant: 'success' })
    navigate(ROUTES.LOGIN)
  } catch (error) {
      console.error(error);
      enqueueSnackbar("Try Later",{variant:'error'})
  }
  }

  const login = async (username, password) => {
     
    try {
      const res = await axios.post('/auth/login', {

        username,
        password 
      });
      if (res.data.message) {
        return enqueueSnackbar(res.data.message, { variant: 'error' });
      } 
      setCookies("access_token", res.data.token);
      window.localStorage.setItem('userId',JSON.stringify(res.data.userId));
      navigate(ROUTES.HOME) 
    } catch (error) {
      console.error(error);
    }
  }
  
  return { register, login };
}

export default useAuth;
