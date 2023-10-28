import { enqueueSnackbar } from "notistack";
import axios from '../../../axiosConfig'

const useGetAllRecipes = () => {
   
  const getAllRecipes = async () => {
    try {
      const res = await axios.get('/recipes/getAllRecipes');
      return res.data;
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Try Later', { variant: 'error' });
    }
 }
 return { getAllRecipes }
}
   export default useGetAllRecipes