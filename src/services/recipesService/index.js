import axiosInstance from "../../axiosConfig";
import { API_URL } from "../../constants";

export const recipeService = {
  getAllRecipes: async () =>
    await axiosInstance.get(API_URL.RECIPES.GET_ALL_RECIPES),

  getRecipes: async (category, page) =>
    await axiosInstance.get(
      `${API_URL.RECIPES.GET_RECIPES}/${category}/${page}`
    ),

  getComments: async (recipeId) =>
    await axiosInstance.get(`${API_URL.RECIPES.COMMENTS}/${recipeId}`),

  addComment: async (comment, recipeId, userId) =>
    await axiosInstance.post(`${API_URL.RECIPES.ADD_COMMENT}`, {
      comment,
      recipeId,
      userId,
    }),
  getRatingStars: async () =>
    await axiosInstance.get(`${API_URL.RECIPES.GET_RATING_STARS}`),
  
  getUserStars: async (recipeId, userId) =>
    await axiosInstance.get(
      `${API_URL.RECIPES.GET_USER_STARS}/${recipeId}/${userId}`
    ),

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

  getAllOwnerRecipes: async (userId, category, page) =>
    await axiosInstance.get(
      `${API_URL.RECIPES.GET_ALL_OWNER_RECIPE}/${category}/${page}/${userId}`
    ),
};
