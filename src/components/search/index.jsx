import { useEffect, useState, useRef } from "react";
import { handleSearch } from "../../functions";
import { useDebounce } from "../../Hooks";

export const Search = ({
  urlPath,
  setSearch,
  userId = null,
  mode = 'recipes'
}) => {
  const [input, setInput] = useState("");
  const { debounceValue } = useDebounce(input, 300);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSearch([]);
        setInput("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, setSearch]);

  useEffect(() => {
    if (input !== "") {
      handleSearch(debounceValue, urlPath, setSearch, userId);
    } else {
      setSearch([]);
    }
  }, [debounceValue, urlPath, setSearch, userId, input]);

  useEffect(() => {
    setInput("");
  }, [urlPath]);

  return (
    <div className={`${mode === 'recipes' && 'flex items-center my-6' }`}>
      <input
        type="search"
        value={input}
        placeholder={`Search ${mode === 'recipes' ? "Recipes.." : 'Users..'}`}
        onChange={(e) => setInput(e.target.value)}
        className="flex px-4 py-2 border rounded-lg shadow-md focus:outline-none text-black"
        ref={inputRef}
      />
    </div>
  );
};
