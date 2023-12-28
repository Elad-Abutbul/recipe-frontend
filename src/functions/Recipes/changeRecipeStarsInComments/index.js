import { apiErrors } from "../../Api";
import { API_URL } from "../../../constants";
import axiosInstance from "../../../axiosConfig";

export const changeRecipeStarsInComments = async (userId, rating, recipeId) => {
  try {
    const res = await axiosInstance.post(API_URL.RECIPES.EDIT_RATING_IN_COMMENTS, {
      userId,
      rating,
      recipeId,
    });
    return res;
  } catch (error) {
    apiErrors(error);
  }
};
