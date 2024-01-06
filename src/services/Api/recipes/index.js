import axiosInstance from "../../../axiosConfig";
import { RECIPES_API } from "../../../constants";

export const recipesApiService = {
  getAllRecipes: async () =>
    await axiosInstance.get(RECIPES_API.GET_ALL_RECIPES),
  getRecipe: async ({ recipeId }) =>
    await axiosInstance.get(`${RECIPES_API.GET_RECIPE}/${recipeId}`),

  getRecipes: async ({ category, currentPage: page }) =>
    await axiosInstance.get(
      `${RECIPES_API.GET_RECIPES}/${category}/${page}`
    ),

  recipeContent: async (recipeId) =>
    await axiosInstance.get(`${RECIPES_API.CONTENT}/${recipeId}`),

  getComments: async ({ recipeId }) =>
    await axiosInstance.get(`${RECIPES_API.COMMENTS}/${recipeId}`),

  addComment: async ({ comment, recipeId, userId }) =>
    await axiosInstance.post(RECIPES_API.ADD_COMMENT, {
      comment,
      recipeId,
      userId,
    }),

  getRatingStars: async () =>
    await axiosInstance.get(RECIPES_API.GET_RATING_STARS),

  changeRecipeRating: async ({ userId, rating, recipeId }) =>
    await axiosInstance.post(RECIPES_API.CHANGE_RATING, {
      userId,
      rating,
      recipeId,
    }),

  editComment: async ({ commentId, comment }) =>
    await axiosInstance.post(RECIPES_API.EDIT_COMMENT, {
      commentId,
      comment,
    }),

  changeRatingInComments: async ({ userId, rating, recipeId }) =>
    await axiosInstance.post(RECIPES_API.EDIT_RATING_IN_COMMENTS, {
      userId,
      rating,
      recipeId,
    }),

  getUserStars: async ({ recipeId, userId }) =>
    await axiosInstance.get(
      `${RECIPES_API.GET_USER_STARS}/${recipeId}/${userId}`
    ),

  createRecipe: async (recipe, accessToken) =>
    await axiosInstance.post(RECIPES_API.CREATE_RECIPE, recipe, {
      headers: { authorization: accessToken },
    }),

  deleteSavedRecipe: async (recipeId, userId, accessToken) =>
    await axiosInstance.delete(RECIPES_API.DELETE.SAVED_RECIPE, {
      data: { recipeId, userId },
      headers: { authorization: accessToken },
    }),

  deleteOwnerRecipe: async (recipeId, accessToken) =>
    await axiosInstance.delete(RECIPES_API.DELETE.OWNER_RECIPE, {
      data: { recipeId },
      headers: { authorization: accessToken },
    }),

  editRecipe: async (recipe, recipeId, accessToken) =>
    await axiosInstance.put(
      RECIPES_API.EDIT_RECIPE,
      { recipe, recipeId },
      { headers: { authorization: accessToken } }
    ),

  getAllOwnerRecipes: async ({ category, page, userId }) =>
    await axiosInstance.get(
      `${RECIPES_API.GET_ALL_OWNER_RECIPE}/${category}/${page}/${userId}`
    ),
};
