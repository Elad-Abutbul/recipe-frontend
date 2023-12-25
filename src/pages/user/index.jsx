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
      <h2>{username} Recipe's</h2>
      <RecipesWithSearch
        useRecipe={useGetUserRecipes}
        mode="user"
        userId={id}
        urlParams={"user"}
      />
    </Layout>
  );
};
