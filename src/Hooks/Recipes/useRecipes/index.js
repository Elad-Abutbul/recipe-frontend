import { useState } from "react";

const useRecipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([]);
  return {
    currentPage,
    setCurrentPage,
    search,
    setSearch,
  };
};

export default useRecipes;
