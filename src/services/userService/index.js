import axios from "../../axiosConfig";

export const userService = {
  register: async (username, password) =>
    await axios.post("/auth/register", { username, password }),

  login: async (username, password) =>
    await axios.post("/auth/login", { username, password }),

  getUser: async (userId) => await axios.get(`/auth/getUser/${userId}`),

  savedRecipe: async (userId) => await axios.get(`auth/savedRecipes/${userId}`),

  editUser: async (userId, username, password, accessToken) =>
    await axios.put(
      `/auth/editUser/${userId}`,
      { username, password },
      { headers: { authorization: accessToken } }
    ),

  saveRecipe: async (recipeId, userId, accessToken) =>
    await axios.put(
      "/recipes/saveRecipe",
      { recipeId, userId },
      { headers: { authorization: accessToken } }
    ),
};
