import axiosInstance from "../../../axiosConfig";
import { API_URL } from "../../../constants";
import { apiErrors } from "../../Api";

export const changeRecipeRating = async (userId, rating, recipeId) => {
  try {
    const res = await axiosInstance.post(API_URL.RECIPES.RATING, {
      userId,
      rating,
      recipeId,
    });
    return res.data;
  } catch (error) {
    apiErrors(error);
  }
};
