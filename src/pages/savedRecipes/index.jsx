import { Layout } from "../../pages";
import { RecipesWithSearch } from "../../components";
import { getUser } from "../../Functions";
import { QUERY_KEY } from "../../constants";
import { usersApiService } from "../../services";
export const SavedRecipes = () => {
  const user = getUser();
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center">Saved Recipes</h1>
      <RecipesWithSearch
        urlParams={QUERY_KEY.SAVED_RECIPE}
        queryKey={QUERY_KEY.SAVED_RECIPE}
        service={usersApiService.savedRecipes}
        mode={"saved-recipes"}
        userId={user.id}
      />
    </Layout>
  );
};
