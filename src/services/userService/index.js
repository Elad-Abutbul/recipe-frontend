import axiosInstance from "../../axiosConfig";

export const userService = {
  register: async (username, password) =>
    await axiosInstance.post("/auth/register", { username, password }),

  login: async (username, password) =>
    await axiosInstance.post("/auth/login", { username, password }),

  getUser: async (userId) => await axiosInstance.get(`/auth/getUser/${userId}`),

  savedRecipe: async (userId, category, page) =>
    await axiosInstance.get(`auth/savedRecipes/${category}/${page}/${userId}`),

  editUser: async (userId, username, password, accessToken) =>
    await axiosInstance.put(
      `/auth/editUser/${userId}`,
      { username, password },
      { headers: { authorization: accessToken } }
    ),

  saveRecipe: async (recipeId, userId, accessToken) =>
    await axiosInstance.put(
      "/recipes/saveRecipe",
      { recipeId, userId },
      { headers: { authorization: accessToken } }
    ),
};
