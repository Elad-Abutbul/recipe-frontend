import { Layout } from "../../pages";
import { useGetHomeRecipes } from "../../Hooks";
import { RecipesWithSearch } from "../../components";
import { getUser } from "../../Functions";

export const Home = () => {
  const user = getUser();
  return (
    <Layout>
      {user && <h2 className="text-center text-2xl">Hello {user?.username}</h2>}
      <RecipesWithSearch urlParams={"home"} useRecipe={useGetHomeRecipes} />
    </Layout>
  );
};
