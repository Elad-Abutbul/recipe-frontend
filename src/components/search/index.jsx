import { useSearch } from "./useSearch";

export const Search = ({ urlPath, setSearch, mode = "recipes" }) => {
  const { input, setInput } = useSearch(urlPath, setSearch);
  return (
    <div className={`${mode === "recipes" && "flex items-center my-6"}`}>
      <input
        type="search"
        value={input}
        placeholder={`Search ${mode === "recipes" ? "Recipes.." : "Users.."}`}
        onChange={(e) => setInput(e.target.value)}
        className="flex px-4 py-2 border rounded-lg shadow-md focus:outline-none text-black"
      />
    </div>
  );
};
