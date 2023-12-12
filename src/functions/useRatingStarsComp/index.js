import { useState } from "react";
import { useQueryMutation } from "../../Hooks";
import { getUser } from "../User";
import { FaStar } from "react-icons/fa";

const useRatingStarComp = (mode, initialRating, recipeId) => {
  const { changeRecipeStarsMutation } = useQueryMutation();
  const user = getUser();

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

  const handleClickRate = (localRating) => {
    setRating(localRating);
    if (mode === "full-recipe") {
      changeRecipeStarsMutation.mutate({
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
          disabled={mode === "recipe-card"}
          key={localRating}
          className={`${mode === "full-recipe" && "cursor-pointer"} text-2xl ${
            localRating <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => {
            handleClickRate(localRating);
          }}
        >
          <FaStar />
        </span>
      );
    }
    return stars;
  };
  return { renderStars };
};
export default useRatingStarComp;
