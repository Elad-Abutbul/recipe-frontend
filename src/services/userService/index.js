import axiosInstance from "../../axiosConfig";

export const userService = {
  register: async (username, password) =>
    await axiosInstance.post("/register", { username, password }),

  login: async (username, password) =>
    await axiosInstance.post("/login", { username, password }),

  getUser: async (category, page, userId) => {
    return await axiosInstance.get(
      `/auth/getUser/${category}/${page}/${userId}`
    );
  },
  savedRecipe: async (userId, category, page) =>
    await axiosInstance.get(`/auth/savedRecipes/${category}/${page}/${userId}`),

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
