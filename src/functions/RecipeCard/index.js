import { useAuth } from "../../Api";
import { useQureyMutation } from "../../Functions";
import { ROUTES } from "../../constants";
import { useNavigate } from "react-router-dom";

const useRecipeCard = () => {
  const navigate = useNavigate();
  const { checkIfUserAuth } = useAuth();
  const { saveRecipeseMutation } = useQureyMutation();

  const handleSaveRecipe = (recipeId) => {
    if (checkIfUserAuth()) return saveRecipeseMutation.mutate(recipeId);
    navigate(ROUTES.LOGIN);
  };

  return {
    handleSaveRecipe,
  };
};
export default useRecipeCard;
