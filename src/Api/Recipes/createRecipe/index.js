import { useNavigate } from 'react-router-dom';
import useRemoveToken from '../../removeToken';
import { ROUTES } from '../../../constants';
import axios from '../../../axiosConfig';
import { enqueueSnackbar } from 'notistack'
import { useCookies } from 'react-cookie';

const useCreateRecipe = () => {

     const { checkIfInvalidToken } = useRemoveToken();
     const navigate = useNavigate();     
     const [cookies, setCookies] = useCookies(['access_token'])
     
     const axiosCreateRecipe = async (recipe) => {
          try {
              const res = await axios.post('/recipes/createRecip', recipe, { headers: { authorization:cookies.access_token } });
              if (checkIfInvalidToken(res.data)) return enqueueSnackbar("No Access Provaided.", { variant: 'error' });

              enqueueSnackbar(res.data.message, { variant: 'success' });
              navigate(ROUTES.HOME)

         } catch (error) {
          console.error(error)
          enqueueSnackbar("Try Later",{variant:'error'})
         }
     }
     return { axiosCreateRecipe }
}
export default useCreateRecipe;