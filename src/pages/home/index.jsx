import { Layout } from "../../pages";
import { useGetHomeRecipes } from "../../Hooks";
import { Recipes } from "../../components";


export const Home = () => {
  return (
    <Layout>
    <Recipes urlParams={'home'} useRecipe={useGetHomeRecipes} />
    </Layout>
  );
};
