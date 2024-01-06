import { useEffect, useState } from "react";
import { useQueryMutation } from "../..";
import { FaStar } from "react-icons/fa";
import { getUser } from "../../../Utils";

export const useRatingStarComp = (mode, globalRating, recipeId) => {
  const { changeRecipeStarsMutation, changeRecipeStarsInCommentsMutation } =
    useQueryMutation();
  const user = getUser();
  const [rating, setRating] = useState();
  useEffect(() => {
    setRating(globalRating);
  }, [globalRating]);

  const handleClickRate = (localRating) => {
    if (mode === "full-recipe") {
      setRating(localRating);
      changeRecipeStarsMutation.mutate({
        userId: user?.id,
        rating: localRating,
        recipeId,
      });
      changeRecipeStarsInCommentsMutation.mutate({
        userId: user?.id,
        rating: localRating,
        recipeId,
      });
    }
  };
  const renderStars = () => {
    const stars = [];
    for (let localRating = 1; localRating <= 5; localRating++) {
      stars.push(
        <span
          disabled={mode !== "full-recipe"}
          key={localRating}
          className={`${mode === "full-recipe" && "cursor-pointer"} ${
            localRating <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => {
            handleClickRate(localRating);
          }}
        >
          <FaStar size={mode === "comments" ? 15 : 25} />
        </span>
      );
    }
    return stars;
  };
  return { renderStars };
};
