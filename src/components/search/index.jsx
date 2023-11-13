import { useEffect, useState } from "react";
import { useDebounce } from "../../Functions";
import { search } from "../../Api";

export const Search = ({
  permission = "allRecipes",
  setSearchList,
  userId = null,
}) => {
  const [input, setInput] = useState("");
  const { debounceValue } = useDebounce(input, 300);
  useEffect(() => {
    search(debounceValue, permission, userId, setSearchList);
  }, [debounceValue]);

  return (
    <input
      type="search"
      value={input}
      placeholder="search.."
      onChange={(e) => setInput(e.target.value)}
      className="px-4 py-2 border rounded-lg shadow-md focus:outline-none "
    />
  );
};
