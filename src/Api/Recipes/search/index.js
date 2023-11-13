import { apiErrors } from "../../../Functions";
import axios from "../../../axiosConfig";

const fetchSearch = async (input, permission, userId) => {
  try {
    const res = await axios.post("/recipes/search", {
      input,
      permission,
      userId,
    });
    return res.data.search;
  } catch (error) {
    apiErrors(error);
  }
};

export const search = async (
  debounceValue,
  permission,
  userId,
  setSearchList
) => {
  const searchResults = await fetchSearch(debounceValue, permission, userId);
  setSearchList(searchResults);
};
