import React, { useState } from "react";
import { FullRecipe, RecipeIcons } from "../../../components";

export const RecipeCard = ({ recipe, condition = "allRecipes" }) => {
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

            <div className="flex justify-center mt-2 gap-5">
              <RecipeIcons
                condition={condition}
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
