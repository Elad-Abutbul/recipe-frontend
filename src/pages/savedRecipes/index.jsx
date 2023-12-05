import { useGetSavedRecipes } from "../../Hooks";
import { Layout } from "../../pages";
import { RecipesWithSearch } from "../../components";
import { getUser } from "../../Functions";

export const SavedRecipes = () => {
  const user = getUser();
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center">Saved Recipes</h1>
      <RecipesWithSearch urlParams={"savedRecipes"} useRecipe={useGetSavedRecipes} mode={'saved-recipes'} userId={user.id}/>
    </Layout>
  );
};