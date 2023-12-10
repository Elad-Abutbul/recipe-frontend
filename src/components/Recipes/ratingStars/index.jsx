import { useAuth } from "../../../Hooks";
import useRatingStarComp from "../../../Functions/useRatingStarsComp";

export const RatingStars = ({
  initialRating,
  mode = "recipe-card",
  recipeId,
}) => {
  const { renderStars } = useRatingStarComp(mode, initialRating, recipeId);
  const { checkIfUserAuth } = useAuth();

  return (
    <div>
      {checkIfUserAuth() && mode === "full-recipe" ? (
        <>
          <p className="font-bold text-lg">Your Rating:</p>
          <div className="flex space-x-2">{renderStars()}</div>
        </>
      ) : (
        mode === "recipe-card" && (
          <div className="flex space-x-2">{renderStars()}</div>
        )
      )}
    </div>
  );
};
