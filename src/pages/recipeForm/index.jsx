import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../components";
import { Layout } from "../../pages";

export const RecipeForm = () => {
  const location = useLocation();
  const singleRecipe = location.state?.singleRecipe;

  return<Layout><Form singleRecipe={singleRecipe} location={location} /></Layout> ;
};
