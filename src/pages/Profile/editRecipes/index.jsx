import React from "react";
import { getAllOwnerRecipes } from "../../../Api";
import { RecipeCard } from "../../../components";
import { useQuery } from "react-query";

export const EditRecipes = () => {
  const { isLoading, data: OwnerRecipes } = useQuery(
    ["allOwnerRecipes"],
    getAllOwnerRecipes
  );
  console.log(OwnerRecipes)
  if (isLoading) return <isLoading />;
  return OwnerRecipes?.map((recipe) => (<RecipeCard recipe={recipe} key={recipe._id} condition="edit"/>))
};
