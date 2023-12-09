import React, { useState } from "react";
import { getUser } from "../../../Functions";
import { FaStar } from "react-icons/fa";
import { useAuth, useQueryMutation } from "../../../Hooks";

export const RatingStars = ({
  initialRating,
  mode = "recipe-card",
  recipeId,
}) => {
  const { checkIfUserAuth } = useAuth();
  let stars = 0;
  if (mode !== "full-recipe") {
    const sum =
      initialRating?.length > 0
        ? initialRating.reduce((acc, obj) => acc + obj.stars, 0)
        : 0;
    stars = initialRating?.length > 0 ? sum / initialRating?.length : 0;
  }
  const [rating, setRating] = useState(
    mode === "full-recipe" ? initialRating : stars
  );
  const { changeRecipeStarsMutation } = useQueryMutation();
  const user = getUser();
  const handleClickRate = (i) => {
    setRating(i);
    if (mode === "full-recipe") {
      changeRecipeStarsMutation.mutate({
        userId: user?.id,
        rating: i,
        recipeId,
      });
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          disabled={mode === "recipe-card"}
          key={i}
          className={`${mode === "full-recipe" && "cursor-pointer"} text-2xl ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => {
            handleClickRate(i);
          }}
        >
          <FaStar />
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      {checkIfUserAuth() && mode === "full-recipe" ? (
        <>
          <p>Your Rating:</p>
          <div className="flex space-x-2">{renderStars()}</div>
          <p>Selected Rating: {rating}</p>
        </>
      ) : (
        mode === "recipe-card" && (
          <div className="flex space-x-2">{renderStars()}</div>
        )
      )}
    </div>
  );
};
