import { RecipesWithSearch } from "../../../components";
import { recipesApiService } from "../../../services";
import { QUERY_KEY } from "../../../constants";
import { getUser } from "../../../Utils";

const EditRecipes = () => {
  const user = getUser();
  return (
    <RecipesWithSearch
      userId={user?.id}
      urlParams={"user"}
      service={recipesApiService.getAllOwnerRecipes}
      mode={"edit-recipes"}
      queryKey={QUERY_KEY.ALL_OWNER_RECIPE}
    />
  );
};
export default EditRecipes;
