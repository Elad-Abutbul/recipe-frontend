import axiosInstance from "../../axiosConfig";
import { API_URL } from "../../constants";

export const recipeService = {
  getAll: async () => await axiosInstance.get(API_URL.RECIPES.GET_ALL),

  createRecipe: async (recipe, accessToken) =>
    await axiosInstance.post(API_URL.RECIPES.CREATE_RECIPE, recipe, {
      headers: { authorization: accessToken },
    }),

  deleteSavedRecipe: async (recipeId, userId, accessToken) =>
    await axiosInstance.delete(API_URL.RECIPES.DELETE.SAVED_RECIPE, {
      data: { recipeId, userId },
      headers: { authorization: accessToken },
    }),
  deleteOwnerRecipe: async (recipeId, accessToken) =>
    await axiosInstance.delete(API_URL.RECIPES.DELETE.OWNER_RECIPE, {
      data: { recipeId },
      headers: { authorization: accessToken },
    }),
  editRecipe: async (recipe, recipeId, accessToken) =>
    await axiosInstance.put(
      API_URL.RECIPES.EDIT_RECIPE,
      { recipe, recipeId },
      { headers: { authorization: accessToken } }
    ),

  getAllOwnerRecipes: async (userId) =>
    await axiosInstance.get(
      `${API_URL.RECIPES.GET_ALL_OWNER_RECIPE}/${userId}`
    ),
};
