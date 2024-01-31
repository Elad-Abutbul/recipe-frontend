import { Layout, RecipesWithSearch } from "../../components";
import { recipesApiService } from "../../services";
import { getUser } from "../../Utils";
import { QUERY_KEY } from "../../constants";

const Home = () => {
  const user = getUser();
  return (
    <Layout>
      {user && <h2 className="text-center text-2xl dark:text-white">Hello {user?.username}</h2>}
      <RecipesWithSearch
        urlParams={"home"}
        queryKey={QUERY_KEY.HOME}
        service={recipesApiService.getRecipes}
      />
    </Layout>
  );
};
export default Home;
