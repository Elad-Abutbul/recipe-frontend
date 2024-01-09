import { useEffect, useState } from "react";
import { useDebounce } from "../../Hooks";
import { handleSearch } from "../../functions";

export const useSearch = (urlPath, setSearch) => {
  const [input, setInput] = useState("");
  const { debounceValue } = useDebounce(input, 300);

  useEffect(() => {
    if (input !== "") {
      handleSearch(debounceValue, urlPath, setSearch);
    } else {
      setSearch([]);
    }
  }, [debounceValue]);

  useEffect(() => {
    setInput("");
  }, [urlPath]);
  return { input, setInput };
};
