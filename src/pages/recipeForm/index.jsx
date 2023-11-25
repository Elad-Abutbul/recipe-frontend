import React from "react";
import { Form } from "../../components";
import { Layout } from "../../pages";
import { useLocation } from "react-router-dom";

export const RecipeForm = () => {
  const location = useLocation();
  const singleRecipe = location.state?.singleRecipe;

  return<Layout><Form singleRecipe={singleRecipe} location={location} /></Layout> ;
};
