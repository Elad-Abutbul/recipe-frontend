import React, { useState } from "react";
import { ShowFullRecipe } from "../showFullRecipe";
import { useSaveRecipe } from "../../Api";
import { ROUTES } from "../../constants";
import { useCookies } from "react-cookie";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { LiaSave } from "react-icons/lia";
import { GrFormView } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";

export const RecipeCard = ({ recipe, condition = "regular" }) => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [showFullRecipe, setShowFullRecipe] = useState(false);

  const { axiosSaveRecipe } = useSaveRecipe();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const saveRecipeseMutation = useMutation(axiosSaveRecipe, {
    onSuccess: () => {
      queryClient.invalidateQueries(["savedRecipes"]);
    },
  });

  const handleSaveRecipe = async (recipeId) => {
    if (cookies.access_token) {
      return await saveRecipeseMutation.mutateAsync(recipeId);
    }
    navigate(ROUTES.LOGIN);
  };

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
              <LiaSave
                size={30}
                disabled={saveRecipeseMutation.isLoading}
                onClick={() => handleSaveRecipe(recipe._id)}
              />
              <GrFormView
                size={30}
                onClick={() => setShowFullRecipe(true)}
                className="cursor-pointer"
              />

              {condition === "edit" && (
                <AiOutlineEdit
                  size={30}
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(ROUTES.EDIT_RECIPE,{state:{singleRecipe:recipe, condition:'edit'}})
                  }
                />
              )}
              {showFullRecipe && (
                <ShowFullRecipe
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
