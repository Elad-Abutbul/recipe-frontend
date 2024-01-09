import { apiErrors } from "../../Utils";
import axiosInstance from "../../axiosConfig";

const search = async (input, urlPath) => {
  try {
    const res = await axiosInstance.post(urlPath, {
      input,
    });
    return res.data;
  } catch (error) {
    apiErrors(error);
  }
};

export const handleSearch = async (debounceValue, urlPath, setSearch) => {
  const searchResults = await search(debounceValue, urlPath);
  setSearch(searchResults);
};
