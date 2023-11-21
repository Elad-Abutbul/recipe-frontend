import { apiErrors } from "../../../Functions";
import axiosInstance from "../../../axiosConfig";

const search = async (input, permission, userId) => {
  try {
    const res = await axiosInstance.post("/recipes/search", {
      input,
      permission,
      userId,
    });
    return res.data.search;
  } catch (error) {
    apiErrors(error);
  }
};

export const handleSearch = async (
  debounceValue,
  permission,
  setSearchList,
  userId
) => {
  const searchResults = await search(debounceValue, permission, userId);
  setSearchList(searchResults);
};
