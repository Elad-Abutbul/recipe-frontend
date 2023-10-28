import { getUser, useRemoveToken } from '../..';
import axios from '../../../axiosConfig'
import { useCookies } from 'react-cookie';
import { enqueueSnackbar } from 'notistack';

const useSaveRecipe = () => {
  let user = getUser();
  const { checkIfInvalidToken } = useRemoveToken();
  const [cookies, setCookies] = useCookies(['access_token']);
  const axiosSaveRecipe = async (recipeId) => {
    try {
      const res = await axios.put('/recipes/saveRecipe', { recipeId, userID:user._id }, { headers: { authorization:cookies.access_token } });
      if (checkIfInvalidToken(res.data)) return enqueueSnackbar("No Access Provaided.", { variant: 'error' });
      else if  (res.data.message) return enqueueSnackbar(res.data.message, { variant: 'warning' })
      enqueueSnackbar("Recipe Saved Successfully", { variant: 'success' });
      user = res.data.user;
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Try Later', { variant: 'error' });
    }
  }
  return { axiosSaveRecipe }
};
export default useSaveRecipe;