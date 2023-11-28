import { Layout } from "../../pages";
import { useGetRecipesCategory } from "../../Hooks";
import { Recipes } from "../../components";


export const Home = () => {
  return (
    <Layout>
    <Recipes urlParams={'home'} useRecipe={useGetRecipesCategory} />
    </Layout>
  );
};
