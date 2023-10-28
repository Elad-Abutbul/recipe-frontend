import React, { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useCreateRecipe } from '../../Api';
import { handleChangeState } from '../../functions';
import { useMutation, useQueryClient } from 'react-query';

export const CreateRecipe = ({ condition = 'regular' }) => {
  const queryClient = useQueryClient();
  const { axiosCreateRecipe } = useCreateRecipe();
  const user = localStorage.getItem('user');

  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [],
    instruction: '',
    imageUrl: '',
    cookingTime: 0,
    userOwner: user?._id,
  });

  const handleChange = (event) => {
    handleChangeState(event, setRecipe, recipe);
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const createRecipeMutation = useMutation(axiosCreateRecipe, {
    onSuccess: () => {
      queryClient.invalidateQueries(['allRecipes']);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (recipe.ingredients.length === 0) {
      enqueueSnackbar('Must Have Ingredients.', { variant: 'warning' });
    } else if (recipeIngredientsCheck()) {
      enqueueSnackbar('Must Fill in All Ingredients.', { variant: 'warning' });
    } else {
      createRecipeMutation.mutate(recipe);
    }
  };

  const recipeIngredientsCheck = () => {
    for (const ingredient of recipe.ingredients) {
      if (ingredient === '') {
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
          required
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <textarea
          name="instruction"
          placeholder="Instruction.."
          cols="20"
          rows="3"
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
              onChange={(e) => handleIngredientChange(e, index)}
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
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <input
          type="number"
          placeholder="Cooking Time (minutes).."
          name="cookingTime"
          onChange={handleChange}
          required
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={createRecipeMutation.isLoading}
        >
          {createRecipeMutation.isLoading ? 'Creating...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};
