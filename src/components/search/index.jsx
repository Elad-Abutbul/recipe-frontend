import { useEffect, useState } from "react";
import { fetchSearch } from "../../Api/Recipes/search";
import { useDebounce } from "../../Functions";

export const Search = ({
  permission = "allRecipes",
  setSearchList,
  userId = null,
}) => {
  const [input, setInput] = useState("");
  const { debounceValue } = useDebounce(input, 300);
  useEffect(() => {
    const search = async () => {
      const searchResults = await fetchSearch(
        debounceValue,
        permission,
        userId
      );
      setSearchList(searchResults);
    };
    search();
  }, [debounceValue]);

  return (
    <div className="p-4">
      <input
        type="search"
        value={input}
        placeholder="search.."
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-md focus:outline-none "
      />
    </div>
  );
};
