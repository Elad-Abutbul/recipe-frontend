import useRemoveToken from '../../removeToken';
import { localStorageService, recipeService } from '../../../services';
import { axiosSavedRecipes } from '../../User';
import { useCookies } from 'react-cookie';
import { enqueueSnackbar } from 'notistack';

const useDeleteSavedRecipe = () => {
  const [cookies, setCookies] = useCookies(['access_token']);
  const { checkIfInvalidToken } = useRemoveToken();
  const userId = localStorageService.getItem('userId');
     const axiosDeleteSavedRecipe = async (recipeId) => {
       try {
        const res = await  recipeService.deleteSavedRecipe(recipeId,userId,cookies.access_token)
                
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