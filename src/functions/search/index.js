import { apiErrors } from "../../Utils";
import axiosInstance from "../../axiosConfig";

const search = async (input, urlPath, userId) => {
  try {
    const res = await axiosInstance.post(urlPath, {
      userId,
      input,
    });
    return res.data;
  } catch (error) {
    apiErrors(error);
  }
};

export const handleSearch = async (
  debounceValue,
  urlPath,
  setSearch,
  userId
) => {
  const searchResults = await search(debounceValue, urlPath, userId);
  setSearch(searchResults);
};
