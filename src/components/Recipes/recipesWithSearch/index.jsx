import { useEffect, useState } from "react";
import { API_URL } from "../../../constants";
import { Search, Loading, RecipesFeed, SelectRecipesType } from "../..";

export const RecipesWithSearch = ({ urlParams, useRecipe, mode, userId = null }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([]);
  const [category, setCategory] = useState('all-recipes');
  const { data, isLoading } = useRecipe(category, currentPage, userId);
  const userIdSuffix = (urlParams === 'savedRecipes'||urlParams==='user') ? `/${userId}` : null;
  const dynamicUrl = `${API_URL.RECIPES.SEARCH.RECIPES}/${urlParams}/${category}/${currentPage}${userIdSuffix}`;
  const totalPages = Math.ceil(search?.totalRecipesCount > 0 ? search?.totalRecipesCount / 9 : data?.totalRecipesCount / 9);
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);
  return (
    <>
      <div className="flex gap-5">
      <Search setSearch={setSearch} urlPath={dynamicUrl} />
      <SelectRecipesType setCategory={setCategory} />
      </div>
      {isLoading ? <Loading /> :
      <RecipesFeed
      recipes={search?.totalRecipesCount>0?search?.recipes: data?.recipes}
      currentPage={currentPage}
      totalPages={totalPages}
      category={category}
      search={search}
      setCurrentPage={setCurrentPage}
      mode={mode}/>}
    </>
  );
};
