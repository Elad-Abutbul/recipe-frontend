import React from "react";
import { useLocation } from "react-router-dom";
import {  FullRecipe, Loading } from "../../components";
import { useGetUserStars } from "../../Hooks";
import { getUser } from "../../Functions";

export const Recipe = () => {
  const { state } = useLocation();
  const recipe = state?.recipe;
  const user = getUser();
  const { isLoading, data } = useGetUserStars(recipe?._id, user?.id);
  if (isLoading) return <Loading />;
  return (
    <div>
      <FullRecipe
        recipe={recipe}
        mode="full-recipe"
        initialRating={data?.userRating}
      />
    </div>
  );
};
