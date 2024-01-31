import { Layout, RecipesWithSearch } from "../../components";
import { usersApiService } from "../../services";
import { QUERY_KEY } from "../../constants";
import { getUser } from "../../Utils";

const SavedRecipes = () => {
  const user= getUser();
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center dark:text-white">Saved Recipes</h1>
      <RecipesWithSearch
        urlParams={QUERY_KEY.SAVED_RECIPE}
        queryKey={QUERY_KEY.SAVED_RECIPE}
        service={usersApiService.savedRecipes}
        mode={"saved-recipes"}
        userId={user?.id}
      />
    </Layout>
  );
};
export default SavedRecipes
