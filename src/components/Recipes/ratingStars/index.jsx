import { useAuth } from "../../../Hooks";
import useRatingStarComp from "../../../Functions/useRatingStarsComp";

export const RatingStars = ({
  initialRating,
  mode = "recipe-card",
  recipeId,
}) => {
  const { renderStars, rating } = useRatingStarComp(
    mode,
    initialRating,
    recipeId
  );
  const { checkIfUserAuth } = useAuth();

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
