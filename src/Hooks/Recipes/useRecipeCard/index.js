import { useAuth, useQueryMutation } from "../../../Hooks";
import { ROUTES } from "../../../constants";
import { useNavigate } from "react-router-dom";
export const useRecipeCard = () => {
  const navigate = useNavigate();
  const { checkIfUserAuth } = useAuth();
  const { saveRecipeseMutation } = useQueryMutation();

  const handleSaveRecipe = (recipeId) => {
    if (checkIfUserAuth()) return saveRecipeseMutation.mutate(recipeId);
    navigate(ROUTES.LOGIN);
  };

  return {
    handleSaveRecipe,
  };
};
