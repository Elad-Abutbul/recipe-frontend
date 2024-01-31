import { useEffect, useState } from "react";
import { useDebounce } from "../../Hooks";
import { handleSearch } from "../../functions";
import { apiErrors } from "../../Utils";
import axiosInstance from "../../axiosConfig";

export const useSearch = (urlPath, setSearch) => {
  const [input, setInput] = useState("");
  const wait = 300;
  const { debounceValue } = useDebounce(input, wait);

  useEffect(() => {
    if (input !== "") {
      handleSearch(debounceValue, urlPath, setSearch);
    } else {
      setSearch([]);
    }
  }, [debounceValue]);

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

  const handleSearch = async (debounceValue, urlPath, setSearch) => {
    const searchResults = await search(debounceValue, urlPath);
    setSearch(searchResults);
  };
  
  useEffect(() => {
    setInput("");
  }, [urlPath]);
  return { input, setInput };
};
