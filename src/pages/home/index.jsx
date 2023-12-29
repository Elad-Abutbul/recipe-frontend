import { Layout } from "../../pages";
import { RecipesWithSearch } from "../../components";
import { getUser } from "../../Functions";
import { QUERY_KEY } from "../../constants";
import { recipesApiService } from "../../services";

export const Home = () => {
  const user = getUser();
  return (
    <Layout>
      {user && <h2 className="text-center text-2xl">Hello {user?.username}</h2>}
      <RecipesWithSearch
        urlParams={"home"}
        queryKey={QUERY_KEY.HOME}
        service={recipesApiService.getRecipes}
      />
    </Layout>
  );
};
