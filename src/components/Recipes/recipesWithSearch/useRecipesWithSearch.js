import { useEffect, useState } from "react";
import { useGenericQuery } from "../../../Hooks";
import { PAGINATION, RECIPES_API } from "../../../constants";

export const useRecipesWithSearch = (queryKey, userId, service, urlParams) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([]);
  const [category, setCategory] = useState("all-recipes");
  const { data, isLoading } = useGenericQuery(
    queryKey,
    { category, currentPage, userId },
    service
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const userIdSuffix =
    queryKey === "savedRecipes" || urlParams === "user" ? `/${userId}` : null;
  const dynamicUrl = `${RECIPES_API.SEARCH.RECIPES}/${urlParams}/${category}/${currentPage}${userIdSuffix}`;

  const totalRecipesCount =
    search?.totalRecipesCount || data?.totalRecipesCount;

  const totalPages = totalRecipesCount
    ? Math.ceil(totalRecipesCount / PAGINATION.RECIPES_PER_PAGE)
    : 0;

  const recipesId =
    search?.totalRecipesCount > 0 ? search?.recipesId : data?.recipesId;
  
  return {
    search,
    setSearch,
    setCategory,
    data,
    isLoading,
    recipesId,
    totalPages,
    dynamicUrl,
  };
};
