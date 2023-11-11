import React from "react";
import { RecipeCard } from "..";

export const RecipesFeed = ({ recipes, condition }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {recipes?.map((recipe) => (
      <RecipeCard recipe={recipe} key={recipe._id} condition={condition} />
    ))}
  </ul>
);
