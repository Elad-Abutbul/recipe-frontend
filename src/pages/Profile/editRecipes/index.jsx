import { useGetAllOwnerRecipes } from "../../../Hooks";
import { RecipesWithSearch } from "../../../components";
import { getUser } from "../../../Functions";

export const EditRecipes = () => {
  const user = getUser();
  return <RecipesWithSearch userId={user.id} urlParams={'editRecipes'} useRecipe={useGetAllOwnerRecipes} mode={"edit-recipes"} />
    
};
