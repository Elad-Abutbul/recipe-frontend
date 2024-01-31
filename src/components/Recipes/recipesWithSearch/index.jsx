import { Search, Loading, RecipesFeed, SelectRecipesType } from "../..";
import { useRecipesWithSearch } from "./useRecipesWithSearch";

export const RecipesWithSearch = ({
  urlParams,
  mode,
  userId = null,
  queryKey,
  service,
}) => {
  const {
    search,
    setSearch,
    setCategory,
    isLoading,
    recipesId,
    totalPages,
    dynamicUrl,
    currentPage,
    category,
    setCurrentPage,
  } = useRecipesWithSearch(queryKey, userId, service, urlParams);
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
