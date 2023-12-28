import React from "react";
import { useGetUserRecipes } from "../../Hooks";
import { Layout } from "../layout";
import { RecipesWithSearch } from "../../components";
import { useLocation, useParams } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const username = state?.username;

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">{username}'s Recipes</h2>
      <RecipesWithSearch
        useRecipe={useGetUserRecipes}
        mode="user"
        userId={id}
        urlParams={"user"}
      />
    </Layout>
  );
};

