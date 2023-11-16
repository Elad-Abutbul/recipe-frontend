import { enqueueSnackbar } from "notistack";
import { ROUTES } from "../../constants";

export const deleteIngredient = (index, recipe, setRecipe) => {
  const ingredients = [...recipe.ingredients];
  ingredients.splice(index, 1);
  setRecipe({ ...recipe, ingredients });
};

export const handleIngredientChange = (event, index, recipe, setRecipe) => {
  const { value } = event.target;
  recipe.ingredients[index] = value;
  setRecipe({ ...recipe });
};

export const recipeIngredientsCheck = (recipe) =>
  recipe.ingredients.some((ingredient) => ingredient === "");

export const addIngredient = (recipe, setRecipe) => {
  setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
};
export const formHandleSubmit = async (
  event,
  recipe,
  location,
  editRecipeMutation,
  singleRecipe,
  createRecipeMutation
) => {
  event.preventDefault();
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
