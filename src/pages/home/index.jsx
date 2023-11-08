import React, { useState } from "react";
import { Loading, RecipesFeed, Search } from "../../components";
import { axiosGetAllRecipes } from "../../Api";
import { useQuery } from "react-query";

export const Home = () => {
  const [searchList, setSearchList] = useState([]);
  const { isLoading, data: recipes } = useQuery(
    ["allRecipes"],
    axiosGetAllRecipes
  );

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Recipes</h1>

      <Search setSearchList={setSearchList} />
      {recipes?.length === 0 ? (
        "Nothing To Show.."
      ) : searchList.length === 0 ? (
        <RecipesFeed recipes={recipes} />
      ) : (
        <RecipesFeed recipes={searchList} />
      )}
    </div>
  );
};
