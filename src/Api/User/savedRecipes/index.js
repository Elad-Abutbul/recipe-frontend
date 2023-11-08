import { localStorageService, userService } from "../../../services";
import { enqueueSnackbar } from "notistack";

const userId = localStorageService.getItem("userId");
export const axiosSavedRecipes = async () => {
  try {
    const res = await userService.savedRecipe(userId);
    if (!res.data.message) return res.data.savedRecipes;
  } catch (error) {
    enqueueSnackbar("Try Later", { variant: "warning" });
    console.error(error);
  }
};
