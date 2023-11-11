import React, { useState } from "react";
import { localStorageService } from "../../services";
import {
  addIngredient,
  deleteIngredient,
  handleChangeState,
  handleIngredientChange,
  recipeIngredientsCheck,
  useQureyMutation,
} from "../../Functions";
import { ROUTES } from "../../constants";
import { enqueueSnackbar } from "notistack";
import { useLocation } from "react-router-dom";

export const CreateRecipe = () => {
  const location = useLocation();
  const singleRecipe = location.state?.singleRecipe;
  const { createRecipeMutation, editRecipeMutation } = useQureyMutation();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (recipe.ingredients.length === 0) {
      enqueueSnackbar("Must Have Ingredients.", { variant: "warning" });
    } else if (recipeIngredientsCheck(recipe)) {
      enqueueSnackbar("Must Fill in All Ingredients.", { variant: "warning" });
    } else if (location.pathname === ROUTES.EDIT_RECIPE) {
      editRecipeMutation.mutate({ recipe, recipeId: singleRecipe._id });
    } else {
      createRecipeMutation.mutate(recipe);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        {singleRecipe ? "Edit Recipes" : "Create Recipes"}
      </h1>
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
          onClick={() => addIngredient(recipe, setRecipe)}
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
              onChange={(event) =>
                handleIngredientChange(event, index, recipe, setRecipe)
              }
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
            />
            <button
              type="button"
              onClick={() => deleteIngredient(index, recipe, setRecipe)}
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
            ? location.pathname === ROUTES.EDIT_RECIPE
              ? "Editing"
              : "Creating..."
            : "Submit"}
        </button>
      </form>
    </div>
  );
};
