import { useCookies } from 'react-cookie';
import axios from '../../../axiosConfig';
import { enqueueSnackbar } from 'notistack';
import useRemoveToken from '../../removeToken';
import { getUserId, useSavedRecipes } from '../../User';

const useDeleteSavedRecipe = () => {
     const [cookies, setCookies] = useCookies(['access_token']);
  const { checkIfInvalidToken } = useRemoveToken();
  let userId = getUserId()
  const { axiosSavedRecipes } =useSavedRecipes()
     const axiosDeleteSavedRecipe = async (recipeId) => {
       try {
        const res = await axios.delete('/recipes/delete/saved-recipe', {
          data: { recipeId, userId },
          headers: { authorization: cookies.access_token}
        });
                
         if (checkIfInvalidToken(res.data)) return enqueueSnackbar("No Access Provided.", { variant: 'error' });
         await axiosSavedRecipes()
         enqueueSnackbar(res.data.message, { variant: 'success' });
          } catch (error) {
            console.error('Error deleting recipe:', error);
          }
        }
        

     return { axiosDeleteSavedRecipe };
}

export default useDeleteSavedRecipe