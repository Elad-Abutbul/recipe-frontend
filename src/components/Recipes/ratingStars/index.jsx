import { useAuth, useGenericQuery } from "../../../Hooks";
import { Loading } from "../../loading";
import { recipesApiService } from "../../../services";
import { QUERY_KEY } from "../../../constants";
import { getUser, useRatingStarComp } from "../../../functions";

export const RatingStars = ({
  initialRating = null,
  mode = "recipe-card",
  recipeId,
}) => {
  const user = getUser();
  const { isLoading, data } = useGenericQuery(
    QUERY_KEY.USER_RATING,
    {
      recipeId,
      userId: user.id,
    },
    recipesApiService.getUserStars
  );
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
