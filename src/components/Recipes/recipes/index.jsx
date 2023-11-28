import { useEffect, useState } from "react";
import { API_URL } from "../../../constants";
import { Layout } from "../../../pages";
import { Search, Loading, RecipesFeed, SelectRecipesType } from "../../../components";

export const Recipes = ({ urlParams, useRecipe, mode, userId = null }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('all-recipes');
  const [search, setSearch] = useState([]);
  const { data, isLoading } = useRecipe(category, currentPage);
  const userIdSuffix = urlParams === 'savedRecipes' ? `/${userId}` : '';
  const dynamicUrl = `${API_URL.RECIPES.SEARCH.RECIPES}/${urlParams}/${category}/${currentPage}${userIdSuffix}`;
  console.log(dynamicUrl);
  const totalPages = Math.ceil(search?.totalRecipesCount > 0 ? search?.totalRecipesCount / 9 : data?.totalRecipesCount / 9);
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <Layout>
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
    </Layout>
  );
};
