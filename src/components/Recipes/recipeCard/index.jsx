import React, { useState } from "react";
import {
  FullRecipe,
  Loading,
  RatingStars,
  RecipeIcons,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";
import useGetRecipe from "../../../Hooks/Recipes/useGetRecipe";

export const RecipeCard = ({
  recipeId,
  mode = "all-recipes",
  page,
  category,
}) => {
  const [showFullRecipe, setShowFullRecipe] = useState(false);
  const { isLoading, data } = useGetRecipe(recipeId);
  const recipe = data?.recipe;
  const navigate = useNavigate();

  if (isLoading) return <Loading />;

  return (
    <div
      onClick={(e) => {
        if (!e.target.closest(".user-link")) {
          e.stopPropagation();
          navigate(ROUTES.RECIPE, { state: { recipeId } });
        }
      }}
    >
      <li
        key={recipe?._id}
        className="bg-white shadow-md rounded-lg overflow-hidden"
      >
        <div className="h-full flex flex-col">
          <img
            src={recipe?.imageUrl}
            alt={recipe?.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col justify-between h-full ">
            <h2 className="text-2xl font-semibold mb-2">{recipe?.name}</h2>
            <div>
              <div>
                <h2 className="font-bold inline">type </h2>
                <p className="inline">{recipe?.kosherType}</p>
              </div>
              <div>
                <div
                  className="user-link"
                  onClick={() =>
                    navigate(`/user/${recipe?.userOwner?.id}`, {
                      state: { username: recipe?.userOwner?.username },
                    })
                  }
                >
                  <h2 className="font-bold text-lg inline">By </h2>
                  <p className="mb-2 text-gray-800 hover:text-blue-500 inline">
                    {recipe?.userOwner?.username}
                  </p>
                </div>
                <div className="flex justify-center mt-2">
                  <RatingStars
                    recipeId={recipe?._id}
                    initialRating={data?.sumOfRatings}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2 gap-5">
              <RecipeIcons
                mode={mode}
                recipe={recipe}
                setShowFullRecipe={setShowFullRecipe}
                page={page}
                category={category}
              />
              {showFullRecipe && (
                <FullRecipe
                  recipeId={recipeId}
                  onClose={() => setShowFullRecipe(false)}
                  key={recipe?._id}
                />
              )}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
