import axios from "../../axiosConfig";

export const recipeService = {
  getAll: async () => await axios.get("/recipes/getAllRecipes"),

  createRecipe: async (recipe, accessToken) =>
    await axios.post("/recipes/createRecipe", recipe, {
      headers: { authorization: accessToken },
    }),

  deleteSavedRecipe: async (recipeId, userId, accessToken) =>
    await axios.delete("/recipes/delete/saved-recipe", {
      data: { recipeId, userId },
      headers: { authorization: accessToken },
    }),
  deleteOwnerRecipe: async (recipeId, accessToken) =>
    await axios.delete("/recipes/delete/owner-recipe", {
      data: { recipeId },
      headers: { authorization: accessToken },
    }),
  editRecipe: async (recipe, recipeId, accessToken) =>
    await axios.put(
      "/recipes/editRecipe",
      { recipe, recipeId },
      { headers: { authorization: accessToken } }
    ),

  getAllOwnerRecipes: async (userId) =>
    await axios.get(`/recipes/getAllOwnerRecipes/${userId}`),
};
