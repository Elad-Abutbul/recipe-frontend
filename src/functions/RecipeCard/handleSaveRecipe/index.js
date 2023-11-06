import { ROUTES } from "../../../constants";

export const handleSaveRecipe = async (
  recipeId,
  cookiesToken,
  saveRecipeseMutation,
  navigate
) => {
  if (cookiesToken) {
    return await saveRecipeseMutation.mutateAsync(recipeId);
  }
  navigate(ROUTES.LOGIN);
};
