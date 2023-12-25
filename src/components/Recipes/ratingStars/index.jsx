import { useAuth, useGetUserStars } from "../../../Hooks";
import useRatingStarComp from "../../../Functions/useRatingStarsComp";
import { Loading } from "../../loading";

export const RatingStars = ({
  initialRating = null,
  mode = "recipe-card",
  recipeId,
}) => {
  const { isLoading, data } = useGetUserStars(recipeId, mode);
  const rating = initialRating === null ? data?.userRating : initialRating;
  const { checkIfUserAuth } = useAuth();
  const { renderStars } = useRatingStarComp(mode, rating, recipeId);
  if (isLoading) return <Loading />;
  return (
    <div>
      {checkIfUserAuth() && mode === "full-recipe" ? (
        <>
          <p className="font-bold text-lg">Your Rating:</p>
          <div className="flex space-x-2">{renderStars()}</div>
        </>
      ) : (
        mode !== "full-recipe" && (
          <div className="flex space-x-2">{renderStars()}</div>
        )
      )}
    </div>
  );
};
