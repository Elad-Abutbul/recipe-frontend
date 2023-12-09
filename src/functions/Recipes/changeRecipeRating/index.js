import axiosInstance from "../../../axiosConfig";
import { apiErrors } from "../../Api";

export const changeRecipeRating = async (userId, rating, recipeId) => {
  console.log(userId, rating, recipeId);
  try {
    const res = await axiosInstance.post("/recipes/rating", {
      userId,
      rating,
      recipeId,
    });
    return res.data;
  } catch (error) {
    apiErrors(error);
  }
};
