import { enqueueSnackbar } from "notistack";
import { recipeService } from "../../../services";

export const axiosGetAllRecipes = async () => {
    try {
      const res = await recipeService.getAll()
      return res.data;
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Try Later', { variant: 'error' });
    }
 }