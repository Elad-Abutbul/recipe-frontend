import {  useRemoveToken } from '../..';
import { localStorageService, userService } from '../../../services';
import { enqueueSnackbar } from 'notistack';
import { useCookies } from 'react-cookie';

const useSaveRecipe = () => {
  let userId = localStorageService.getItem('userId');
  const { checkIfInvalidToken } = useRemoveToken();
  const [cookies, setCookies] = useCookies(['access_token']); 
  const axiosSaveRecipe = async (recipeId) => {
    try {
      debugger
      const res = await userService.saveRecipe(recipeId, userId, cookies.access_token);
      if (checkIfInvalidToken(res.data)) return enqueueSnackbar("No Access Provaided.", { variant: 'error' });
      else if  (res.data.message==="Recipe Saved Already.") return enqueueSnackbar(res.data.message, { variant: 'warning' })
      enqueueSnackbar(res.data.message, { variant: 'success' });
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Try Later', { variant: 'error' });
    }
  }
  return { axiosSaveRecipe }
};
export default useSaveRecipe;