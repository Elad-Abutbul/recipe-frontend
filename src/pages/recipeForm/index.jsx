import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../components";

export const RecipeForm = () => {
  const location = useLocation();
  const singleRecipe = location.state?.singleRecipe;

  return <Form singleRecipe={singleRecipe} location={location} />;
};
