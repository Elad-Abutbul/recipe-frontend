import React from "react";
import { Loading, RecipesFeed } from "../../../components";
import { useGetAllOwnerRecipes } from "../../../Api";
import { Layout } from "../../../pages";

export const EditRecipes = () => {
  const { isLoading, ownerRecipes } = useGetAllOwnerRecipes();
  if (isLoading) return <Loading />;
  return <Layout>
    {ownerRecipes?.length === 0 ? "Create A Recipe To See!" : <RecipesFeed recipes={ownerRecipes} mode={"edit-recipes"} />}
    </Layout>
};
