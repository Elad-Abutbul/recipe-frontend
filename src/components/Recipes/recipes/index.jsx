import React from "react";
import { useGetRecipes } from '../../../Hooks';
import { Loading, RecipesFeed } from '../../../components';

export const Recipes = ({ category,searchList=null }) => {
  const { recipes, isLoading } = useGetRecipes(category);
  if (isLoading) return <Loading />;
  return <RecipesFeed recipes={searchList?.length===0?recipes:searchList} />;
};
