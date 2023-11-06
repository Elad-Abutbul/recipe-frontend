import React, { useState } from "react";
import { useCreateRecipe, useEditRecipe } from "../../Api";
import { localStorageService } from "../../services";
import { handleChangeState } from "../../functions";
import { useMutation, useQueryClient } from "react-query";
import { enqueueSnackbar } from "notistack";
import { useLocation } from "react-router-dom";

export const CreateRecipe = () => {
  const location = useLocation();
  const singleRecipe = location.state?.singleRecipe;
  const queryClient = useQueryClient();
  const { axiosCreateRecipe } = useCreateRecipe();
  const { axiosEditRecipe } = useEditRecipe();
  const userId = localStorageService.getItem("userId");

  const [recipe, setRecipe] = useState({
    name: singleRecipe?.name || "",
    ingredients: singleRecipe?.ingredients || [],
    instruction: singleRecipe?.instruction || "",
    imageUrl: singleRecipe?.imageUrl || "",
    cookingTime: singleRecipe?.cookingTime || 0,
    userOwner: userId,
  });

  const handleChange = (event) => {
    handleChangeState(event, setRecipe, recipe);
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const createRecipeMutation = useMutation({
    mutationFn: async (recipe) => await axiosCreateRecipe(recipe),
    onSuccess: () => {
      queryClient.invalidateQueries(["allRecipes"]);
    },
  });

  const editRecipeMutation = useMutation({
    mutationFn: async ({ recipe, recipeId }) =>
      await axiosEditRecipe(recipe, recipeId),
    onSuccess: () => {
      queryClient.invalidateQueries(["allOwnerRecipes"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (recipe.ingredients.length === 0) {
      enqueueSnackbar("Must Have Ingredients.", { variant: "warning" });
    } else if (recipeIngredientsCheck()) {
      enqueueSnackbar("Must Fill in All Ingredients.", { variant: "warning" });
    } else if (location.pathname === "/edit-recipe") {
      editRecipeMutation.mutate({ recipe, recipeId: singleRecipe._id });
    } else {
      createRecipeMutation.mutate(recipe);
    }
  };

  const recipeIngredientsCheck = () => {
    for (const ingredient of recipe.ingredients) {
      if (ingredient === "") {
        return true;
      }
    }
    return false;
  };

  const deleteIngredient = (index) => {
    const ingredients = [...recipe.ingredients];
    ingredients.splice(index, 1);
    setRecipe({ ...recipe, ingredients });
  };

  return (
    <div className="p-6 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter A Name.."
          name="name"
          onChange={handleChange}
          value={recipe.name}
          required
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <textarea
          name="instruction"
          placeholder="Instruction.."
          cols="20"
          rows="3"
          value={recipe.instruction}
          onChange={handleChange}
          required
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <button
          onClick={addIngredient}
          type="button"
          required
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Ingredient
        </button>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(event) => handleIngredientChange(event, index)}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
            />
            <button
              type="button"
              onClick={() => deleteIngredient(index)}
              className="px-2 py-1 text-red-600 hover:text-red-800"
            >
              X
            </button>
          </div>
        ))}
        <input
          type="text"
          placeholder="Enter A Image URL.."
          name="imageUrl"
          onChange={handleChange}
          required
          value={recipe.imageUrl}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <input
          type="number"
          placeholder="Cooking Time (minutes).."
          name="cookingTime"
          onChange={handleChange}
          required
          value={recipe.cookingTime}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={createRecipeMutation.isLoading}
        >
          {createRecipeMutation.isLoading
            ? location.pathname === "/edit-recipe"
              ? "Editing"
              : "Creating..."
            : "Submit"}
        </button>
      </form>
    </div>
  );
};
