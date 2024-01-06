import { Form, Layout } from "../../components";
import { useLocation } from "react-router-dom";

const RecipeForm = () => {
  const location = useLocation();
  const fullRecipe = location.state?.singleRecipe;

  return (
    <Layout>
      <Form fullRecipe={fullRecipe} location={location} />
    </Layout>
  );
};
export default RecipeForm