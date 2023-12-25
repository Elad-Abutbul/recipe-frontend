import React from "react";
import { useLocation } from "react-router-dom";
import { FullRecipe } from "../../components";

export const Recipe = () => {
  const { state } = useLocation();
  const recipeId = state?.recipeId;
  
  return <FullRecipe recipeId={recipeId} mode="full-recipe" />;
};
