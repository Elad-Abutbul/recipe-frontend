import { useEffect, useState } from "react";
import { useDebounce } from "../../Functions";
import { handleSearch } from "../../Api";

export const Search = ({
  permission = "allRecipes",
  setSearchList,
  userId = null,
}) => {
  const [input, setInput] = useState("");
  const { debounceValue } = useDebounce(input, 300);
  useEffect(() => {
    if (input !== "")
      handleSearch(debounceValue, permission, setSearchList, userId);
    else setSearchList([]);
  }, [debounceValue]);

  return (
    <input
      type="search"
      value={input}
      placeholder="search.."
      onChange={(e) => setInput(e.target.value)}
      className="flex px-4 py-2 border rounded-lg shadow-md focus:outline-none "
    />
  );
};
