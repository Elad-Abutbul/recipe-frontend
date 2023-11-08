import React, { useState } from "react";
import { FullRecipe, RecipeIcons } from "../../../components";
import { ROUTES } from "../../../constants";
import {
  useDeleteOwnerRecipe,
  useDeleteSavedRecipe,
  useSaveRecipe,
} from "../../../Api";
import { useMutation, useQueryClient } from "react-query";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const RecipeCard = ({ recipe, condition = "allRecipes" }) => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [showFullRecipe, setShowFullRecipe] = useState(false);
  const { axiosDeleteSavedRecipe } = useDeleteSavedRecipe();
  const { axiosDeleteOwnerRecipe } = useDeleteOwnerRecipe();
  const { axiosSaveRecipe } = useSaveRecipe();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const saveRecipeseMutation = useMutation(axiosSaveRecipe, {
    onSuccess: () => {
      queryClient.invalidateQueries(["savedRecipes"]);
    },
  });

  const deleteOwnerRecipeMutation = useMutation({
    mutationFn: async (recipeId) => await axiosDeleteOwnerRecipe(recipeId),
    onSuccess: () => {
      queryClient.invalidateQueries(["allOwnerRecipes"]);
    },
  });

  const handleSaveRecipe = async (recipeId) => {
    if (cookies.access_token) {
      return await saveRecipeseMutation.mutateAsync(recipeId);
    }
    navigate(ROUTES.LOGIN);
  };

  const deleteSavedRecipeMutation = useMutation({
    mutationFn: async (recipeId) => axiosDeleteSavedRecipe(recipeId),
    onSuccess: () => queryClient.invalidateQueries(["savedRecipes"]),
  });

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
                deleteOwnerRecipeMutation={deleteOwnerRecipeMutation}
                handleSaveRecipe={handleSaveRecipe}
                recipe={recipe}
                saveRecipeseMutation={saveRecipeseMutation}
                setShowFullRecipe={setShowFullRecipe}
                deleteSavedRecipeMutation={deleteSavedRecipeMutation}
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
