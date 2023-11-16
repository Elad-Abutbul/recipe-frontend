import React, { useState } from "react";
import { Loading, RecipesFeed, Search } from "../../components";
import { useGetAllRecipes } from "../../Api";

export const Home = () => {
  
  const [searchList, setSearchList] = useState([]);
  const { isLoading, recipes } = useGetAllRecipes();

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Recipes</h1>

      <Search setSearchList={setSearchList} />
      {recipes?.length === 0 ? (
        "Nothing To Show.."
      ) : (
        <RecipesFeed recipes={searchList.length === 0 ? recipes : searchList} />
      )}
    </div>
  );
};
