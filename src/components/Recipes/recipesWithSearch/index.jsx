import { useEffect, useState } from "react";
import { API_URL, PAGINATION } from "../../../constants";
import { Search, Loading, RecipesFeed, SelectRecipesType } from "../..";
import { useGenericQuery } from "../../../Hooks";

export const RecipesWithSearch = ({
  urlParams,
  mode,
  userId = null,
  queryKey,
  service,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([]);
  const [category, setCategory] = useState("all-recipes");
  const { data, isLoading } = useGenericQuery(
    queryKey,
    { category, currentPage, userId },
    service
  );

  const userIdSuffix =
  queryKey === "savedRecipes" || urlParams === "user" ? `/${userId}` : null;
  const dynamicUrl = `${API_URL.RECIPES.SEARCH.RECIPES}/${urlParams}/${category}/${currentPage}${userIdSuffix}`;

  const totalRecipesCount =
    search?.totalRecipesCount || data?.totalRecipesCount;

  const totalPages = totalRecipesCount
    ? Math.ceil(totalRecipesCount / PAGINATION.RECIPES_PER_PAGE)
    : 0;

  const recipesId =
    search?.totalRecipesCount > 0 ? search?.recipesId : data?.recipesId;

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);
  if (isLoading) return <Loading />;
  return (
    <>
      {recipesId?.length > 0 ? (
        <div className="flex gap-5">
          <Search setSearch={setSearch} urlPath={dynamicUrl} />
          <SelectRecipesType setCategory={setCategory} />
        </div>
      ) : (
        <p>Nothing To Show..</p>
      )}
      <RecipesFeed
        recipesId={recipesId}
        currentPage={currentPage}
        totalPages={totalPages}
        category={category}
        search={search}
        setCurrentPage={setCurrentPage}
        mode={mode}
      />
    </>
  );
};
