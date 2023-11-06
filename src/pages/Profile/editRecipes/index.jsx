import React from "react";
import { getAllOwnerRecipes } from "../../../Api";
import { Loading, RecipeCard } from "../../../components";
import { useQuery } from "react-query";

export const EditRecipes = () => {
  const { isLoading, data: OwnerRecipes } = useQuery(
    ["allOwnerRecipes"],
    getAllOwnerRecipes
  );
  if (isLoading) return <Loading />;
  return OwnerRecipes?.map((recipe) => (<RecipeCard recipe={recipe} key={recipe._id} condition="edit"/>))
};
