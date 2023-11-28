import { useGetAllOwnerRecipes } from "../../../Hooks";
import { Layout } from "../../../pages";
import { Recipes } from "../../../components";
import { getUser } from "../../../Functions";

export const EditRecipes = () => {
  const user = getUser();
  return <Layout>
        <Recipes userId={user.id} urlParams={'editRecipes'} useRecipe={useGetAllOwnerRecipes} mode={"edit-recipes"} />
    </Layout>
};
