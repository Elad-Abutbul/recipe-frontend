import React, { useState } from "react";
import { FullRecipe, RecipeIcons } from "../../../components";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe, mode = "all-recipes" }) => {
  const [showFullRecipe, setShowFullRecipe] = useState(false);
  return (
    <div>
      <li
        key={recipe._id}
        className="bg-white shadow-md rounded-lg overflow-hidden"
        style={{ height: "100%" }}
      >
        <div className="h-full flex flex-col">
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-semibold mb-2">{recipe.name}</h2>
            <div>
              <h2 className="font-bold text-lg inline">By </h2>
              <Link to={`/user/${recipe.userOwner.id}`}>
                <p className="mb-2 text-gray-800 hover:text-blue-500 inline">
                  {recipe.userOwner.username}
                </p>
              </Link>
            </div>
            <div className="flex justify-center mt-2 gap-5">
              <RecipeIcons
                mode={mode}
                recipe={recipe}
                setShowFullRecipe={setShowFullRecipe}
              />
              {showFullRecipe && (
                <FullRecipe
                  onClose={() => setShowFullRecipe(false)}
                  recipe={recipe}
                  key={recipe._id}
                />
              )}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
