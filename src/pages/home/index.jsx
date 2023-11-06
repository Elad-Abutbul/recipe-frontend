import React from "react";
import { Loading, RecipesFeed } from "../../components";
import { axiosGetAllRecipes } from "../../Api";
import { useQuery } from "react-query";

export const Home = () => {
  const { isLoading, data: recipes } = useQuery(["allRecipes"], axiosGetAllRecipes);

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Recipes</h1>
      {recipes?.length === 0 ? (
        "Nothing To Show.."
      ) : (
        <RecipesFeed recipes={recipes} />
      )}
    </div>
  );
};
