import React, { useState } from "react";
import { FullRecipe, RecipeIcons } from "../../../components";
import {  useNavigate } from "react-router-dom";

export const RecipeCard = ({ recipe, mode = "all-recipes", page, category }) => {
  const [showFullRecipe, setShowFullRecipe] = useState(false)
  const navigate = useNavigate()
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
              <div>
              <h2 className="font-bold inline">type </h2>
              <p className="inline">
                {recipe.kosherType}
              </p>
              </div>
              <div>
                <div onClick={()=>navigate(`/user/${recipe?.userOwner?.id}`,{state:{username:recipe?.userOwner?.username}})}>
                <h2 className="font-bold text-lg inline">By </h2>
                <p className="mb-2 text-gray-800 hover:text-blue-500 inline">
                  {recipe?.userOwner?.username}
                </p>
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
