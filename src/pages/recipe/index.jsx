import React from "react";
import { FullRecipe, Layout } from "../../components";
import { useLocation } from "react-router-dom";

const Recipe = () => {
  const { state } = useLocation();
  const recipeId = state?.recipeId;

  return (
    <Layout>
      <FullRecipe recipeId={recipeId} mode="full-recipe" />;
    </Layout>
  );
};

export default Recipe;
