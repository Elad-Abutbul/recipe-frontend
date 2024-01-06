import axiosInstance from "../../../axiosConfig";
import { USERS_API } from "../../../constants";

export const usersApiService = {
  register: async (username, password) =>
    await axiosInstance.post(USERS_API.REGISTER, { username, password }),

  login: async (username, password) =>
    await axiosInstance.post("/login", { username, password }),

  getUserRecipes: async ({ category, page, userId }) => {
    return await axiosInstance.get(
      `/auth/getUserRecipes/${category}/${page}/${userId}`
    );
  },
  savedRecipes: async ({ category, page, userId }) =>
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
