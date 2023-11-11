import React from "react";
import { Loading, RecipesFeed } from "../../../components";
import { useGetAllOwnerRecipes } from "../../../Api";

export const EditRecipes = () => {
  const { isLoading, ownerRecipes } = useGetAllOwnerRecipes();
  console.log(ownerRecipes?.length)
  if (isLoading) return <Loading />;
  return ownerRecipes.length === 0 ? "Create A Recipe To See!" : <RecipesFeed recipes={ownerRecipes} condition={"edit-recipes"} />;
};
