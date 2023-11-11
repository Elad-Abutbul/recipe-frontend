export const deleteIngredient = (index, recipe, setRecipe) => {
  const ingredients = [...recipe.ingredients];
  ingredients.splice(index, 1);
  setRecipe({ ...recipe, ingredients });
};

export const handleIngredientChange = (event, index, recipe, setRecipe) => {
  const { value } = event.target;
  const ingredients = [...recipe.ingredients];
  ingredients[index] = value;
  setRecipe({ ...recipe, ingredients });
};

export const recipeIngredientsCheck = (recipe) => {
  for (const ingredient of recipe.ingredients) {
    if (ingredient === "") {
      return true;
    }
  }
  return false;
};

export const addIngredient = (recipe, setRecipe) => {
  setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
};
