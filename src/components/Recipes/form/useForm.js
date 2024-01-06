import { useState } from "react";
import { useQueryMutation } from "../../../Hooks";
import { getUser } from "../../../Utils";
import { ROUTES } from "../../../constants";
import { enqueueSnackbar } from "notistack";

const useForm = (fullRecipe) => {
  const { createRecipeMutation, editRecipeMutation } = useQueryMutation();
  const user = getUser();
  const [recipe, setRecipe] = useState({
    name: fullRecipe?.name || "",
    ingredients: fullRecipe?.ingredients || [],
    instruction: fullRecipe?.instruction || "",
    imageUrl: fullRecipe?.imageUrl || "",
    kosherType: fullRecipe?.kosherType || "",
    cookingTime: fullRecipe?.cookingTime || 0,
    userOwner: {
      id: user.id,
      username: user.username,
    },
  });

  const deleteIngredient = (index, recipe, setRecipe) => {
    const ingredients = [...recipe.ingredients];
    ingredients.splice(index, 1);
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredient = (recipe, setRecipe) => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleIngredientChange = (event, index, recipe, setRecipe) => {
    const { value } = event.target;
    recipe.ingredients[index] = value;
    setRecipe({ ...recipe });
  };

  const recipeIngredientsCheck = (recipe) =>
    recipe.ingredients.some((ingredient) => ingredient === "");

  const formHandleSubmit = async (event, recipe, location, fullRecipe) => {
    event.preventDefault();
    if (recipe.ingredients.length === 0) {
      enqueueSnackbar("Must Have Ingredients.", { variant: "warning" });
    } else if (recipeIngredientsCheck(recipe)) {
      enqueueSnackbar("Must Fill in All Ingredients.", {
        variant: "warning",
      });
    } else if (recipe.kosherType === "") {
      enqueueSnackbar("Must Have Kosher Type.", { variant: "warning" });
    } else if (location.pathname === ROUTES.EDIT_RECIPE) {
      editRecipeMutation.mutate({ recipe, recipeId: fullRecipe._id });
    } else {
      createRecipeMutation.mutate(recipe);
    }
  };

  return {
    recipe,
    setRecipe,
    deleteIngredient,
    addIngredient,
    formHandleSubmit,
    handleIngredientChange,
    recipeIngredientsCheck,
  };
};
export default useForm;
