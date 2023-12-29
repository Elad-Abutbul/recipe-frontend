import { RecipesWithSearch } from "../../../components";
import { getUser } from "../../../Functions";
import { recipesApiService } from "../../../services";
import { QUERY_KEY } from "../../../constants";

export const EditRecipes = () => {
  const user = getUser();
  return (
    <RecipesWithSearch
      userId={user.id}
      urlParams={"user"}
      service={recipesApiService.getAllOwnerRecipes}
      mode={"edit-recipes"}
      queryKey={QUERY_KEY.ALL_OWNER_RECIPE}
    />
  );
};
