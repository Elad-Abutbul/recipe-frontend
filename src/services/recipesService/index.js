import axios from "../../axiosConfig";
import { API_URL } from "../../constants";

export const recipeService = {
  getAll: async () => await axios.get(API_URL.RECIPES.GET_ALL),

  createRecipe: async (recipe, accessToken) =>
    await axios.post(API_URL.RECIPES.CREATE_RECIPE, recipe, {
      headers: { authorization: accessToken },
    }),

  deleteSavedRecipe: async (recipeId, userId, accessToken) =>
    await axios.delete(API_URL.RECIPES.DELETE.SAVED_RECIPE, {
      data: { recipeId, userId },
      headers: { authorization: accessToken },
    }),
  deleteOwnerRecipe: async (recipeId, accessToken) =>
    await axios.delete(API_URL.RECIPES.DELETE.OWNER_RECIPE, {
      data: { recipeId },
      headers: { authorization: accessToken },
    }),
  editRecipe: async (recipe, recipeId, accessToken) =>
    await axios.put(
      API_URL.RECIPES.EDIT_RECIPE,
      { recipe, recipeId },
      { headers: { authorization: accessToken } }
    ),

  getAllOwnerRecipes: async (userId) =>
    await axios.get(`${API_URL.RECIPES.GET_ALL_OWNER_RECIPE}/${userId}`),
};
